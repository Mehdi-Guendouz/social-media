import React from 'react'
import './aut.css'
import Logo from '../../img/logo.png';

function Aut() {
    
  return (
    <div className="aut">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className='Webname '>
                <h1>MG Media</h1>
                <h6>Explor the ideas throughout the world</h6>
            </div>
        </div>
        <LoginForm/>
    </div>
  )
}

function LoginForm(){
    return(
        <div className="a-right">
            <form  className='infoForm authform'>
                <h3 className='txweight'>Sign Up</h3>
                <div>
                    <input type="text" placeholder='username' className='infoInput' name='username' />
                </div>
                <div>
                    <input type="text" placeholder='password ' className='infoInput' name='password' />
                </div>
                <div>
                    <span className='size-text'>Already have an account. Login!</span>
                    <button className='btn infobtn'>Signup</button>
                </div>
            </form>
        </div>
    )
}




function Signform(){
    return(
        <div className="a-right">
            <form  className='infoForm authform'>
                <h3 className='txweight'>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First name' className='infoInput' name='firstName' />
                    <input type="text" placeholder='Last name' className='infoInput' name='lastName' />
                </div>
                <div>
                    <input type="text" placeholder='User name' className='infoInput' name='userName' />
                </div>
                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password' />
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='confimPass' />
                </div>
                <div>
                    <span className='size-text'>Already have an account. Login!</span>
                </div>
                <button className='btn infobtn'>Signup</button>
            </form>
        </div>
    )
}

export default Aut