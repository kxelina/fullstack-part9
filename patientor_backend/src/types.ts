export type Diagnose = 'code' | 'name' | 'latin?';

export type Patient = 'id' | 'name' | 'dateOfBirth'| 'gender' | 'occupation';

export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  ssn: string;
}

export type PatientData = Omit<PatientEntry, 'ssn'>;