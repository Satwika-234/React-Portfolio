import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {useState,useEffect} from 'react';
import nodejs from '../../assets/images/node.png';
import react from '../../assets/images/react.jpg';
import Authentication from '../../assets/images/Authentication.png';
import python from '../../assets/images/python.webp';
import java from '../../assets/images/java.jpg';
import ml from '../../assets/images/ml.png';
import Mysql from '../../assets/images/Mysql.jpg';
import Sass from '../../assets/images/Sass.png';
import mongodb from '../../assets/images/mongodb.png';
import cpp from '../../assets/images/C++.jpg';
import C from '../../assets/images/C.png';
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import github from '../../assets/images/github.png';
import Loader from 'react-loaders';

function Skills(){

    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(() =>{
        const interval = setInterval(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    },[])

    return(
        <>
        <div className='container skills-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['S','k','i','l','l','s',' ','&',' ','L','e','a','r','n','i','n','g','s']} idx={10}/>
                </h1>
                <div className='skill-wrapper'>
                    <div className='skill'>
                         <img src={nodejs} alt='nodejs'></img>
                         <span className='span-half'>NodeJs</span>
                    </div>
                    <div className='skill'>
                         <img src={react} alt='react'></img>
                         <span className='span-half'>React</span>
                    </div>
                    <div className='skill'>
                         <img src={cpp} alt='C++'></img>
                         <span className='span-half'>C++</span>
                    </div>
                    <div className='skill'>
                         <img src={C} alt='C'></img>
                         <span className='span-half'>C</span>
                    </div>
                    <div className='skill'>
                         <img src={mongodb} alt='MongoDB'></img>
                         <span className='span-half'>MongoDB</span>
                    </div>
                    <div className='skill'>
                         <img src={logo1} alt='Html'></img>
                         <span className='span-half'>Html</span>
                    </div>
                    <div className='skill'>
                         <img src={logo2} alt='Css'></img>
                         <span className='span-half'>CSS</span>
                    </div>
                    <div className='skill'>
                         <img src={logo3} alt='Javascript'></img>
                         <span className='span-half'>Javascript</span>
                    </div>
                    <div className='skill'>
                         <img src={java} alt='Java'></img>
                         <span className='span-half'>Java</span>
                    </div>
                    <div className='skill'>
                         <img src={python} alt='Python'></img>
                         <span className='span-half'>Python</span>
                    </div>
                    <div className='skill'>
                         <img src={ml} alt='ML'></img>
                         <span className='span-half'>ML</span>
                    </div>
                    <div className='skill'>
                         <img src={Mysql} alt='MySQL'></img>
                         <span className='span-half'>MySQL</span>
                    </div>
                    <div className='skill'>
                         <img src={Authentication} alt='Authentication'></img>
                         <span className='span-half'>Database Authentication</span>
                    </div>
                    <div className='skill'>
                         <img src={github} alt='Github'></img>
                         <span className='span-half'>Git & Github</span>
                    </div>
                    <div className='skill'>
                         <img src={Sass} alt='SASS'></img>
                         <span className='span-half'>SASS</span>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Skills;