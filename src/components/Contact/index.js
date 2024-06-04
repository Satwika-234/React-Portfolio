import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import {useState, useEffect,useRef} from 'react';
import emailjs from '@emailjs/browser'

const Contact = () =>{
    const [letterClass,setLetterClass] = useState('text-animate');
    const letRef = useRef();

    useEffect(() =>{
        const interval = setInterval(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    },[])

    const sendmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_enylmhe','template_odpxp2i',letRef.current,'ZJaPZcJCKDOYGI8PE')
           .then(
             () =>{
                alert('Message sent successfully');
                window.location.reload(false);
             },
             () =>{
                alert('Failed to send a message. Please try again.');
             }
            )
    }

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <div className='contact-form'>
                <form ref={letRef} onSubmit={sendmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='from_name' placeholder='Name' required></input>
                        </li>
                        <li className='half'>
                            <input type='email' name='from_email' placeholder='Email' required></input>
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Subject' required></input>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>
                        <li>
                            <input type='submit' value='SEND' className='flat-button'></input>
                        </li>
                    </ul>
                </form>
                </div>
            </div>  
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact;