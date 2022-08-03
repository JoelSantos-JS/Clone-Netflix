
import React, { useState , useEffect } from 'react';
import './Nav.css'
// import { Container } from './styles';

function NavBar() {

    const [show,setShow] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShow(window.scrollY > 100)
        })

       
    }, [])
    
  return (
    
    
    <div className={`nav-container ${show && "nav-container-black"}`}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""  className='nav-log'/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU" alt="" className='nav-avatar' />
  </div>

  )
}

export default NavBar;