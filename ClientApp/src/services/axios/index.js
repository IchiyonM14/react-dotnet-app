import axios from "axios";
import authService from '../../components/api-authorization/AuthorizeService'

export const fetchData = async ({ method, url, params, data }) => {
    const token = await authService.getAccessToken();    

    return axios({
        method: method || "GET",
        baseURL: `https://localhost:5001/api`,
        url: url || "",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: { ...params },
        data: { ...data }
    });
}
