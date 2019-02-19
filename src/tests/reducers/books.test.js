import { expect } from 'chai';
import booksReducer from 'reducers/books';

describe('Books reducer', () => {
  let state;

  it('should return initial state', () => {
    state = booksReducer(state, {});

    expect(state).to.be.an('object');
    expect(state.list).to.be.an('array');
    expect(state).to.eql({
      list: [],
    });
  });

  it('should add a book from empty state', () => {
    const action = {
      type: 'ADD_BOOK',
      book: { title: 'Clean Code', price: 20.15, author: 'Robert Cecil Martin' },
    };

    state = booksReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.list).to.be.an('array');
    expect(state.list).to.have.lengthOf(1);
    expect(state.list[0]).to.eql(action.book);
  });

  it('should add a book from non empty state', () => {
    const action = {
      type: 'ADD_BOOK',
      book: { title: 'The Clean Coder', price: 27.07, author: 'Robert Cecil Martin' },
    };

    state = booksReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.list).to.be.an('array');
    expect(state.list).to.have.lengthOf(2);
    expect(state.list[1]).to.eql(action.book);
  });

  it('should add a more books', () => {
    const action = {
      type: 'ADD_BOOK',
      book: { title: 'JavaScript The Good Parts', price: 21.84, author: 'Douglas Crockford' },
    };

    state = booksReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.list).to.be.an('array');
    expect(state.list).to.have.lengthOf(3);
    expect(state.list[2]).to.eql(action.book);
  });

  it('should remove the desired book', () => {
    const action = {
      type: 'REMOVE_BOOK',
      index: 1,
    };

    state = booksReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.list).to.be.an('array');
    expect(state.list).to.have.lengthOf(2);
    expect(state.list[0].title).to.eql('Clean Code');
    expect(state.list[1].title).to.eql('JavaScript The Good Parts');
  });

  it('should remove the book in the last position', () => {
    const action = {
      type: 'REMOVE_BOOK',
      index: 1,
    };

    state = booksReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.list).to.be.an('array');
    expect(state.list).to.have.lengthOf(1);
    expect(state.list[0].title).to.eql('Clean Code');
  });

  it('should remove the book in the first position', () => {
    const action = {
      type: 'REMOVE_BOOK',
      index: 0,
    };

    state = booksReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.list).to.be.an('array');
    expect(state.list).to.have.lengthOf(0);
  });
});
