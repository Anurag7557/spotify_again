import React,{useState} from 'react'

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [answer,setAnswer]=useState("");
  const navigate = useNavigate();
  //form function

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer});
      if(res && res.data.success)
      {
        toast.success(res.data.message);
        navigate("/login");
      }
      else{
        toast.error(res.data.message);

      }
    } catch (error) {
      console.log(error);
      toast.error('something went wrong');
    }
  };
  return (

        
            <div className="container">

           <h1 className="text-center">Register Form</h1>
            <form className="registration-form" onSubmit={handleSubmit}>
              <label className="col-one-half">
                <span className="label-text"> Name</span>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
              </label>
              <label className="col-one-half">
                <span className="label-text">Email</span>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </label>
              <label>
                <span className="label-text">Address</span>
                <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)}/>
              </label>
              <label>
                <span className="label-text">Phone</span>
                <input type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </label>
              <label className="password">
                <span className="label-text">Password</span>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </label>
              <label className="col-one-half">
                <span className="label-text">Security Question:what is your birth place ?</span>
                <input type='text' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
              </label>
              <div className="text-center">
              <input className="submit-button" type='submit'/>
              </div>
            </form>

        </div>
  )
}

export default Register