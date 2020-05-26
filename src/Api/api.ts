import axios from "axios";



type GetUsersResponseType = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export const UsersAPI = {
    getUsers() {
        return axios.get<GetUsersResponseType>("https://jsonplaceholder.typicode.com/users")
    }
}

export type GetAlbumsResponseType = {
    userId: number
    id: number
    title: string
}

export const AlbumsAPI = {
    getAlbums() {
        return axios.get<GetAlbumsResponseType[]>("https://jsonplaceholder.typicode.com/albums").then(response => {
            return response.data
        })
    },
    getAlbumsUser(userId: number) {
        return axios.get<GetAlbumsResponseType[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then(response => {
            return response.data
        })
    },
    getAuthorAlbumId(albumId: number) {
        return axios.get<GetAlbumsResponseType[]>(`https://jsonplaceholder.typicode.com/albums?id=${albumId}`).then(response => {
            return response.data
        })
    }
}

export type GetPhotosResponseType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export const PhotosAPI = {
    getPhotos() {
        return axios.get<GetPhotosResponseType[]>("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=100").then(response => {
            return response.data
        })
    },
    getCurrentAlbum(albumId: number) {
        return axios.get<GetPhotosResponseType[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).then(response => {
            return response.data
        })
    }
}

