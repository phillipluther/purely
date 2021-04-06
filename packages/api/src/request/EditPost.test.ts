import { EditPost } from './EditPost';
import { validate } from 'class-validator';

describe('request/EditPost', () => {
  let editPost: EditPost;
  const validatorOptions = {};

  beforeAll(() => {
    editPost = new EditPost();
  });

  const v = async (instance: EditPost, options = validatorOptions) => {
    return validate(instance, options);
  };

  test('has known/expected properties', async () => {
    editPost.title = 'My New Post';
    editPost.description = 'A new post';
    editPost.tags = ['tag1', 'tag2', 'tag3'];

    expect(editPost.title).toBeDefined();
    expect(editPost.description).toBeDefined();
    expect(editPost.tags).toBeDefined();
  });

  describe('`title` validation', () => {
    test('validates', async () => {
      for (let i = 0; i < 16; i++) {
        editPost.title = 'x'.repeat(i);
      }

      expect(await v(editPost)).toHaveLength(0);
    });

    // it's TypeScript ... this is implicit and not needed.
    // test('must be a string', async() => {
    //   editPost.title = 9999;
    //   expect(await v(editPost)).toHaveLength(1);
    // });
    
  });
});
