import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from 'prisma';

interface PostsState {
  type: string,
  cols: number,
  posts: Array<Post>,
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  type: 'sell',
  cols: 2,
  posts: [],
  loading: 'idle',
} as PostsState;

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: () => initialState,
    setPostType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setCols: (state, action: PayloadAction<number>) => {
      state.cols = action.payload;
    },
    postAdded: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    postUpdated: (state, action: PayloadAction<Post>) => {
      const { id, title, subTitle, price, content, images, tags } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.subTitle = subTitle;
        existingPost.price = price;
        existingPost.content = content;
        existingPost.images = images;
        existingPost.tags = tags;
      }
    },
    postDeleted: (state, action: PayloadAction<Post>) => {
      const { id } = action.payload;
      state.posts = state.posts.filter(post => post.id !== id);
    },
  },
  extraReducers: (builder) => {
  }
});

export const {
  setPostType,
  setCols,
  postAdded,
  postUpdated,
  postDeleted
} = posts.actions;
export default posts.reducer;