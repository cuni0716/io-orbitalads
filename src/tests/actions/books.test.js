import { expect } from 'chai';
import * as actions from 'actions/books';

describe('Books action creators', () => {
  it('should return correct action for addBook', () => {
    const bookMock = { author: 'George R.R. Martin', price: 31.24, title: 'A Game of Thrones' };
    const action = actions.addBook(bookMock);

    expect(action).to.be.an('object');
    expect(action).to.eql({
      type: 'ADD_BOOK',
      book: bookMock,
    });
  });

  it('should return correct action for removeBook', () => {
    const action = actions.removeBook(2);

    expect(action).to.be.an('object');
    expect(action).to.eql({
      type: 'REMOVE_BOOK',
      index: 2,
    });
  });
});
