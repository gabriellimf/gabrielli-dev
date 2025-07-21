import axios from "axios";

const BASE_URL = "http://localhost:5173";

export const createPostAPI = async (postData) => {
  console.log("Creating post with data:", postData);
  const response = await axios.post(BASE_URL, {
    title: postData.title,
    description: postData.description,
    author: postData.author,
  });
  return response.data;
};
