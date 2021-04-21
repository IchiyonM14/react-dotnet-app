import axios from "axios";
import authService from '../../components/api-authorization/AuthorizeService'

export const fetchData = async ({ method, url, params }) => {
    const token = await authService.getAccessToken();

    let paramsInit = {
        apikey: process.env.REACT_APP_PUBLIC_KEY,
    }

    return axios({
        method: method || "GET",
        baseURL: `${process.env.REACT_APP_API_URL}`,
        url: url || "",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            ...paramsInit,
            ...params
        }
    })
}
