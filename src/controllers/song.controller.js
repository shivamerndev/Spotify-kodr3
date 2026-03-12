import createSongUrl from "../config/imagekit.config.js";
import songModel from "../models/song.model.js";

export const createSong = async (req, res) => {

    const artist = req.body;
    const songFile = req.file;

    const songUrl = await createSongUrl(songFile)
    res.send(songUrl)

    // await songModel.create({
    //     song:songFile,
    //     artist
    // })
}