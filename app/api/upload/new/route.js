
// import { connectToDB } from "@/utils/database";
// import Image from "@/models/image";

// export const POST = async (request) => {
//     const { userId, image, title, tag } = await request.json();

//     try {
//         await connectToDB();
//         const newImage = new Image({ creator: userId, image, title, tag });

//         await newImage.save();
//         return new Response(JSON.stringify(newImage), { status: 201 })
//     } catch (error) {
//         return new Response("Failed to upload a new Image", { status: 500 });
//     }
// }

import axios from 'axios';
import formidable from 'formidable-serverless';
import { MongoClient } from 'mongodb';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  console.log(req);
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Error parsing the form data.' });
        return;
      }

      try {
        // Upload image to imgbb
        // const imageData = new FormData();
        // imageData.append('image', fs.readFileSync(files.image.filepath));

        // const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, {
        //   method: 'POST',
        //   body: formData,
        // });

        // const imgbbData = await imgbbResponse.json();
        // const imageUrl = imgbbData.data.url;
        const title = fields.title;

        // Connect to MongoDB
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();

        // Insert the title and image URL into the database
        const result = await db.collection('images').insertOne({ title, imageUrl });

        // await client.close();

        res.status(200).json({ message: 'Image and title uploaded successfully', data: result });
      } catch (error) {
        res.status(500).json({ error: 'Error uploading data.' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};