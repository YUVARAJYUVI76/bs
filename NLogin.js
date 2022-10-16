import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/NLogin.css'
function Nlogin() {
    const [userName,setName]=useState("");
    const [userNumber,setNumber]=useState(0);
    const [userList,setUserList]=useState([]);
  const [upName,setUpName]=useState("");
    useEffect(()=>{
      axios.get("/display").then((response)=>{
        setUserList(response.data);
      })
    },[]);
    const addToList=()=>{
      axios.post("/newuser",{userName:userName, userNumber:userNumber,});
      console.log(userName,userNumber);
    }
    const updateName=(id)=>{
      axios.put("/upuser",{id:id,upName:upName,});
    }
    const deleteUser=(id)=>{
      axios.delete(`/deluser/${id}`);
      
    }
  return (
    <div className="See">
      <div className="set">
      <h1>Login </h1>
<label>User Name</label><br/>
<input type="text"
onChange={(event)=>setName(event.target.value)}/><br/>
<label>User Id number</label><br/>
<input type="number"
onChange={(event)=>setNumber(event.target.value)}/><br/>
<button onClick={addToList}>New User</button>
</div>

    <div className="head"><h1>Users List</h1></div>
    {userList.map((val,key)=>{
  return <div key={key} class="student">
    <h1>{val.name}</h1>
    <h1>{val.htno}</h1>
  <input type="text" onChange={(event)=>setUpName(event.target.value)} placeholder='Enter Name to Update'/>&nbsp;
  <button onClick={()=>updateName(val._id)}>Update Name</button><br/>
  <button onClick={()=>deleteUser(val._id)}>Delete</button>
  </div>
  })}
    </div>
  )
}

export default Nlogin