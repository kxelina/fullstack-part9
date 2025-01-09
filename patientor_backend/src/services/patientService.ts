import patients from '../../data/patients';
import { NewPatient, PatientData, PatientEntry } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): PatientEntry[] => {
    return patients;
};

const getNonSensitivePatients = (): PatientData[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (patient: NewPatient) : PatientEntry => {
    const newPatient = {
        id: uuid(),
        ...patient
    };
    patients.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    getNonSensitivePatients,
    addPatient
};