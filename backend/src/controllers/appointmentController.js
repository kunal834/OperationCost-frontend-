
import Appointment from "../models/Appointment.js";
import PatientQuery from "../models/PatientQuery.js";
import * as XLSX from "xlsx";
import {
  generateAppointmentsExcel,
  generateQueriesExcel,
} from "../utils/excelExport.js";

// =======================
// Create Appointment
// =======================
export const createAppointMent = async (req, res) => {
  try {
    const { patientName, phoneNumber, treatment } = req.body;

    if (!patientName || !phoneNumber || !treatment) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const appointment = await Appointment.create({
      patientName,
      phoneNumber,
      treatment,
    });

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully.",
      data: appointment,
    });
  } catch (error) {
    console.error("Create Appointment Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

// =======================
// Get All Appointments
// =======================
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error("Get Appointments Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

// =======================
// Export Appointments Excel
// =======================
export const exportAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    const workbook = generateAppointmentsExcel(appointments);

    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=appointments.xlsx",
    );

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    res.send(buffer);
  } catch (error) {
    console.error("Export Appointments Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

// =======================
// Contact Us
// =======================
export const contactUs = async (req, res) => {
  try {
    const { patientName, phoneNumber, patientCity, patientMessage } = req.body;

    if (!patientName || !phoneNumber || !patientCity || !patientMessage) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const newQuery = await PatientQuery.create({
      patientName,
      phoneNumber,
      patientCity,
      patientMessage,
    });

    return res.status(201).json({
      success: true,
      message: "Your query has been submitted successfully.",
      data: newQuery,
    });
  } catch (error) {
    console.error("Contact Us Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

// =======================
// Get Patient Queries
// =======================
export const getPatientQueries = async (req, res) => {
  try {
    const patientQueries = await PatientQuery.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: patientQueries.length,
      data: patientQueries,
    });
  } catch (error) {
    console.error("Get Patient Queries Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

// =======================
// Export Patient Queries Excel
// =======================
export const exportQueries = async (req, res) => {
  try {
    const patientQueries = await PatientQuery.find().sort({
      createdAt: -1,
    });

    const workbook = generateQueriesExcel(patientQueries);

    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=patient-queries.xlsx",
    );

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    res.send(buffer);
  } catch (error) {
    console.error("Export Patient Queries Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};
