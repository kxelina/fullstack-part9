import { CoursePart } from "./utils";

interface ContentProps {
    courseParts: CoursePart[];
}

const Content = ({ courseParts }: ContentProps) => {
    return (
        <div>
            {courseParts.map((part, i) => <p key={i}>{part.name} {part.exerciseCount}</p>)}
        </div>
    );
};

export default Content;