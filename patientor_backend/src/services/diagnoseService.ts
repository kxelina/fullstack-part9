import diagnoses from '../../data/diagnoses';
import { DiagnoseEntry } from '../types';

const getDiagnoses = (): DiagnoseEntry[] => {
    return diagnoses;
};

const addDiagnose = () => {
    return null;
};

export default {
    getDiagnoses,
    addDiagnose
};