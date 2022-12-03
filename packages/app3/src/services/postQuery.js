
import axios from 'axios'

export const postQuery = async (payload) => {
    const request = await axios.post(payload);

    return request
}