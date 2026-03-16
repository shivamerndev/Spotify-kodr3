import createSongUrl from "../config/imagekit.config.js";
import songModel from "../models/song.model.js";
import metaData from "id3"
// import fs from "fs";
// import path from "path";

export const createSong = async (req, res) => {

    const { artist } = req.body;
    const songFile = req.file;
    const meta = metaData(songFile.buffer)
    console.log(meta)
    if (!artist || !songFile) {
        return res.status(400).message("Artist and SongFile must be provided.")
    }
    // const filePath = path.join("uploads", "music", "shivam" + songFile.originalname);

    // fs.appendFile(filePath, songFile.buffer, (err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("File saved");
    //     }
    // });


    // appendFile → add new content to existing file
    // writeFile → replace file content         =>   if i will forget it, go to gpt because it is very easy. 


    // fs.writeFile(filePath,songFile.buffer,(err)=>{
    //     if (err) {
    //       return res.send(err.message)  
    //     }else{
    //         console.log("File Saved.")
    //     }
    // })
    const { url } = await createSongUrl(songFile)
    await songModel.create({ song: url, artist })
    res.status(201).json({ message: "Song Uploaded Successfully." })
}

export const getSongs = async (req, res) => {
    const songs = await songModel.find()
    res.status(200).json({ success: true, songs })
}

export const getSong = async (req, res) => {
    const song = await songModel.findById(req.params.songId)
    res.status(200).json({ message: "song fetched successfully.", song })
}