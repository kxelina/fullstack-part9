import { CoursePartBase } from "../types";

interface TotalProps {
    courseParts: CoursePartBase[];
}

const Total = ({ courseParts }: TotalProps) => {
    const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);
    return <p>Number of exercises {totalExercises}</p>;
};

export default Total;