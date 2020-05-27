import React from 'react'
import { PhotosType } from '../../redux/Photo-reducer'
import './Gallery.scss'
import GalleryItem from './GalleryItem/GalleryItem'
type OwnProps = {
    photos: PhotosType[]
}

type Props = OwnProps

const Gallery: React.FC<Props> = (props) => {
    return (
        <>
            <div className="title-albums"><h3>Photogallery</h3></div>
            <hr/>
            <div className='row galleryWrap'>
                {props.photos.map((p) => {
                    return <GalleryItem
                        key={p.id}
                        albumId={p.albumId}
                        id={p.id}
                        thumbnailUrl={p.thumbnailUrl}
                        title={p.title} />

                })}
            </div>
        </>
    )
}

export default Gallery