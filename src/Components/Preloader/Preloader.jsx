import React, { useState,useEffect } from 'react'
import './Preloader.scss'
import img from './../../assets/images/preload.gif'

const Preloader = (props) => {
    const [message, setMessage] = useState(null)
  
    useEffect(() => {
        const waitLong = setTimeout(() => {
            setMessage(`Загрузка выполняется дольше обычного. 
            Пожалуйста дождитесь окончания. 
            Если появится alert, то перезагрузите страницу или попробуйте позже`)
        },10000)
        return () => {
            setMessage(null)
            clearTimeout(waitLong);
        }
    }, [])
    return(
        <div className='preloader'>
            {message !== null && <div className="window">{message}</div>}
            <img src={img} alt='preload'/>
        </div>
    )
}

export default Preloader