import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';

const EditeNote = () => {
    const { register, handleSubmit } = useForm()
    const { id } = useParams();
    const [singleNote, setSingleNote] = useState()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleNote(data)
            })
    }, [id])

    const onSubmit = data => console.log(data);
    return (
        singleNote ?
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="container mx-auto my-6 w-4/5 sm:w-3/5 md:w-1/2" >
                    <input
                        {...register("title")}
                        type="text"
                        defaultValue={singleNote.title}
                        className="input-field"
                    />
                    <br />
                    <textarea
                        {...register("body")}
                        defaultValue={singleNote.body}
                        className="input-field"
                        rows="10"
                    >

                    </textarea>
                    <input type="submit" value="Update this edit" className='btn btn-c cursor-pointer' />
                    <Link to='/' className='btn btn-a'>
                        Cancel
                    </Link>
                </div>
            </form>
            :
            <Spinner />
    );
};

export default EditeNote;