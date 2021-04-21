import axios from "axios";
import authService from '../../components/api-authorization/AuthorizeService'

export const fetchData = ({method, url, params}) => {
    let paramsInit = {
        apikey: process.env.REACT_APP_PUBLIC_KEY,
    }
    return axios({
        method: method || "GET",
        baseURL: `${process.env.REACT_APP_API_URL}`,
        url: url || "",
        params: {
            ...paramsInit,
            ...params
        }
    })
}
