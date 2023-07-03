import optionsValidator from '../src/validator';
import { numberAbbr } from './../src';

describe('Abbreviation options validate:', () => {
  const validSuffixes = ['Thousand', 'Million', 'Billion', 'Trillion'];
  const invalidSuffixes = ['Thousand'];

  it('should be valid truncate decimal', () => {
    expect(
      optionsValidator({
        decimals: 3,
      }).decimals
    ).toEqual(3);
  });

  it('should be valid complete options', () => {
    expect(
      optionsValidator({
        decimals: 3,
        suffixes: validSuffixes,
        suffixSpace: true,
      })
    ).toMatchObject({
      decimals: 3,
      suffixes: ['', ...validSuffixes],
      suffixSpace: true,
    });
  });

  it('should be invalid truncate decimal', () => {
    expect(() => {
      optionsValidator({
        decimals: 3.4,
      }).decimals;
    }).toThrow('A interger value is required!');
  });

  it('should be valid suffixes length', () => {
    expect(
      optionsValidator({
        suffixes: validSuffixes,
      }).suffixes?.length
    ).toEqual(5);
  });

  it('should be invalid suffixes length', () => {
    expect(() => {
      optionsValidator({
        suffixes: invalidSuffixes,
      }).suffixes?.length;
    }).toThrow('The 4 suffixes indexes is required!');
  });
});

describe('Abbreviation numbers:', () => {
  const validSuffixes = ['Thousand', 'Million', 'Billion', 'Trillion'];

  it('should be a default thousand abbreviation', () => {
    expect(numberAbbr(1234)).toEqual('1.2K');
  });

  it('should be a default million abbreviation', () => {
    expect(numberAbbr(1234567)).toEqual('1.2M');
  });

  it('should be a default billion abbreviation', () => {
    expect(numberAbbr(1234567890)).toEqual('1.2B');
  });

  it('should be a default trillion abbreviation', () => {
    expect(numberAbbr(1234567890123)).toEqual('1.2T');
  });

  it('should be a personal thousand abbreviation', () => {
    expect(
      numberAbbr(1234, { suffixes: validSuffixes, suffixSpace: true })
    ).toEqual('1.2 Thousand');
  });

  it('should be a personal million abbreviation', () => {
    expect(
      numberAbbr(1234567, { suffixes: validSuffixes, suffixSpace: true })
    ).toEqual('1.2 Million');
  });

  it('should be a personal billion abbreviation', () => {
    expect(
      numberAbbr(1234567890, { suffixes: validSuffixes, suffixSpace: true })
    ).toEqual('1.2 Billion');
  });

  it('should be a personal trillion abbreviation', () => {
    expect(
      numberAbbr(1234567890123, { suffixes: validSuffixes, suffixSpace: true })
    ).toEqual('1.2 Trillion');
  });
});
