import { expect } from 'chai';
import discountReducer from 'reducers/discount';

describe('Discount reducer', () => {
  let state;

  it('should return initial state', () => {
    state = discountReducer(state, {});

    expect(state).to.be.an('object');
    expect(state.value).to.be.a('number');
    expect(state).to.eql({
      value: 0,
    });
  });

  it('should update initial state', () => {
    const action = {
      type: 'APPLY_DISCOUNT',
      discount: 10,
    };

    state = discountReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.value).to.be.a('number');
    expect(state).to.eql({
      value: 10,
    });
  });

  it('should update non initial state', () => {
    const action = {
      type: 'APPLY_DISCOUNT',
      discount: 50,
    };

    state = discountReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.value).to.be.a('number');
    expect(state).to.eql({
      value: 50,
    });
  });

  it('should return to initial state', () => {
    const action = {
      type: 'APPLY_DISCOUNT',
      discount: 0,
    };

    state = discountReducer(state, action);

    expect(state).to.be.an('object');
    expect(state.value).to.be.a('number');
    expect(state).to.eql({
      value: 0,
    });
  });
});
