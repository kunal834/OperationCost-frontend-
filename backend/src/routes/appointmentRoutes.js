import express from "express";
import {
  createAppointMent,
  getAllAppointments,
  exportAppointments,
  contactUs,
  getPatientQueries,
  exportQueries,
} from "../controllers/appointmentController.js";

export const appointmentRoutes = express.Router();

appointmentRoutes.post("/createAppointment", createAppointMent);
appointmentRoutes.get("/getappointments", getAllAppointments);
appointmentRoutes.get("/export-appointments", exportAppointments);
appointmentRoutes.post("/contact-us", contactUs);
appointmentRoutes.get("/getPatientQueries", getPatientQueries);
appointmentRoutes.get("/export-queries", exportQueries);
