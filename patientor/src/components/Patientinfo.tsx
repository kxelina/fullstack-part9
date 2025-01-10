import  {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Patient, Entry, Diagnosis } from '../types';
import patientService from '../services/patients';
import { Card, Typography, CardContent } from '@mui/material';
import { Female, Male, Transgender } from '@mui/icons-material';

const Patientinfo = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

    useEffect(() => {
        patientService.getPatient(id).then((patient) => {
            setPatient(patient);
        });
        patientService.getDiagnoses().then((diagnoses) => {
            setDiagnoses(diagnoses);
        });
    }, [id]);

    if (!patient) {
        return null;
    }

    const GenderIcon = ({ gender }: { gender: string }) => {
        switch (gender) {
            case "male":
                return <Male />;
            case "female":
                return <Female />;
            default:
                return <Transgender />;
        }
    };

    const diagnosesList = (code: string): string => {
        const diagnosis = diagnoses.find((d) => d.code === code);
        return diagnosis ? diagnosis.name : code;
    };


    return (
        <Card>
            <CardContent>
            <Typography variant="h4">
                {patient.name} <GenderIcon gender={patient.gender} />
            </Typography>
            <Typography>
                ssh: {patient.ssn}
            </Typography>
            <Typography>
                occupation: {patient.occupation}
            </Typography>
            < br />
            <Typography variant='h6'>
                entries
            </Typography>
            < br />
                {patient.entries.map((entry: Entry) => (
                    <div key={entry.id}>
                        <Typography>
                        {entry.date} <i>{entry.description}</i>
                        </Typography>
                        <ul>
                            {entry.diagnosisCodes?.map((code) => (
                                <li key={code}>
                                    <Typography>
                                        {code} {diagnosesList(code)}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                   </div>
                ))}
            </CardContent>
        </Card>
    );
}

export default Patientinfo;