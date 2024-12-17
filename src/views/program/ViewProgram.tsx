import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { ProgramType } from "../../core/schemas/programType";
import { CardImg, Col, Container, Row } from "react-bootstrap";

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
       { 
       program?.program.sets.map((set) => (

           <Container>
            <Row>
                { set.exercises.map((exercise) => (
                        <Col>
                            <Card id={exercise.id} style={{ width: '18rem' }} >
                                <Card.Body>
                                <Card.Title>{exercise.name}</Card.Title>
                                <CardImg variant="top" src={`/images/${exercise.img}`}></CardImg>
                                </Card.Body>
                            </Card>
                            </Col>
                    ))
                }
            </Row>
        </Container>
    ))
       }
    </>
    )
}

export default ViewProgram;
