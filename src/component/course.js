import axios from "axios";
import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from 'reactstrap';
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course, update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                
                toast.success("Deleted Successfully",{
                    position: "bottom-right"
                });
                update(id);
            },
            (error)=>{
                
                toast.error("Failed to delete!",{
                    position: "bottom-right"
                });
            }
        )
    };

    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="fw-bold">
                {course.title}
                {console.log(course.id)}
                </CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                <Button color="primary ms-3">Update</Button>
            </Container>
            </CardBody>
        </Card>
    );
}

export default Course;