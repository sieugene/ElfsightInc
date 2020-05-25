import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Gallery from './Gallery'
import { getPhotosTC } from './../../redux/Photo-reducer';


const GalleryContainer = (props: any) => {
    useEffect(() => {
       props.getPhotosTC();
    }, [])
    return(
        <Gallery/>
    )
}

let MapStateToProps = (state: any) => {
    return{

    }
}

export default compose(connect(MapStateToProps,{
    getPhotosTC
})(GalleryContainer))