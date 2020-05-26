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
            Текущий альбом {props.albumId}
            <h2>Автор {props.authorAlbumId}</h2>

            <h3>Посмотреть альбомы автора: <NavLink to={'/albums/' + props.authorAlbumId}>тут ссылка будет</NavLink></h3>
            <AlbumSlider authorAlbumId={props.authorAlbumId} currentAlbum={props.currentAlbum} />
        </div>

    )
}

export default CurrentAlbum