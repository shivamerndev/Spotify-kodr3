import ImageKit from '@imagekit/nodejs';
import envConfig from "./env.config.js"


const client = new ImageKit({
    privateKey: envConfig.IMAGEKIT_PRIVATE_KEY
});

const createSongUrl = async (songFile) => {
    const response = await client.files.upload({
        file: songFile.buffer.toString('base64'),
        fileName: songFile.originalname,
    });

    console.log(response, "res");
}

export default createSongUrl