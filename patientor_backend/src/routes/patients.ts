import express, { Request, Response, NextFunction } from 'express';
import patientService from '../services/patientService';
import { newPatientSchema } from '../utils';
import {z} from 'zod';
import { NewPatient, Patient} from '../types';

const router = express.Router();

const errorMiddleware = (error: Error, _req: Request, res: Response, next: NextFunction) => {
    if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.issues });
    } else {
    next(error);
    }
};

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
    try {
        newPatientSchema.parse(req.body);
        next();
    } catch (e: unknown) {
        next(e);
        return;
    }
};

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatient>, 
    res: Response<Patient>) => {
    const addedPatient = patientService.addPatient(req.body);
    res.json(addedPatient);
});

router.get('/:id', (req, res) => {
    const patient = patientService.findById(req.params.id);
    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

router.use(errorMiddleware);

export default router;