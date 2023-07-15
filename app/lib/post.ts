import { Post } from "prisma";

export const getPostTitle = (post: Post) => {
  switch(post.type) {
    case 'sell': {
      return post.title;
    }
    case 'buy': {
      return post.title;
    }
    case 'trade': {
      return `${post.title}\n->\n${post.subTitle}`;
    }
    default: return '';
  }
};

export const getPrice = (post: Post) => {
  switch(post.type) {
    case 'sell': {
      return `${post.price/10000}만원`;
    }
    case 'buy': {
      return `${post.price/10000}만원`;
    }
    case 'trade': {
      return '';
    }
    default: return '';
  }
};