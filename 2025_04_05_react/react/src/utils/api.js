//crear una instancia personalidad de axios para conectarnos a una API
import axios from "axios"
export const api = axios.create(
    {
        baseURL: import.meta.env.VITE_URL_BASE,

    }
)
//instancia personalizada de axios