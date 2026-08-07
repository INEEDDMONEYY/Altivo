import ApiError from "../../utils/ApiError.js";
import { buildPagination, buildPaginationMeta } from "./pagination.js";

const applyPopulate = (query, populate) => {
  [].concat(populate).filter(Boolean).forEach((path) => {
    query = query.populate(path);
  });
  return query;
};

/**
 * Builds a set of Mongo-aware CRUD helpers for a given Model so individual
 * repositories don't each hand-roll findById/paginate/session/projection logic.
 * Every "single document" lookup throws ApiError.notFound instead of
 * silently returning null, so callers never need to null-check by hand.
 */
const createBaseRepository = (Model, { entityName } = {}) => {
  const label = entityName || Model.modelName;

  const findById = async (
    id,
    { projection = null, populate = [], session = null, lean = true } = {}
  ) => {
    let query = Model.findById(id, projection).session(session);
    query = applyPopulate(query, populate);
    if (lean) query = query.lean();

    const doc = await query;

    if (!doc) {
      throw ApiError.notFound(`${label} not found`);
    }

    return doc;
  };

  const findOne = async (
    filter = {},
    { projection = null, populate = [], session = null, lean = true } = {}
  ) => {
    let query = Model.findOne(filter, projection).session(session);
    query = applyPopulate(query, populate);
    if (lean) query = query.lean();

    return query;
  };

  const findOneOrThrow = async (filter = {}, options = {}) => {
    const doc = await findOne(filter, options);

    if (!doc) {
      throw ApiError.notFound(`${label} not found`);
    }

    return doc;
  };

  const paginate = async (
    filter = {},
    {
      page,
      limit,
      sort = { createdAt: -1 },
      projection = null,
      populate = [],
      session = null,
    } = {}
  ) => {
    const pagination = buildPagination({ page, limit });

    let query = Model.find(filter, projection)
      .sort(sort)
      .skip(pagination.skip)
      .limit(pagination.limit)
      .session(session);

    query = applyPopulate(query, populate);

    const [data, total] = await Promise.all([
      query.lean(),
      Model.countDocuments(filter).session(session),
    ]);

    return {
      data,
      meta: buildPaginationMeta(total, pagination),
    };
  };

  const create = async (data, { session = null } = {}) => {
    const [doc] = await Model.create([data], { session });
    return doc;
  };

  const updateById = async (
    id,
    updates,
    { session = null, runValidators = true } = {}
  ) => {
    const doc = await Model.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators,
      session,
    });

    if (!doc) {
      throw ApiError.notFound(`${label} not found`);
    }

    return doc;
  };

  const deleteById = async (id, { session = null } = {}) => {
    const doc = await Model.findByIdAndDelete(id, { session });

    if (!doc) {
      throw ApiError.notFound(`${label} not found`);
    }

    return doc;
  };

  return {
    findById,
    findOne,
    findOneOrThrow,
    paginate,
    create,
    updateById,
    deleteById,
  };
};

export default createBaseRepository;
