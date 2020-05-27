import React from 'react'
import { CurrentAlbumType, AlbumsUserType } from '../../../redux/Album-reducer'
import { NavLink } from 'react-router-dom'
import AlbumSlider from './AlbumSlider/AlbumSlider'
import CurrentPhoto from './CurrentPhoto/CurrentPhoto'


type Props = {
    currentAlbum: CurrentAlbumType[]
    authorAlbumId: null | number
    albumsUser: AlbumsUserType[]
    albumId: string
    currentPhoto: CurrentAlbumType[]
}


const CurrentAlbum: React.FC<Props> = (props) => {
    return (
        <div>
            <CurrentPhoto
                currentPhoto={props.currentPhoto}
                authorAlbumId={props.authorAlbumId}
            />
            <div className="title-albums"><h3>Album view №{props.albumId}</h3></div>
            <hr />
            <div className="title-albums">
                <h3><NavLink to={'/albums/' + props.authorAlbumId}>More albums by the author "{props.authorAlbumId}"</NavLink></h3>
            </div>
            <AlbumSlider authorAlbumId={props.authorAlbumId} currentAlbum={props.currentAlbum} />
        </div>

    )
}

export default CurrentAlbum