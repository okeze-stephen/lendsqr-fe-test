import { useRef, useState } from 'react';
import { leadsqrDB } from "../components/leadsqrDB";
import '../assets/styles/main.scss';
import '../assets/styles/custom.css';
import {Row, Col, Form, Button } from 'react-bootstrap';
import { link, useNavigate } from "react-router-dom";


(()=>{

  if('indexedDB' in window){
    console.log("Your Browser does not support IndexedDB Database");
    return;
  }


})();


  const dbname = "LendsqrDBase";
  const requestDB=window.indexedDB.open(dbname);

  requestDB.onupgradeneeded=()=>{
    let db=requestDB.result;
    let userdata = db.createObjectStore("user",{autoIncrement:true});

    // add data
    userdata.put(leadsqrDB);
  }

  requestDB.onsuccess=()=>{
    if(requestDB.readyState=="done"){
      console.log("Account Created Successfully...");
    }
  };



const Login = () => {

    /* function to sort for user */
    const Sortobj=sortobj=>{
      let obj={};
      obj={
        
      }
    }

  /* getting inputs */
  const usernameid = document.getElementById("txtUsername");
  const userpass = document.getElementById("txtPass");

  const loginUser = "Willy"

  const userinput = useRef()
    /* setting users */
    const [users, setUsers]=useState(leadsqrDB);    

        /* search to know if user exist */
        const [searchUsername, setUsername] = useState("");    


       const search = (event) => {
          const matchedUsers = leadsqrDB.filter((user) => {
            return `${user.userName}`
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
          });

          setUsers(matchedUsers);
          setUsername(event.target.value);
       };
       

       

// login start


  // to navigate after a entering password
  const navigate = useNavigate()

    /* button */
    const btnlogin=document.getElementById("btnSubmit")
   //  btnlogin.addEventListener('click', LoginState)


    function LoginState() {
      navigate('Dashboard')
    }

// login ends

     /* return users */
    const renderUsers =() => {
      return users.map((user) => {
        return (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.userName}</td>
              </tr>
        );
      });
    };


  return (
<div className='login-container' style={{display: "flex"}}>
  <Row className='landing'>

        <Col className='left-side'>
          <div>
          <img src="./img/img_login.jpg" style={{width: "100%", border: "0px"}} />
          </div>

        </Col>

      <Col className='right-side'>
        <div className='Right-top-text'>
            <h1 style={{color: "#213F7D"}}>Welcome! </h1>
            <h6>Enter details to login</h6>
          </div>
        <div className='Login-inside-container'>

             <Form className='Login-form'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" id='txtUsername' placeholder="Enter Your Email" ref={userinput} value={searchUsername} onChange={search} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" id='txtPass' placeholder="Enter Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label htmlFor='#' style={{cursor: "pointer", color: "#39CDCC"}}>Forgot Password?</Form.Label>
              </Form.Group>
              <Button variant="primary" onClick={() =>
                {if (userinput.current.value !== "") {
                  return (
                navigate('Dashboard'))
                }
                  else{
                    return (
                      alert("Invalid Username and Password Combination") 
                    )
                  }
                }} style={{width: "100%", background: "#39CDCC", borderColor: "#39CDCC" }}>
                Submit
              </Button>
          </Form>
        </div>
      </Col>
    </Row>
{/*
<div className="tableContainer">
  <table>
    <thead>
      <tr>
        <th><span>ID</span></th>
        <th><span>Email</span></th>
        <th><span>Username</span></th>
      </tr>
    </thead>
    <tbody>{ renderUsers() }</tbody>
  </table>
</div>

              */}

</div>
  )
}

export default Login