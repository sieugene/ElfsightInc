import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Gallery from './Gallery'
import { getPhotosTC } from './../../redux/Photo-reducer';
import { AppStateType } from '../../redux/store';
import {PhotosType} from './../../redux/Photo-reducer'

type Props = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    loaded: boolean,
    photos: PhotosType[]
}
type MapDispatchPropsType = {
    getPhotosTC: () => void
}

const GalleryContainer:React.FC<Props> = (props) => {
    useEffect(() => {
       props.getPhotosTC();
       // eslint-disable-next-line
    }, [])
    if(!props.loaded){
        return <div>Loading photos</div>
    }
    return(
        <Gallery photos={props.photos}/>
    )
}

let MapStateToProps = (state: AppStateType) => {
    return{
        loaded: state.photos.loaded,
        photos: state.photos.photos
    }
}

export default compose(connect(MapStateToProps,{
    getPhotosTC
})(GalleryContainer))