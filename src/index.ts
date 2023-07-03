import optionsValidator from './validator';
import { TAbbreviation } from './types/TAbbreviation';

export const numberAbbr = (value: number, options?: TAbbreviation): string => {
  if (typeof value !== 'number') {
    throw new Error('A number value is required!');
  }

  const resultOptions = optionsValidator(options);

  if (value > 1000) {
    const suffixIndex = Math.floor(Math.log10(value) / 3);
    const scaledNumber = value / Math.pow(10, suffixIndex * 3);

    let formattedNumber;

    if (scaledNumber > 1 && value >= 1000) {
      formattedNumber = scaledNumber.toFixed(resultOptions.decimals);
    } else {
      formattedNumber = scaledNumber.toFixed(0);
    }

    const setSuffixSpace = !!resultOptions?.suffixSpace ? ' ' : '';

    return `${formattedNumber}${setSuffixSpace}${resultOptions.suffixes[suffixIndex]}`;
  } else {
    return value.toString();
  }
};
