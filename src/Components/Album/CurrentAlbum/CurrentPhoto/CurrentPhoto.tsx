import React from 'react'
import { CurrentAlbumType } from '../../../../redux/Album-reducer'
import './CurrentPhoto.scss'

type Props = {
    currentPhoto: CurrentAlbumType[]
    authorAlbumId: null | number
}

const CurrentPhoto: React.FC<Props> = (props) => {
    if (props.currentPhoto.length === 0) {
        return <div></div>
    }
    return (
        <div>
            {props.currentPhoto.map((c) => {
                return <div key={c.id} className='singlePhoto'>
                    <div className="row">
                        <div className="col col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                            <div className="img-contain">
                                <img src={c.url} alt={`currentImage${c.id}`}/>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12">
                            <div className="text-content">
                                <a href={c.url} target="_blank" rel="noopener noreferrer">{c.url}</a>
                                <h3>
                                    {c.title}
                                </h3>
                                <h4>
                                    Author: {props.authorAlbumId}
                                </h4>
                                <h5>
                                    In album: {c.albumId}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
    )
}

export default CurrentPhoto