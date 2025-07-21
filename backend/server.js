const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const Post = require('./models/Post/Post');
const connectDB = require('./utils/connectDB');

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT

app.use(express.json());
const corsOptions = {
  origin: ['http://localhost:5173'],
  credentials: true,
}
app.use(cors(corsOptions));
app.post('/api/v1/posts/create', async (req, res) => {
  try {
    const postData = req.body;
    const postCreated = await Post.create(postData)

    return res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: postCreated,
    });
  } catch (error) {
    res.status(400);
    res.json(error);
  }
})

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));