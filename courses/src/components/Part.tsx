import { courseParts } from '../types';

export const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

courseParts.forEach(part => {
    switch (part.kind) {
        case "basic":
            console.log(part.name, part.exerciseCount, part.description);
            break;
        case "group":
            console.log(part.name, part.exerciseCount, part.groupProjectCount);
            break;
        case "background":
            console.log(part.name, part.exerciseCount, part.description, part.backgroundMaterial);
            break;
        case "special":
            console.log(part.name, part.exerciseCount, part.description, part.requirements);
            break;
        default:
            return assertNever(part);
    }
});

export default courseParts;