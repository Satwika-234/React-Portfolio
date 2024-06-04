import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nit from '../../assets/images/nit.png'
import Loader from 'react-loaders';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

function About(){

    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(() =>{
        const interval = setInterval(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    },[])


    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15} />
                </h1>
                <div className='spacing'>
                <p>
                     I am a passionate computer science student. A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product. Got good skills with machine learning models.    
                </p>
                <p>Things I can do are : Frontend development, Backend development, Machine learning models</p>
                <h2 style={{color : 'white'}}>Education :</h2>
                <div className='flexing'>
                <img src={nit} alt='nitc' className='nitc'></img>
                <p>I am currently pursuing my B-Tech at National Institute of Technology, Calicut.</p>
                </div>
                </div>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color = '#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color = '#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color = '#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color = '#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color = '#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color = '#EC42D8'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About;