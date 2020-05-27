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
            Current album {props.albumId}
            <h2>Author {props.authorAlbumId}</h2>

            <h3><NavLink to={'/albums/' + props.authorAlbumId}>Albums by the author</NavLink></h3>
            <AlbumSlider authorAlbumId={props.authorAlbumId} currentAlbum={props.currentAlbum} />
        </div>

    )
}

export default CurrentAlbum