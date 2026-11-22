
import { useState } from 'react'
import PatientForm from './Components/PatientForm'
import './App.css'

function App() {

  const [patients, setPatients] = useState([]);

  function addPatient(patient) {
    setPatients([...patients, patient]);
  }

  function deletePatient(indexToDelete) {
    setPatients(
      patients.filter((patient, index) => index !== indexToDelete)
    );
  }

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Hospital Patient Manager</h1>

        <PatientForm onAddPatient={addPatient} />

        <div className="patients-section">
          <p className="total-patients">
            Total: {patients.length}
          </p>

          <h2>Patients</h2>

          {patients.map((patient, index) => (
            <div className="patient-card" key={index}>
              <p className="patient-number">Number: {index + 1}</p>
              <p className="patient-name">Name: {patient.name}</p>
              <p className="patient-age">Age: {patient.age}</p>
              <p className="patient-department">
                Department: {patient.department}
              </p>

              <button
                className="delete-button"
                onClick={() => deletePatient(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
