import  React,{ Fragment, useEffect,useState } from "react";
import { Container, FormGroup, Input,Button, Form, Toast } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const AddCourse=()=>{

    useEffect(()=>{
        document.title = "Add Course";
    },[]);

    const handleForm=(e)=>{
        e.preventDefault();
        console.log(course);
        postDatatoServer(course);
    }

    //to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course Added Successfully!",{
                    position:"bottom-right"
                });
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("There is some error occured",{
                    position:"bottom-right"
                });
            }
        )
    }

    const [course,setCourses] = useState({});
    return(
        <Fragment>
            <Container className="fw-normal justify-content-center">
                <h1 className="text-center">Add Course</h1>
            <Form onSubmit={handleForm}>
            <FormGroup className=" col-md-10 ps-5">
                <label className="">Course Id</label>
                <Input type="text" placeholder="Enter here" name="userId" id="userId" 
                    onChange={(e)=>{
                        setCourses({...course, id: e.target.value});
                    }}
                />
            </FormGroup>
            <FormGroup className=" col-md-10 ps-5">
                <label>Course Title</label>
                <Input type="text" placeholder="Enter here" name="title" id="title"
                    onChange={(e)=>{
                        setCourses({...course, title: e.target.value});
                    }}
                />
            </FormGroup>
           
            <FormGroup className="col-md-10 ps-5">
                <label for="exampleText">
                Description
                </label>
                <Input
                id="exampleText"
                name="text" placeholder="Enter here..."
                style={{height: 100}}
                type="textarea"
                onChange={(e)=>{
                    setCourses({...course, description: e.target.value});
                }}
                />
            </FormGroup>
        <div className="text-center col-md-10 ps-5 mb-2">
            <Button type="submit" color="success" className="col-md-3">Add</Button>
            <Button color="primary" type="reset" className="col-md-3 ms-3">Clear</Button>
        </div>
        </Form>
            </Container>
        </Fragment>
    )
}

export default AddCourse;