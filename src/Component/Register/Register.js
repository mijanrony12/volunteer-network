import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase/UseFirebase';
import './Register.css'
const Register = () => {
    const {signInUsingGoogle, handleEmailPasswordRegister,error}=useFirebase()
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email= data.email
        const password = data.password
        console.log(password);
        handleEmailPasswordRegister(email,password)
  };
    return (
        <div>
                <div className="logo">
                <h3> <small>Khalil <span>HB</span></small> <br /> Foundation</h3>
                </div>
                 <div  className="form-layout">
                      <div className="form">
                        <h3>Register as a Volunteer</h3>
                         <form onSubmit={handleSubmit(onSubmit)}>
                                  
                                    {/* <input type="text"  {...register("name")}  placeholder="Your name"/> */}
                                   
                    
                                    <input type="email"  {...register("email" , { required: true })}  placeholder="Your Email"/>
                                    { errors.exampleRequired && <span>This field is required</span> }
                    
                                    <input type="password" {...register("password", { required: true })} placeholder="Your password" />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                     <p>{error}</p>
                             <div className="btn-color">
                                          
                                          <input type="submit"  value="Sign Up"/>
                                    </div>
                            </form>
                  <div>
                               <h5>Already have an account? <Link to="/login">plz login here</Link></h5>
                            <button className="btn-color " onClick={signInUsingGoogle}>sign in google</button>
                      </div>
                </div>
                 </div>
        </div>
    );
};

export default Register;