import React from 'react'
import { AlbumsUserType } from '../../redux/Album-reducer'
import { NavLink } from 'react-router-dom'


type Props = {
    authorAlbumId: null | number
    albumsUser: AlbumsUserType[]
}

const Albums: React.FC<Props> = (props) => {
    return (
        <div>
            Здесь будет список альбомов автора
            {props.albumsUser.map((a) => {
                return <React.Fragment key={a.id}>
                    <NavLink to={'/album/' + a.id}>
                        {a.title}<br />
                        Номер альбома:{a.id}
                    </NavLink>
                </React.Fragment>

            })}
        </div>
    )
}




export default Albums