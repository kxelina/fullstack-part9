import { z } from 'zod';
import { newPatientSchema } from './utils';

export type Diagnose = 'code' | 'name' | 'latin?';

export type Patient = 'id' | 'name' | 'dateOfBirth'| 'gender' | 'occupation';

export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientEntry extends NewPatientEntry {
  id: string;
}

export type NewPatientEntry = z.infer<typeof newPatientSchema>;

export type PatientData = Omit<PatientEntry, 'ssn'>;

export type NewPatient = Omit<PatientEntry, 'id'>;

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}