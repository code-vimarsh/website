import React, { useState, useRef } from 'react'
import './ContactUs.css'
import ToastComponent from '../Toast/toastComponent.js'

const ContactUs = () => {

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("");

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailIdRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const contactFormData = {
            emailId: emailIdRef.current.value,
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/sendFeedback`, {
            method: "POST",
            body: JSON.stringify(contactFormData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(response.ok) {
            setToastVisible(true);
            setToastMessage("End Date can't be before Start Date");
            setToastType("warning");
            setTimeout(() => setToastVisible(false), 4000);
        }
    }

  return (
    <>
        {toastVisible ? <ToastComponent message={toastMessage} type={toastType} /> : null}
        <form className="contactUsForm" onSubmit={handleSubmit}>
            <div className='contactUsContainer' id='ContactUs'>
                <hr />
                <h3 className='contactTitle'>Contact Us</h3>
                <div className='contactLabelInput'>
                    <label htmlFor='emailId'>Email ID</label>
                    <input type='email' id='emailId' ref={emailIdRef} className='contactInputField' required></input>
                </div>

                <div className="nameContainer">
                    <div className='contactLabelInput'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' ref={firstnameRef} className='contactInputField' required></input>
                    </div>

                    <div className='contactLabelInput'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' ref={lastnameRef} className='contactInputField' required></input>
                    </div>
                </div>

                <div className='contactLabelInput'>
                    <label htmlFor="subject">Subject</label>
                    <input type='text' id='subject' ref={subjectRef} className='contactInputField' required></input>
                </div>

                <div className='contactLabelInput'>
                    <label htmlFor="message">Message</label>
                    <textarea rows="4" placeholder='Enter your valuable thoughts...' id='message'  ref={messageRef} className='contactInputField' required/>
                </div>
                
                <button style={{marginTop: '0.5rem', padding: '0.2rem 0rem', borderRadius: '0.5rem'}} type="submit">Submit</button>
            </div>

        </form>
    </>
  )
}

export default ContactUs