import patients from '../../data/patients';
import { PatientData, PatientEntry } from '../types';

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


export default {
    getPatients,
    getNonSensitivePatients
};