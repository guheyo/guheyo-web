import { CreatePostInput, CreateThreadInput } from '@/generated/graphql';
import { ThreadValues } from './thread.types';
import { THREAD } from './thread.constants';

const parseCreateThreadInput = ({
  threadValues,
}: {
  threadValues: ThreadValues;
}): CreateThreadInput => {
  const postInput: CreatePostInput = {
    type: THREAD,
    title: '',
    groupId: threadValues.groupId,
    categoryId: threadValues.categoryId,
    brandId: threadValues.brandId === '' ? undefined : threadValues.brandId,
  };
  const threadInput: CreateThreadInput = {
    post: postInput,
    id: threadValues.id,
    content: threadValues.content,
  };
  return threadInput;
};

export default parseCreateThreadInput;
