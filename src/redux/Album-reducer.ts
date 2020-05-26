import { AppStateType } from "./store"
import { Dispatch } from "react"
import { ThunkAction } from "redux-thunk"
import { PhotosAPI, AlbumsAPI } from './../Api/api';

const LOADING = 'ALBUM/LOADING'
const SET_CURRENT_ALBUM = 'ALBUM/SET_CURRENT_ALBUM'
const SET_AUTHOR_ALBUM_ID = 'ALBUM/SET_AUTHOR_ALBUM_ID'
const SET_ALBUMS_USER = 'ALBUM/SET_ALBUMS_USER'
//types start
export type CurrentAlbumType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
export type AlbumsUserType = {
    userId: number,
    id: number,
    title: string
}
//types end
let initialState = {
    currentAlbum: [] as CurrentAlbumType[],
    authorAlbumId: null as null | number,
    albumsUser: [] as AlbumsUserType[],
    loaded: false
}
type InitialStateType = typeof initialState;

const AlbumReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loaded: action.loaded
            }
        case SET_CURRENT_ALBUM:
            return {
                ...state,
                currentAlbum: action.currentAlbum
            }
        case SET_AUTHOR_ALBUM_ID:
            return {
                ...state,
                authorAlbumId: action.authorAlbumId
            }
        case SET_ALBUMS_USER:
            return {
                ...state,
                albumsUser: action.albumsUser
            }
        default:
            return state

    }
}
//actions
type ActionsType = LoadedAlbumsInfoType | SetCurrentAlbumType | SetAuthorAlbumIdType | SetAlbumsUserType

type LoadedAlbumsInfoType = {
    type: typeof LOADING
    loaded: boolean
}
export const loadedAlbumsInfoAC = (loaded: boolean): LoadedAlbumsInfoType => {
    return {
        type: LOADING,
        loaded
    }
}

type SetCurrentAlbumType = {
    type: typeof SET_CURRENT_ALBUM
    currentAlbum: CurrentAlbumType[]
}
export const setCurrentAlbumAC = (currentAlbum: CurrentAlbumType[]): SetCurrentAlbumType => {
    return {
        type: SET_CURRENT_ALBUM,
        currentAlbum
    }
}

type SetAuthorAlbumIdType = {
    type: typeof SET_AUTHOR_ALBUM_ID,
    authorAlbumId: number | null
}
export const setAuthorAlbumIdAC = (authorAlbumId: number | null): SetAuthorAlbumIdType => {
    return {
        type: SET_AUTHOR_ALBUM_ID,
        authorAlbumId
    }
}


type SetAlbumsUserType = {
    type: typeof SET_ALBUMS_USER,
    albumsUser: AlbumsUserType[],
}
export const setAlbumsUserAC = (albumsUser: AlbumsUserType[]): SetAlbumsUserType => {
    return {
        type: SET_ALBUMS_USER,
        albumsUser
    }
}


//thunks
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, GetStateType, unknown, ActionsType>


export const setCurrAlbWithCurrUserIdTC = (albumId:number): ThunkType => async (dispatch) => {
    dispatch(loadedAlbumsInfoAC(false));
    let response = await PhotosAPI.getCurrentAlbum(albumId)
    dispatch(setCurrentAlbumAC(response));
    let newResponse = await AlbumsAPI.getAuthorAlbumId(albumId)
    dispatch(setAuthorAlbumIdAC(newResponse[0].userId))
    dispatch(loadedAlbumsInfoAC(true));
}

export const setAlbumsUserTC = (userId:number): ThunkType => async (dispatch) => {
    dispatch(loadedAlbumsInfoAC(false));
    let response = await AlbumsAPI.getAlbumsUser(userId)
    dispatch(setAlbumsUserAC(response));
    dispatch(loadedAlbumsInfoAC(true));
}






export default AlbumReducer;