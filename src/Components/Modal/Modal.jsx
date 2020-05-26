import React, { useRef } from 'react'
import './Modal.scss'
import { useOnClickOutside } from '../../Hook/useOnClickOutside';

const Modal = (props) => {
    const ref = useRef();
    useOnClickOutside(ref, () => props.close());
    return (
        <>
            {
                props.currentModalId === props.albumId && props.active &&
                <div className='modal'>
                    <div className="content" ref={ref}>
                        <div className="closeButton" onClick={props.close}>X</div>
                        <div className="prev" onClick={() => { props.PrevImage() }}> {'<'} </div>
                        <h3>Author: {props.author}</h3>
                        <div className="imgBlock">
                            <img src={props.img} alt='img' />
                        </div>
                        <h4>{props.albumId}</h4>
                        <div className="next" onClick={() => { props.NextImage() }}>></div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal