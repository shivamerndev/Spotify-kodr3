import { getSongById, getSongs, uploadSong } from '../services/song.service.js'
import hanleError from '../utils/error.utils.js'

const useSong = () => {

    const handleUploadSong = (data) => hanleError(uploadSong(data))
    const handleGetSongs = () => hanleError(getSongs())
    const handleGetSongById = (id) => hanleError(getSongById(id))

    return { handleUploadSong, handleGetSongs, handleGetSongById }
}

export default useSong