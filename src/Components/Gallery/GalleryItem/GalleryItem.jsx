import React from 'react'
import { NavLink } from 'react-router-dom';

const GalleryItem = (props) => {
    const setBackground = (url) => {
        const min = 180;
        const max = 280;
        const rand = min + Math.random() * (max - min);
        return {
            backgroundImage: `url(${url})`,
            height: rand
        }
    }
    return (
        <>
            {!props.slider ?
                <React.Fragment key={props.id}>
                    <NavLink to={'/album/' + props.albumId + '/photo/' + props.id}>
                        <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 card' style={setBackground(props.thumbnailUrl)}>
                            <h3 className="title">
                                {props.title}
                            </h3>
                        </div>
                    </NavLink>
                </React.Fragment>
                :
                <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 card' style={setBackground(props.thumbnailUrl)} onClick={
                    () => {
                        props.ShowModal(props.id, props.index);
                    }}>
                    <h3 className="title">
                        {props.title}
                    </h3>
                </div>
            }
        </>
    )
}

export default GalleryItem