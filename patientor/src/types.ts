export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[];
}

export interface Entry {
  id: string;
  description: string;
  date: string;
  diagnosisCodes?: string[];
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;