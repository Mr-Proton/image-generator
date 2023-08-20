import React from 'react'
import '../CSS/Topbar.css'
import logo from '../Images/logo.jpg'

function Topbar({setSelector, selector}) {
  return (
    <div className='topbar'>
        <div className='website-name'>
            <div className='logo-name'>
                <img src={logo} alt="" />
                <h3 className='website-text'>rame your Kart</h3>
            </div>
            <h6 className='website-text'>Use AI to develop your shopping kart</h6>
        </div>
        <div className='options'>
            <div className='selected-item' style={{left: selector?'0px':'38%', width: selector?'38%':'62%'}}></div>
            <h2 onClick={() => setSelector(true)} style={{color: selector?'#2974F1':'#FEFEFF'}}>About Us</h2>
            <h2 onClick={() => setSelector(false)} style={{color: selector?'#FEFEFF':'#2974F1'}}>Image Generator</h2>
        </div>
    </div>
  )
}

export default Topbar