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

type GetAlbumsResponseType = {
    userId: number,
    id: number,
    title: string
}

export const AlbumsAPI = {
    getAlbums() {
        return axios.get<GetAlbumsResponseType>("https://jsonplaceholder.typicode.com/albums")
    }
}

type GetPhotosResponseType = {

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
    }
}

