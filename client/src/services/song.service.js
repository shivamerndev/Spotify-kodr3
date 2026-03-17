import axios from '../utils/axios.utils.js'
import hanleError from '../utils/error.utils.js';

const uploadSong = hanleError(async (data) => {
    const res = await axios.post("/song", data, { headers: { 'Content-Type': 'multipart/form-data' } });
    return res.data;
})

const getSongs = hanleError(async (data) => {
    const res = await axios.get("/song", data);
    return res.data;
})

const getSongById = hanleError(async (id) => {
    const res = await axios.get(`/song/${id}`);
    return res.data;
})

export { uploadSong, getSongs, getSongById }