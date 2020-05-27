import { AppStateType } from "./store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { PhotosAPI } from './../Api/api';
const LOADED_IMAGES = 'PHOTO/LOADED_IMAGES'
const SET_PHOTOS = 'PHOTO/SET_PHOTOS'

export type PhotosType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

let initialState = {
    loaded: false,
    photos: [] as PhotosType[]
}
type InitialStateType = typeof initialState;

const PhotoReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos: [...action.photos]
            }
        case LOADED_IMAGES:
            return {
                ...state,
                loaded: action.loaded
            }
        default:
            return state

    }
}


//actions
type ActionsType = LoadingPhotosType | SetPhotosType

type LoadingPhotosType = {
    type: typeof LOADED_IMAGES
    loaded: boolean
}
export const loadedPhotosAC = (loaded: boolean): LoadingPhotosType => {
    return {
        type: LOADED_IMAGES,
        loaded
    }
}


type SetPhotosType = {
    type: typeof SET_PHOTOS
    photos: PhotosType[]
}
export const setPhotosAC = (photos: PhotosType[]): SetPhotosType => {
    return {
        type: SET_PHOTOS,
        photos
    }
}

//thunks
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, GetStateType, unknown, ActionsType>


export const getPhotosTC = (): ThunkType => async (dispatch) => {
    try {
        dispatch(loadedPhotosAC(false));
        let response = await PhotosAPI.getPhotos();
        dispatch(setPhotosAC(response));
        dispatch(loadedPhotosAC(true));
    }  catch(error){
        alert(error);
    }

}





export default PhotoReducer;