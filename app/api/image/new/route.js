// import Image from "@/models/image";
// import { connectToDB } from "@/utils/database";
// import fs from 'fs/promises';

// export const POST = async (request) => {
//     try {
//         const formData = await request.formData();
//         const userId = formData.get("userId");
//         const tag = formData.get("tag");
//         const image = formData.get("image");

//         if (!image || !image.path) {
//             throw new Error("Image file not provided or invalid.");
//         }

//         const imageBuffer = await fs.readFile(image.path);

//         await connectToDB();
//         const newImage = new Image({
//             creator: userId,
//             tag,
//             image: {
//                 data: imageBuffer,
//                 contentType: image.type,
//             }
//         });

//         await newImage.save();
//         return new Response(JSON.stringify({ message: "Image saved successfully" }), { status: 201 });

//     } catch (error) {
//         console.error("Error in API route:", error);
//         return new Response("Failed to create a new image", { status: 500 });
//     }
// }


// const { Image } = require('@/models/upload');
// const cloudinary = require('@/utils/cloudinary')
// const express = require('express')

// const router = express.Router();

// // Create a Image upload
// router.post('/upload', async (req, res) => {
//     const { tag, image } = req.body;

//     try {
//         if (image) {
//             const uploadRes = await cloudinary.uploader.upload(image, { upload_preset: 'freeImages' })
//             if (uploadRes) {
//                 const upload = new Image({
//                     tag,
//                     image: uploadRes
//                 })
//                 const savedUpload = await upload.save()
//                 res.status(200).send(savedUpload);
//             }
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// })

// module.exports = router

import Image from "@/models/image";
import { cloudinary } from "@/utils/cloudinary";
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
    const { tag, image } = req.body;
    const userId = req.body.userId;
    try {
        
        if (image) {
            const uploadRes = await cloudinary.uploader.upload(image, { upload_preset: 'freeImages' })
            if (uploadRes) {
                const upload = new Image({
                    creator: userId,
                    tag,
                    image: uploadRes
                })
                await connectToDB()
                const savedUpload = await upload.save()
                res.status(200).send(savedUpload);
            }
        }


    } catch (error) {
        console.error("Error in API route:", error);
        return new Response("Failed to create a new image", { status: 500 });
    }
}