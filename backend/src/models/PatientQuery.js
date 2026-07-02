import mongoose from "mongoose";

const patientQuerySchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: [true, "Patient name is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
  patientCity: {
    type: String,
    required: [true, "Patient city is required"],
  },
  patientMessage: {
    type: String,
    required: [true, "Patient message is required"],
    minlength: 10,
    maxlength: 500,
  },
});

const PatientQuery = mongoose.model("PatientQuery", patientQuerySchema);

export default PatientQuery;
