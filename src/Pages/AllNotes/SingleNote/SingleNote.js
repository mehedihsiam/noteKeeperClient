import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const SingleNote = ({ note }) => {

    const { title, body, id } = note;
    return (
        <div className="rounded bg-white overflow-hidden transition-all duration-300 shadow-lg hover:shadow-purple-100">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title.slice(0, 20)}</div>
                <p className="text-gray-700 text-base">
                    {body.slice(0, 100)}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end">
                <Link to={`/notes/${id}`}>
                    <button className='btn-c btn'>
                        <FontAwesomeIcon icon={faExpand} />
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
    );
};

export default SingleNote;