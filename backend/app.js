import express from "express";
import cors from "cors";
import { appointmentRoutes } from "./src/routes/appointmentRoutes.js";

export const app = express();

app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.use("/api/appointments", appointmentRoutes);
    