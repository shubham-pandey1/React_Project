import React, { useEffect, useState } from "react"; //usestate is a Hook
import { Button } from "reactstrap";
import Course from "./course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourse=()=>{
    useEffect(() => {
        document.title="All Courses";
    },[]);

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //for success
                console.log(response);
                setCourses(response.data);
                toast.success("courses has been loaded", {
                    position:"bottom-right"
                });
            },
            (error)=>{
                //for error handelling
                console.log(error);
                toast.error("something went wrong", {
                    position:"bottom-right"
                });
            }
        );
    };

    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);    //[] is use for not calling the function again and again

    const [courses,setCourses]=useState([]);

    const updateCourse =(id)=>{
        setCourses(courses.filter((c)=> c.id != id));
    }
    return(
        <div className="text-center">
            
            <h1>All Course</h1>
            <p>List of Courses are as follows...</p>
            {
                
                courses.length>0 ?
                 courses.map((item)=>
                    <Course key={item.id} course={item} update={updateCourse}/>
                ):"No Courses"
            }
        </div>
    );
};

export default AllCourse;