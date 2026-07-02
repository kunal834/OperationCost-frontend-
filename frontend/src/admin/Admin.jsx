import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [patients, setPatients] = useState([]);
  const [patientsQueries, setPatientsQueries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get All Patients
  const getPatients = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:3000/api/appointments/getappointments",
      );

      setPatients(response.data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Download Excel
  const downloadExcel = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/appointments/export",
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(response.data);

      const link = document.createElement("a");

      link.href = url;
      link.download = "appointments.xlsx";

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error.message);
    }
  };
  const downloadExcelQueries = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/appointments/export-queries",
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(response.data);

      const link = document.createElement("a");

      link.href = url;
      link.download = "queries.xlsx";

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPatientQueries = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/appointments/getPatientQueries",
      );

      setPatientsQueries(response.data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPatients();
    getPatientQueries();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <button
        onClick={downloadExcel}
        className="bg-green-600 cursor-pointer text-white px-5 py-2 rounded mb-6"
      >
        Download Excel
      </button>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <table className="border-collapse border w-full">
          <thead>
            <tr>
              <th className="border p-2">Patient</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Treatment</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td className="border p-2">{patient.patientName}</td>

                <td className="border p-2">{patient.phoneNumber}</td>

                <td className="border p-2">{patient.treatment}</td>

                <td className="border p-2">{patient.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h1 className="text-3xl mt-6 pt-4 border-t-2 font-bold mb-6">
        Patient Queries
      </h1>
      <button
        onClick={downloadExcelQueries}
        className="bg-green-600 cursor-pointer text-white px-5 py-2 rounded mb-6"
      >
        Download Excel
      </button>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <table className="border-collapse border w-full">
          <thead>
            <tr>
              <th className="border p-2">Patient</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Treatment</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {patientsQueries.map((patient) => (
              <tr key={patient._id}>
                <td className="border p-2">{patient.patientName}</td>

                <td className="border p-2">{patient.phoneNumber}</td>

                <td className="border p-2">{patient.patientCity}</td>

                <td className="border p-2">{patient.patientMessage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
