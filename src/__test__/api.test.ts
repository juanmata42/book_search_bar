import { getBooks } from '../api/api';

describe('getBooks', () => {
  it('should return an array of 10 books', async () => {
    const books = await getBooks('robot');
    expect(books.length).toEqual(10);
  });
  it('should return an array with more or less than 10 books', async () => {
      jest.setTimeout(10000);
    const books = await getBooks('a');
    expect(books.length).toBeGreaterThanOrEqual(10);
  });
});
