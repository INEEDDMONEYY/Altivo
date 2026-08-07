import mongoose from "mongoose";


const RFQLegSchema = new mongoose.Schema(
    {
        departureAirport: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Airport",
            required: true,
        },

        arrivalAirport: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Airport",
            required: true,
        },


        departureDate: {
            type: Date,
            required: true,
        },


        departureTimeWindow: {
            start: {
                type: String,
                trim: true,
            },

            end: {
                type: String,
                trim: true,
            },
        },


        isDateFlexible: {
            type: Boolean,
            default: false,
        },


        sequence: {
            type: Number,
            required: true,
            min: 1,
        },


        notes: {
            type: String,
            trim: true,
            maxlength: 500,
        },
    },
    {
        _id: true,
        timestamps: true,
    }
);



/**
 * Indexing
 *
 * Helps with future availability searches.
 */
RFQLegSchema.index({
    departureAirport: 1,
    arrivalAirport: 1,
});



/**
 * Determines if this leg crosses countries.
 *
 * Airport model will eventually provide country data.
 */
RFQLegSchema.methods.isInternational = function () {

    if (
        !this.departureAirport ||
        !this.arrivalAirport
    ) {
        return false;
    }


    return (
        this.departureAirport.country !==
        this.arrivalAirport.country
    );
};



export default RFQLegSchema;