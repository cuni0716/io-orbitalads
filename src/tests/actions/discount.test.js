import { expect } from 'chai';
import applyDiscount from 'actions/discount';

describe('Discount action creators', () => {
  it('should return correct action for applyDiscount', () => {
    const action = applyDiscount(20);

    expect(action).to.be.an('object');
    expect(action).to.eql({
      type: 'APPLY_DISCOUNT',
      discount: 20,
    });
  });
});
