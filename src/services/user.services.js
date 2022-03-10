import {urls} from "../configs/urls";

const getUsers = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

const getUserId = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}


const getUserPosts = (userId) => {
    return fetch(`${urls.posts}?userId=${userId}`)
        .then(value => value.json())


}

export const userService = {
    getUsers,
    getUserId,
    getUserPosts
}