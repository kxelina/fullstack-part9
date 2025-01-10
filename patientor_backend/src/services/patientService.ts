import patients from '../../data/patients';
import { NewPatient, NonSenstivePatient, Patient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
    return patients;
};

const getNonSensitivePatients = (): NonSenstivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (patient: NewPatient) : Patient => {
    const newPatient = {
        id: uuid(),
        ...patient
    };
    patients.push(newPatient);
    return newPatient;
};

const findById = (id: string): Patient | undefined => {
    return patients.find(p => p.id === id);
};

export default {
    getPatients,
    getNonSensitivePatients,
    addPatient,
    findById
};