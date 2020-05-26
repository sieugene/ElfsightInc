import React from 'react'
import './Modal.scss'

const Modal = (props: any) => {
    return (
        <>
            {
                props.currentModalId === props.albumId && props.active &&
                <div className='modal'>
                    <div className="content">
                        <div className="closeButton" onClick={props.close}>X</div>
                        <div className="prev" onClick={() => { props.PrevImage() }}> {'<'} </div>
                        <h3>Author: {props.author}</h3>
                        <img src={props.img} alt='img' />
                        <h4>Album Id: {props.albumId}</h4>
                        <div className="next" onClick={() => { props.NextImage() }}>></div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal