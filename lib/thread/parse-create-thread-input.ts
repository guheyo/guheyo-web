import { CreatePostInput, CreateThreadInput } from '@/generated/graphql';
import { ThreadValues } from './thread.types';

const parseCreateThreadInput = ({
  threadValues,
}: {
  threadValues: ThreadValues;
}): CreateThreadInput => {
  const postInput: CreatePostInput = {
    type: 'thread',
    title: '',
    groupId: threadValues.groupId,
    categoryId: threadValues.categoryId,
    brandId: threadValues.brandId,
  };
  const threadInput: CreateThreadInput = {
    post: postInput,
    id: threadValues.id,
    content: threadValues.content,
  };
  return threadInput;
};

export default parseCreateThreadInput;
