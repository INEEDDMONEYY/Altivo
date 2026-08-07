import mongoose from "mongoose";

import {
    CABIN_CLASSES,
} from "../../constants/rfq/cabinClasses.js";



import {
    TRIP_TYPES,
} from "../../constants/rfq/tripTypes.js";



const RFQPreferenceSchema = new mongoose.Schema(
{
    tripType: {
        type: String,
        enum: Object.values(TRIP_TYPES),
        required: true,
    },


    aircraftCategories: {
        type: [
            String,
        ],
        default: [],
    },


    preferredAircraft: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Aircraft",
        },
    ],


    cabinClass: {
        type: String,
        enum: Object.values(CABIN_CLASSES),
        default: CABIN_CLASSES.VIP,
    },


    allowAlternativeAircraft: {
        type: Boolean,
        default: true,
    },


    allowNearbyAirports: {
        type: Boolean,
        default: false,
    },


    amenities: {
        wifi: {
            type: Boolean,
            default: false,
        },


        catering: {
            type: Boolean,
            default: false,
        },


        petsAllowed: {
            type: Boolean,
            default: false,
        },


        smokingAllowed: {
            type: Boolean,
            default: false,
        },
    },


    specialRequests: {
        type: String,
        trim: true,
        maxlength: 1000,
    },

},
{
    _id: false,
}
);



/**
 * Determines whether the RFQ
 * allows flexible aircraft matching.
 */
RFQPreferenceSchema.methods.isFlexibleAircraftRequest =
function () {

    return (
        this.allowAlternativeAircraft === true
    );

};



export default RFQPreferenceSchema;