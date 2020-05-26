import React from 'react'
import { AlbumsUserType } from '../../redux/Album-reducer'
import { NavLink } from 'react-router-dom'
import avatar from './../../assets/images/avatar.png'
import './Album.scss'
type Props = {
    authorAlbumId: null | number
    albumsUser: AlbumsUserType[]
}

const Albums: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="userInfo">
                <div className="row">
                    <div className="col">
                        Id user:{props.albumsUser.length > 0 ? props.albumsUser[0].userId : 'Unable to determine the user id, reload the page'}
                    </div>
                    <div className="col">
                        <img src={avatar} alt='avatar' />
                    </div>
                </div>
            </div>
            <div className='title-albums'>
                <h3>
                    Albums List
                </h3>
            </div>
            <div className="row galleryWrap">
                {props.albumsUser.map((a) => {
                    return <React.Fragment key={a.id}>
                        <NavLink to={'/album/' + a.id}>
                            <div className="album-wrap col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="album-item">
                                </div>
                                <h3 className='title'>{a.title}</h3>
                                <h5 className='desc'>Номер альбома:{a.id}</h5>

                            </div>
                        </NavLink>
                    </React.Fragment>
                })}
            </div>
        </div>
    )
}




export default Albums