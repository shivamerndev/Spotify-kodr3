import createSongUrl from "../config/imagekit.config.js";
import songModel from "../models/song.model.js";
// import fs from "fs";
// import path from "path";

export const createSong = async (req, res) => {

    const artist = req.body;
    console.log(artist)
    const songFile = req.file;
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