import mongoose from "mongoose";

const appointmentSchema = await mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, "Patient name is required"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    treatment: {
      type: String,
      required: [true, "Treatment is required"],
      trim: true,
    },

    // status: {
    //   type: String,
    //   enum: ["Pending", "Contacted", "Completed"],
    //   default: "Pending",
    // },
  },
  {
    timestamps: true,
  },
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
