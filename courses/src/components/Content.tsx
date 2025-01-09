import courseparts, { assertNever } from './Part';

const Content = () => {
    return (
        <div>
            {courseparts.map((part, i) => {
                switch (part.kind) {
                    case "basic":
                        return (
                            <p key={i}>
                            <b>{part.name} {part.exerciseCount}</b>
                            <br />
                            <i>{part.description}</i>
                            </p>
                        );
                    case "group":
                        return (
                            <p key={i}>
                            <b>{part.name} {part.exerciseCount}</b>
                            <br />
                            project exercises {part.groupProjectCount}
                            </p>
                        );
                    case "background":
                        return (
                            <p key={i}>
                            <b>{part.name} {part.exerciseCount}</b> 
                            <br />
                            <i>{part.description}</i>
                            <br />
                            {part.backgroundMaterial}
                            </p>
                        );
                    case "special":
                        return (
                            <p key={i}>
                            <b>{part.name} {part.exerciseCount}</b>
                            <br />
                            <i>{part.description}</i>
                            <br />
                            required skills: {part.requirements.join(", ")}
                            </p>
                        );
                    default:
                        return assertNever(part);
                }
            })}
        </div>
    );
};

export default Content;