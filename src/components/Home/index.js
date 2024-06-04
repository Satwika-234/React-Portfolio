import './index.scss';
import logoS from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';

function Home(){
    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray = ['a','t','w','i','k','a']
    const jobArray = ['F','u','l','l',' ','S','t','a','c','k',' ','D' ,'e','v','e','l','o','p','e','r','.']

    useEffect(() =>{
        const interval = setInterval(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    },[])

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>    
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={logoS} alt='developer'/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} idx={22}/>
                </h1>
                <h2>Highly Adaptable and Quick Learner.</h2>
                <a target='_blank' href='https://www.google.com' className='flat-button'>CONTACT ME</a>
            </div>
            <Logo />
        </div>
        <Loader type='pacman'/>
        </>
    );
}

export default Home;