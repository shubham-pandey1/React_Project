import React from 'react';

import logo from './logo.svg';
import './App.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Container, Row,Col,Header } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Home  from './component/home';
import Course from './component/course';
import AllCourse from './component/AllCourses';
import AddCourse from './component/AddCourses';
import Menus from './component/LeftOption';
import cors from "cors";



function App(){
  const notify = () => toast.success("Wow so easy !",{theme:"colored", position:"bottom-right"});

  return (
    <div>
      <Router>
      <ToastContainer/>
      
    <Container>
      <header className='py-3 bg-warning text-center'>
        <h1> Welocome to Courses Application</h1>
      </header>
      <Row>
        <Col className='col-md-4'>
          <Menus/>
        </Col>
        <Col className='col-md-8'>
          <Routes>
          <Route path='/' Component={Home} exact/>
          <Route path='/add-course' Component={AddCourse} exact/>
          <Route path='/view-courses' Component={AllCourse}/>
          </Routes>
        </Col>
      </Row>
    </Container>
    </Router>
    </div>
  );
}

export default App;

