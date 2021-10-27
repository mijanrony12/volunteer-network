import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase/UseFirebase';
import './Login.css'
const Login = () => {
   
    const {signInUsingGoogle,error,handleEmailPasswordLogIn}=useFirebase()
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email= data.email
        const password = data.password
        console.log(password);
      handleEmailPasswordLogIn(email,password)
  };
    return (
        <div>
                <div className="logo">
                <h3> <small>Khalil <span>HB</span></small> <br /> Foundation</h3>
                </div>
                 <div  className="form-layout">
                      <div className="form">
                        <h3>Please Login</h3>
                         <form onSubmit={handleSubmit(onSubmit)}>
                                  
                                    {/* <input type="text"  {...register("name")}  placeholder="Your name"/> */}
                                   
                    
                                    <input type="email"  {...register("email" , { required: true })}  placeholder="Your Email"/>
                                    { errors.exampleRequired && <span>This field is required</span> }
                    
                                    <input type="password" {...register("password", { required: true })} placeholder="Your password" />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                      <div className="text-danger">
                                               {error}
                                     </div>
                             <div className="btn-color">
                                          
                                          <input type="submit"  value="Sign In"/>
                                    </div>
                            </form>
                  <div>
                               <h5>If your are new here? <Link to="/register">plz Register here</Link></h5>
                            <button className="btn btn-primary" onClick={signInUsingGoogle}>sign in google</button>
                      </div>
                </div>
                 </div>
        </div>
    );
};

export default Login;