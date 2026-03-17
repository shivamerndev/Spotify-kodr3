import { useEffect, useState } from 'react'
import { getSongById, getSongs, uploadSong } from '../services/song.service.js'
import hanleError from '../utils/error.utils.js'

const useSong = () => {

    const [songs, setSongs] = useState([])

    const handleUploadSong = (data) => uploadSong(data)
    const handleGetSongById = (id) => getSongById(id)

    useEffect(() => {
        getSongs().then(res => setSongs(res.songs))
    }, [])

    return { handleUploadSong, songs, handleGetSongById }
}

export default useSong