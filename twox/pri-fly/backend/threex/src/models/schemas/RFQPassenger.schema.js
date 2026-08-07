import mongoose from "mongoose";


const PassengerDetailSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            maxlength: 100,
        },

        lastName: {
            type: String,
            trim: true,
            maxlength: 100,
        },

        type: {
            type: String,
            enum: [
                "adult",
                "child",
                "infant",
            ],
            default: "adult",
        },

        notes: {
            type: String,
            trim: true,
            maxlength: 250,
        },
    },
    {
        _id: true,
    }
);



const RFQPassengerSchema = new mongoose.Schema(
    {
        passengerCount: {
            type: Number,
            required: true,
            min: 1,
        },


        passengers: {
            type: [
                PassengerDetailSchema,
            ],
            default: [],
        },


        specialRequirements: {
            type: [
                String,
            ],
            default: [],
        },


        pets: {
            hasPets: {
                type: Boolean,
                default: false,
            },

            count: {
                type: Number,
                default: 0,
                min: 0,
            },
        },


        luggageNotes: {
            type: String,
            trim: true,
            maxlength: 500,
        },
    },
    {
        _id: false,
    }
);



/**
 * Validate passenger count
 *
 * Ensures detailed passengers
 * cannot exceed requested count.
 */
RFQPassengerSchema.methods.hasValidPassengerCount =
function () {

    if (!this.passengers.length) {
        return true;
    }


    return (
        this.passengers.length <=
        this.passengerCount
    );
};



export default RFQPassengerSchema;