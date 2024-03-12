import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "Exploring the Grand Canyon",
      category: "Travel",
      description:
        "My journey to the Grand Canyon was an incredible adventure. The vast canyons, breathtaking landscapes, and starry nights left me in awe.",
      isLiked: false,
    },
    {
      id: "2",
      title: "A Culinary Adventure in Paris",
      category: "Food",
      description:
        "Paris is a food lover's paradise. From croissants to escargot, I savored every bite during my culinary escapade in the city of lights.",
      isLiked: false,
    },
    {
      id: "3",
      title: "Hiking the Inca Trail",
      category: "Adventure",
      description:
        "Trekking the Inca Trail to Machu Picchu was a challenging but rewarding experience. The ancient ruins and stunning landscapes were worth every step.",
      isLiked: false,
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      console.log(state.blogs);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      console.log("===========blogIndex=========");
      console.log(blogIndex);
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
      console.log("===========blogTitle=========");
      console.log(state.blogs[blogIndex].title);
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].isLiked = !state.blogs[blogIndex].isLiked;
    },
  },
});

export const selectBlogById = (state, blogID) => {
  console.log("=======Blog ID :=========");
  console.log(blogID);
  console.log("===========Blogs Content=========");
  console.log(state.blogs.blogs);
  console.log("===========blogID typeof=========");
  console.log(typeof Number(blogID));
  const number = blogID;
  console.log("=========TypeOf blog.title =============");
  console.log(typeof String(state.blogs.blogs.title));
  const test = state.blogs.blogs.find((blog) => blog.id === number);
  console.log(test);
  return state.blogs.blogs.find((blog) => blog.id === blogID);
};

export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;
export default blogSlice.reducer;
