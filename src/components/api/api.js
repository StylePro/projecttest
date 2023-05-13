import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "61ad3746-7627-4c8c-b7d8-603828dd61ca"}
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`).then(responce => {
                return responce.data
            }
        )
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
    }
}
export const authApi = {
    getAuth() {
        return instance.get(`auth/me`).then(responce => {
            return responce.data
        })
    }
}



