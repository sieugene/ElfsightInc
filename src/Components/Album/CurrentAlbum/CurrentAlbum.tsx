import React from 'react'
import { CurrentAlbumType, AlbumsUserType } from '../../../redux/Album-reducer'
import { NavLink } from 'react-router-dom'
import AlbumSlider from './AlbumSlider/AlbumSlider'


type Props = {
    currentAlbum: CurrentAlbumType[]
    authorAlbumId: null | number
    albumsUser: AlbumsUserType[]
    albumId: string
}


const CurrentAlbum: React.FC<Props> = (props) => {

    return (
        <div>
            Current album {props.albumId}
            <h2>Author {props.authorAlbumId}</h2>

            <h3><NavLink to={'/albums/' + props.authorAlbumId}>Albums by the author</NavLink></h3>
            <AlbumSlider authorAlbumId={props.authorAlbumId} currentAlbum={props.currentAlbum} />
        </div>

    )
}

export default CurrentAlbum