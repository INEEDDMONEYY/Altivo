import ApiError from "../utils/ApiError.js";

/**
 * Generic validation middleware.
 *
 * Accepts a Zod schema and validates:
 * - req.body
 * - req.params
 * - req.query
 */
const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return next(
        ApiError.validation(
          "Validation failed",
          errors
        )
      );
    }

    req.body = result.data.body;
    req.params = result.data.params;

    // Express 5 exposes req.query as a getter-only property, so it must be
    // redefined rather than reassigned directly.
    Object.defineProperty(req, "query", {
      value: result.data.query,
      writable: true,
      configurable: true,
    });

    next();
  };
};

export default validate;