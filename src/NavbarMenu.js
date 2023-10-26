import React, { useEffect } from "react";
import { Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import Check from "./Check";
import Students from "./student";
import Register from "./Register"

const NavbarMenu=()=> {
  const Logout = ()=>{

    localStorage.setItem("name","");
    window.location.href="/";
  }
  useEffect(() => {}, []);

  return (
    <div>
      <Router>
        <Navbar expand="lg"  sticky="top" style={{backgroundColor: '#0a6691'}}>
          <Container>
           

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link style={{color:'#fff'}}>ระบบลงชื่อเข้าชั้นเรียน</Nav.Link>
                <Nav.Link style={{color:'#fff'}} as={Link} to={"/"}>
                  หน้าหลัก
                </Nav.Link>
                <Nav.Link  style={{color:'#fff'}}  as={Link} to={"/studentcheck"}>
                  บันทึกข้อมูลการเข้าเรียน
                </Nav.Link>
              
                <Nav.Link  style={{color:'#fff'}}  as={Link} to={"/students"}>
                  จัดการข้อมูลนักศึกษา
                </Nav.Link>
                {

                  localStorage.getItem("name") !== "" ?(<>
                    <Nav.Link  style={{color:'#fff'}} >
                    {
                         localStorage.getItem("name")
                    }
                  </Nav.Link>
                     <Nav.Link 
                       onClick={()=>Logout()}
                       style={{color:'#fff'}}  as={Link}>
                  LogOut
                </Nav.Link>
                </>) : ( 
                     <Nav.Link  style={{color:'#fff'}}  as={Link} to={"/"}>
                  Login
                </Nav.Link>
                  )
                }
               
               
              
              </Nav>
                
         
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/studentcheck" Component={Check}></Route>
          <Route path="/students" Component={Students}></Route>
          <Route path="/register" Component={Register}></Route>
        
        </Routes>
      </Router>
    </div>
  );
}
export default NavbarMenu;
