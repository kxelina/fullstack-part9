import { Gender, NewPatient } from './types';
import {z} from 'zod';


export const newPatientSchema = z.object({
    name: z.string().nonempty('Name is required'),
    dateOfBirth: z.string().date().nonempty('Date of birth is required'),
    ssn: z.string().nonempty('SSN is required'),
    gender: z.nativeEnum(Gender),
    occupation: z.string().nonempty('Occupation is required')
});

export const toNewPatient = (object: unknown): NewPatient => {
   return newPatientSchema.parse(object);
};
