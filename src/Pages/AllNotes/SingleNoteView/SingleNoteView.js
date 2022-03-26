import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faListUl } from '@fortawesome/free-solid-svg-icons';

const SingleNoteView = () => {
    const { id } = useParams();
    const [singleNote, setSingleNote] = useState()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleNote(data)
            })
    }, [id])


    return (
        singleNote ?
            <div className='w-4/5 sm:w-3/5 md:w-1/2 mx-auto my-10'>
                <div className="rounded bg-white overflow-hidden transition-all duration-300 shadow-lg hover:shadow-purple-100">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-4">{singleNote.title}</div>
                        <hr />
                        <p className="text-gray-700 my-6 text-justify">
                            {singleNote.body}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-between">
                        <span className='text-gray-600 text-sm'>Created at: {new Date().toLocaleDateString()}</span>
                        <div>
                            <Link to='/'>
                                <button className='btn-c btn'>
                                    <FontAwesomeIcon icon={faListUl} />
                                </button>
                            </Link>
                            <Link to={`/edit/${id}`}>
                                <button className='btn-b btn'>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                            </Link>
                            <button className='btn-a btn'>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            :
            <Spinner />
    );
};

export default SingleNoteView;