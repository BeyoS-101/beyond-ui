
import { Form, Button } from "react-bootstrap";
import Header from './Header';
import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
import { NavLink,useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";

const Scomp = () =>{

  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);

  const { logindata } = useContext(LoginContext);
  

       
  
  const hellos =async(e)=>{


    const datap = await fetch("/user/by-type?type=0", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    
  });
  const res = await datap.json();

  setTodoss(res);
  }
  


  const navigate = useNavigate();
  const onAddDataClick = useCallback(() => {
    navigate("/processdash");
  }, [navigate]);


  

let i=0


useEffect(() => {
 
  hellos();

}, []);


    return(
        
         
        
      <div className="home1-hello">
         
      

      <div className="home1-add-inner" />
      <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
     <div className="ellipse-icon"> 
      <Header/>
      </div>
      <h2 className="subuser">Client list</h2>
      <Link to="/cli"><a className="measure">Clients</a></Link> 
      <Link to="/client"><a className="reduce">Clientcontrol</a></Link>
      <Link to="/superadd"><a className="offset">Addsuperadmin</a></Link>
      <Link to="/clidet"><a className="dashboard">Client details</a></Link> 
      
<table className="clienttable2">
<thead>
  <tr>
    <th>S.NO</th>
    <th>Name</th>
    <th>Email</th>
    <th>currency</th>
    <th>poc number</th>
    <th>poc name</th>
    <th>No.of.employees</th>
    <th>website</th>
    <th>address</th>
    <th>description</th>
  </tr>
</thead>




      <tbody>
      {usrs.length > 0  ? usrs.map
    (todo => (
        <tr>
        <td  key="{qaait}">{i=i+1}</td>
        <td  key="{cname}">{todo.cname}</td>
        <td  key="{email">{todo.email}</td>
        <td  key="{currency}">{todo.currency}</td>
        <td  key="{pocnumber">{todo.pocnumber}</td>
        <td  key="{pocname}">{todo.pocname}</td>
        <td  key="{noemployees">{todo.noemployees}</td>
        <td  key="{website}">{todo.website}</td>
        <td  key="{address">{todo.address}</td>
        <td  key="{description}">{todo.description}</td>
        </tr>
        )) : (
          <tr><td><p>You have no users</p></td></tr>
        )}
      </tbody>


      
    

</table>



 <ToastContainer/>

    </div>
        
   
   
  
    )}

export default Scomp;