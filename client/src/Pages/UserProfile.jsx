import React,{useState,useEffect} from "react";
import ProfilePage from "../Components/Profile/Profile";
import Header from "../Components/Header/Header";
import axios from '../axios'
import { useNavigate } from "react-router-dom";

function UserProfile() {
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
    const upDateimage = (filePath) => {
        setDetails(prevState => {
            return{
                ...prevState,
                image:filePath
            }
        })
    }
  return (
    <div>
      <Header details={details}/>
      <ProfilePage details={details} changeImage={upDateimage}/>
    </div>
  );
}

export default UserProfile;
