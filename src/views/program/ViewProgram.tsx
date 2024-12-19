import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { ProgramType } from "../../core/schemas/programType";
import { CardImg} from "react-bootstrap";

const ViewProgram = () => {
    const [program, setProgram] = useState<ProgramType | null>(null);

    const url = '/mocks/program.json';

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            console.log(data)
            setProgram(data);
        })
    }, [])


return (
    <>
    <h1>Daily Program</h1>
    <div className="container">
        <div className="row">
            { 
            program?.program.sets.map((set) => (
                set.exercises.map((exercise) => (
                    <div className="col-md-3" key={exercise.id}>
                        <Card id={exercise.id}>
                            <Card.Body>
                                <Card.Title>{exercise.name}</Card.Title>
                                <CardImg variant="top" src={`/images/${exercise.img}`}></CardImg>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            ))
            }
        </div>
    </div>
    </>
    )
}

export default ViewProgram;
