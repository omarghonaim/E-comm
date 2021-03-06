
import React,{useState,useEffect} from "react"
import { useHistory } from "react-router-dom";
import Header from "../Header";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useHistory("");
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push('/add');
        }
    },[])
 async   function login(){
        let item = {email,password}
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        if(!result){
            history.push('/login')
        }else{
            localStorage.setItem("user-info",JSON.stringify(result))
            history.push('/add')
        }

    }

    return(
        <>
        <Header />
        <div className='col-sm-6 offset-sm-3'>
            <h1>login site</h1>
            <input type='text' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
            <br/>
            <input type='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
            <br/>
            <button className='btn btn-primary' onClick={login} >login</button>
        </div>
        </>
    )
}
export default Login