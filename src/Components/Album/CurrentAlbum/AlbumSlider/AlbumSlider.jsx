import React, { useState } from 'react'
import Modal from './../../../Modal/Modal';
import GalleryItem from './../../../Gallery/GalleryItem/GalleryItem';

const AlbumSlider = (props) => {

    const [active, toggleActive] = useState(false)
    const [currentModal, changeCurrent] = useState(null);
    const [currentIndex, changeCurrnetIndex] = useState(undefined);

    //for modal start
    const ShowModal = (id, index) => {
        if (!active) {
            changeCurrent(null);
            changeCurrnetIndex(undefined);
        }
        toggleActive(!active)
        changeCurrent(id);
        changeCurrnetIndex(index);
    }

    const NextImage = () => {
        changeCurrnetIndex(currentIndex + 1)
        if (props.currentAlbum.length <= currentIndex + 1) {
            changeCurrnetIndex(props.currentAlbum.length - 1);
        } else {
            changeCurrent(props.currentAlbum[currentIndex + 1].id)
        }
    }
    const PrevImage = () => {
        changeCurrnetIndex(currentIndex - 1);
        if (currentIndex - 1 === -1) {
            changeCurrnetIndex(0);
        } else {
            changeCurrent(props.currentAlbum[currentIndex - 1].id)
        }
    }
    //for modal end
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
                    <GalleryItem
                        slider={true}
                        title={p.title}
                        id={p.id}
                        index={index}
                        ShowModal={ShowModal}
                        thumbnailUrl={p.thumbnailUrl}
                    />
                </React.Fragment>

            })}
        </div>

    )
}
export default AlbumSlider