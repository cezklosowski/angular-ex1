import { NameToUppercasePipe } from './name-to-uppercase.pipe';

describe('NameToUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new NameToUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
