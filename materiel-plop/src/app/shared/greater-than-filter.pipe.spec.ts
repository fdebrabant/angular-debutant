import { GreaterThanFilterPipe } from './greater-than-filter.pipe';

describe('GreaterThanFilterPipe', () => {

  const values = [
    {numberRef: 10},
    {numberRef: 20},
    {numberRef: 30},
  ];

  it('Should filter list to element equal or greater than a ref value', () => {
    const pipe = new GreaterThanFilterPipe();
    expect(pipe.transform(values, 'numberRef', 20).length).toBe(2);
  });
});
