import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import CurrentAlbum from './CurrentAlbum';
import { AppStateType } from '../../../redux/store';
import { setCurrAlbWithCurrUserIdTC } from './../../../redux/Album-reducer';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AlbumsUserType, CurrentAlbumType } from './../../../redux/Album-reducer'
import Preloader from '../../Preloader/Preloader';


interface IProps extends RouteComponentProps<any> {
    albumId?: string,
    photoId?: string
}
type MapStateProps = {
    currentAlbum: CurrentAlbumType[]
    authorAlbumId: null | number
    albumsUser: AlbumsUserType[]
    loaded: boolean
}
type MapDispatchProps = {
    setCurrAlbWithCurrUserIdTC: (albumId: number) => void
}
type PropsType = MapStateProps & MapDispatchProps & IProps

const CurrentAlbumContainer: React.FC<PropsType> = (props) => {
    useEffect(() => {
        props.setCurrAlbWithCurrUserIdTC(Number(props.match.params.albumId))
        // eslint-disable-next-line
    }, [props.match.params.albumId])
    //текущие фото при переходе
    const currentPhoto = props.currentAlbum.filter((c) => {
            return c.id === Number(props.match.params.photoId)
        })
    
    if (!props.loaded) {
        return  <Preloader/>
    }
    return (
        <CurrentAlbum
            currentAlbum={props.currentAlbum}
            albumsUser={props.albumsUser}
            authorAlbumId={props.authorAlbumId}
            albumId={props.match.params.albumId}
            currentPhoto={currentPhoto}
        />
    )
}

let MapStateToProps = (state: AppStateType) => {
    return {
        loaded: state.albums.loaded,
        currentAlbum: state.albums.currentAlbum,
        albumsUser: state.albums.albumsUser,
        authorAlbumId: state.albums.authorAlbumId
    }
}


export default withRouter(connect(MapStateToProps, {
    setCurrAlbWithCurrUserIdTC
})(CurrentAlbumContainer))