import ImageKit from '@imagekit/nodejs';
import envConfig from "./env.config.js"


const client = new ImageKit({
    privateKey: envConfig.IMAGEKIT_PRIVATE_KEY
});

const createSongUrl = async (songFile, image, title) => {

    const response = await client.files.upload({
        file: songFile.buffer.toString('base64'),
        fileName: songFile.originalname,
    });

    const imageUrl = await client.files.upload({
        file: image.imageBuffer.toString('base64'),
        fileName: title + ".jpg",
    });

    return { url: response.url, posterUrl: imageUrl.url }
}

export default createSongUrl