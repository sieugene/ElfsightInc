import React, { useState } from 'react'
import Modal from './../../../Modal/Modal';

const AlbumSlider = (props) => {

    const [active, toggleActive] = useState(false)
    const [currentModal, changeCurrent] = useState(null);
    const [currentIndex, changeCurrnetIndex] = useState(undefined);

    //for modal start
    const ShowModal = (id, index) => {
        if (!active) {
            changeCurrent(null);
        }
        toggleActive(!active)
        changeCurrent(id);
        changeCurrnetIndex(index);
    }

    const NextImage = () => {
        changeCurrnetIndex(currentIndex + 1);
        if (props.currentAlbum.length <= currentIndex) {

            changeCurrnetIndex(currentIndex - 1);
        } else {

            changeCurrent(props.currentAlbum[currentIndex].id)
        }
    }
    const PrevImage = () => {
        changeCurrnetIndex(currentIndex - 1);
        if (currentIndex < 0) {
            changeCurrnetIndex(currentIndex + 1);
        } else {
            changeCurrent(props.currentAlbum[currentIndex].id)
        }
    }
    //for modal end

    //дублирование
    const setBackground = (url) => {
        const min = 180;
        const max = 280;
        const rand = min + Math.random() * (max - min);
        return {
            backgroundImage: `url(${url})`,
            height: rand
        }
    }

    return (
        <div className='row galleryWrap'>
            {props.currentAlbum.map((p, index) => {
                return <React.Fragment key={p.id}>
                    <Modal author={props.authorAlbumId}
                        img={p.thumbnailUrl}
                        PrevImage={PrevImage}
                        albumId={p.id}
                        active={active}
                        currentIndex={currentIndex}
                        currentModalId={currentModal}
                        NextImage={NextImage}
                        close={() => { toggleActive(false) }}
                    />
                    <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 card' style={setBackground(p.thumbnailUrl)} onClick={
                        () => {
                            ShowModal(p.id, index);
                        }
                    }>
                        <h3 className="title">
                            {p.title}
                        </h3>
                    </div>
                </React.Fragment>

            })}
        </div>

    )
}
export default AlbumSlider