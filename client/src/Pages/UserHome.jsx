import React,{useState,useEffect} from "react";
import HomePage from "../Components/Home/Home";
import Header from '../Components/Header/Header'
import axios from '../axios'
import { useNavigate } from "react-router-dom";

function UserHome() {
    const [details,setDetails] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('/details',{
            headers:{
                'auth-token':JSON.parse(localStorage.getItem('authorization.user'))
            }
        }).then((res)=>{
            setDetails(res.data)
        }).catch((err)=>{
            navigate('/login')
        })
    },[navigate])
  return (
    <div>
      <Header details={details}/>
      <HomePage details={details}/>
    </div>
  );
}

export default UserHome;
