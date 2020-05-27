import React from 'react'
import { PhotosType } from '../../redux/Photo-reducer'
import './Gallery.scss'
import { NavLink } from 'react-router-dom'
type OwnProps = {
    photos: PhotosType[]
}

type Props = OwnProps

const Gallery: React.FC<Props> = (props) => {
    const setBackground = (url: string) => {
        const min = 180;
        const max = 280;
        const rand = min + Math.random() * (max - min);
        return {
            backgroundImage: `url(${url})`,
            height: rand
        }
    }
    return (
        <div className='row galleryWrap'>
            {props.photos.map((p) => {
                return <React.Fragment key={p.id}>
                    <NavLink to={'/album/' + p.albumId + '/photo/' + p.id}>
                        <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 card' style={setBackground(p.thumbnailUrl)}>
                            <h3 className="title">
                                {p.title}
                            </h3>
                        </div>
                    </NavLink>
                </React.Fragment>

            })}
        </div>
    )
}

export default Gallery