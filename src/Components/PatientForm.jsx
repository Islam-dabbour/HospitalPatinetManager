
import { useState } from 'react';

function PatientForm({ onAddPatient }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [department, setDepartment] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const patient = {
            name: name,
            age: age,
            department: department
        };

        console.log(patient);
        onAddPatient(patient);

        setName("");
        setAge("");
        setDepartment("");
    }

    return (
        <>
            <form className="patient-form" onSubmit={handleSubmit}>

                <input
                    className="form-input"
                    type="text"
                    placeholder="Patient Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="form-input"
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <input
                    className="form-input"
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />

                <button className="add-button" type="submit">
                    Add Patient
                </button>

            </form>
        </>
    );
}

export default PatientForm;
