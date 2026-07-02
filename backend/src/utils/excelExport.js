import * as XLSX from "xlsx";

export const generateAppointmentsExcel = (appointments) => {
  const data = appointments.map((appointment) => ({
    "Patient Name": appointment.patientName,
    "Phone Number": appointment.phoneNumber,
    Treatment: appointment.treatment,
    Status: appointment.status,
    "Created At": appointment.createdAt,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Appointments");

  return workbook;
};

// export default generateAppointmentsExcel;

export const generateQueriesExcel = (queries) => {
  const data = queries.map((query) => ({
    "Patient Name": query.patientName,
    "Phone Number": query.phoneNumber,
    City: query.patientCity,
    Message: query.patientMessage,
    "Created At": query.createdAt,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Patient Queries");

  return workbook;
};

// export default generateQueriesExcel;
