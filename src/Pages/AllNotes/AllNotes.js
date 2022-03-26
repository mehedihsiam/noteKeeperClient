import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import SingleNote from './SingleNote/SingleNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const AllNotes = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setNotes(data)
            })
    }, [])
    return (
        <>
            <Header />
            <div className='container mx-auto'>
                <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                    {
                        notes.map((note) => <SingleNote
                            key={note.id}
                            note={note}
                        />)
                    }
                </div>
                <Link to='/addNote'>
                    <button
                        className='fixed right-5 bottom-5 md:right-10 md:bottom-10 h-10 w-10 sm:w-12 sm:h-12 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white rounded-full'
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </Link>
            </div>
        </>
    );
};

export default AllNotes;