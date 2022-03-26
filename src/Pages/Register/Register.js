import React from 'react';
import { Link } from 'react-router-dom'
import Image from '../../Images/Login-bg.png';
import { useForm } from "react-hook-form";


const Register = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data);
    return (
        <div className='flex'>
            <div className='hidden md:flex md:justify-center md:align-middle h-screen w-3/5 p-20'>
                <div className='w-5/6 mx-auto'>
                    <p className='text-violet-700 text-6xl font-semibold text-center'>Welcome to notekeeper</p>
                    <img src={Image} alt="" className='my-2' />
                </div>
            </div>
            <div className="h-screen bg-gradient-to-br from-violet-400 to-violet-700 w-screen md:w-2/5 flex justify-center flex-wrap flex-row place-items-center">
                <div className="w-4/5 h-3/5 text-center">
                    <p className='font-semibold text-white text-4xl my-4'>Register</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className='input-field-b' {...register("fullName")} placeholder='Full Name' />
                        <br />
                        <input type="text" className='input-field-b' {...register("username")} placeholder='Username' />
                        <br />
                        <input type="password" className='input-field-b' placeholder='Password' {...register("password")} />
                        <br />
                        <button className='btn btn-e' type="submit">
                            Register
                        </button>
                    </form>
                    <p className='text-white font-semibold my-2'>Already have an account? Please <Link className='underline hover:text-emerald-500' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;