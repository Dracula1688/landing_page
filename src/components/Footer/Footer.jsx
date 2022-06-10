// import React
import React from 'react'
// import CSS
import './footer.css'
// import images

// import icons



const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container footer-box">
            <div className="top-footer">
                <div className="left-top-footer">
                    <h1 className='titleOF'>Find out more and <br /> connect with expert <br /> Hosts</h1>
                    <p className='descrOF'>We’ll share more about hosting and give you access to live <br /> webinars where experienced hosts can answer your questions.</p>
                </div>
                <div className="right-top-footer">
                    <div className="inputs">
                        <input type="email" placeholder='Email address'/>
                        <input type="text" placeholder='Phone number (Optional)'/>
                    </div>
                    <div className="checkboxxx">
                        <input type="checkbox" name="" id="" className='check' /> 
                        <p className='pullar'>I want to receive occasional insights and information from Airbnb about <br /> hosting and can unsubscribe any time.</p>
                    </div>
                    <div className="btn-sig">
                        <a href="#" className='btns'>Sign up</a>
                        <p className='juji'>By selecting "Sign up," I agree that Airbnb will process my personal <br /> information in accordance with the Airbnb Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer