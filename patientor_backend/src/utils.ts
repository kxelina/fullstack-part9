import { Gender, NewPatient } from './types';
import {z} from 'zod';

const baseSchema = z.object({
    id: z.string().uuid(),
    description: z.string().nonempty(),
    date: z.string().date(),
    specialist: z.string().nonempty(),
    diagnosisCodes: z.array(z.string()).optional(),
  });
  
  const healthCheckEntrySchema = baseSchema.extend({
    type: z.literal('HealthCheck'),
    healthCheckRating: z.number().int().min(0).max(3),
  });
  
  const hospitalEntrySchema = baseSchema.extend({
    type: z.literal('Hospital'),
    discharge: z.object({
      date: z.string().date(),
      criteria: z.string().nonempty(),
    }),
  });
  
  const occupationalHealthcareEntrySchema = baseSchema.extend({
    type: z.literal('OccupationalHealthcare'),
    employerName: z.string().nonempty(),
    sickLeave: z
      .object({
        startDate: z.string().date(),
        endDate: z.string().date(),
      })
      .optional(),
  });

const entrySchema = z.union([
    healthCheckEntrySchema,
    hospitalEntrySchema,
    occupationalHealthcareEntrySchema,
  ]);

export const newPatientSchema = z.object({
    name: z.string().nonempty('Name is required'),
    dateOfBirth: z.string().date().nonempty('Date of birth is required'),
    ssn: z.string().nonempty('SSN is required'),
    gender: z.nativeEnum(Gender),
    occupation: z.string().nonempty('Occupation is required'),
    entries: z.array(entrySchema).optional(),
});

export const toNewPatient = (object: unknown): NewPatient => {
   const parsedPatient = newPatientSchema.parse(object);
    return {
        ...parsedPatient,
        entries: parsedPatient.entries || []
    };
};
