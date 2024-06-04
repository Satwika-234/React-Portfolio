import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState,useEffect } from 'react';
import Database from '../../assets/images/Database.jpg';

function Projects(){

    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(() =>{
        const interval = setInterval(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    },[])

    return(
        <>
        <div className='container projects-page'>
            <div className='text-zone top'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['P','r','o','j','e','c','t','s']} idx={15}/>
                </h1>
                <div className='project-wrapper'>
                    
                    <div className='project'>
                        <img src={Database} alt='Database'></img>
                        <div className='text'>
                            <span>DATABASE</span>
                            <h2>Mini-Database Management System</h2>
                            <p>Designed to store user data and facilitate queries through
                                SQL queries.
                            </p>
                            <a target='_blank' herf='https://www.google.com'>Repository</a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={Database} alt='Database'></img>
                        <div className='text'>
                            <span>DATABASE</span>
                            <h2>Mini-Database Management System</h2>
                            <p>Designed to store user data and facilitate queries through
                                SQL queries.
                            </p>
                            <a target='_blank' herf='https://www.google.com'>Repository</a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={Database} alt='Database'></img>
                        <div className='text'>
                            <span>DATABASE</span>
                            <h2>Mini-Database Management System</h2>
                            <p>Designed to store user data and facilitate queries through
                                SQL queries.
                            </p>
                            <a target='_blank' herf='https://www.google.com'>Repository</a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={Database} alt='Database'></img>
                        <div className='text'>
                            <span>DATABASE</span>
                            <h2>Mini-Database Management System</h2>
                            <p>Designed to store user data and facilitate queries through
                                SQL queries.
                            </p>
                            <a target='_blank' herf='https://www.google.com'>Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;