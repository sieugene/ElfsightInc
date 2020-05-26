import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import Albums from './Albums';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { setAlbumsUserTC, AlbumsUserType } from '../../redux/Album-reducer';


interface IProps extends RouteComponentProps<any> {
    userId?: string;
}
type MapStateProps = {
    authorAlbumId: null | number
    albumsUser: AlbumsUserType[]
    loaded: boolean
}
type MapDispatchProps = {
    setAlbumsUserTC: (userId: number) => void
}
type PropsType = MapStateProps & MapDispatchProps & IProps

const AlbumsContainer:React.FC<PropsType> = (props) => {
    useEffect(() => {
        props.setAlbumsUserTC(Number(props.match.params.userId))
        // eslint-disable-next-line
    }, [props.match.params.userId])
    if(!props.loaded){
        return <div>Загрузка альбомов пользователя</div>
    }
    return(
        <Albums
        authorAlbumId={props.authorAlbumId}
        albumsUser={props.albumsUser}
        />
    )
}

let MapStateToProps = (state:AppStateType) => {
    return {
        loaded: state.albums.loaded,
        authorAlbumId: state.albums.authorAlbumId,
        albumsUser: state.albums.albumsUser
    }
}
export default withRouter(connect(MapStateToProps, {
    setAlbumsUserTC
})(AlbumsContainer))
