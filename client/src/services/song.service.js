import axios from '../utils/axios.utils.js'

const uploadSong = async (data) => {
    const res = await axios.post("/song", data);
    console.log(res)
    return res.data;
}

const getSongs = async (data) => {
    const res = await axios.get("/song", data);
    return res.data;
}

const getSongById = async (id) => {
    const res = await axios.get(`/song/${id}`);
    return res.data;
}

export { uploadSong, getSongs, getSongById }