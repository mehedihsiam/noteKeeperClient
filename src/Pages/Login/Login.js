import React from 'react';
import { Link } from 'react-router-dom'
import Image from '../../Images/Login-bg.png';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data);
    return (
        <div className='flex'>
            <div className='hidden md:flex md:justify-center md:align-middle h-screen w-3/5 p-20'>
                <div className='w-5/6 mx-auto'>
                    <p className='text-emerald-500 text-6xl font-semibold text-center'>Welcome to notekeeper</p>
                    <img src={Image} alt="" className='my-2' />
                </div>
            </div>
            <div className="h-screen bg-gradient-to-br from-emerald-400 to-emerald-600 w-screen md:w-2/5 flex justify-center flex-wrap flex-row place-items-center">
                <div className="w-4/5 h-3/5 text-center">
                    <p className='font-semibold text-white text-4xl my-4'>Login</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className='input-field-b' {...register("username")} placeholder='Username' />
                        <br />
                        <input type="password" className='input-field-b' placeholder='Password' {...register("password")} />
                        <br />
                        <button className='hover:text-emerald-500 btn btn-d ' type="submit">
                            Login
                        </button>
                    </form>
                    <p className='text-white font-semibold my-2'>New at Notekeeper? Please <Link className='underline hover:text-purple-700' to='/register'>Join us</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;