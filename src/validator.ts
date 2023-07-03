import { TAbbreviation } from "./types/TAbbreviation"; 

export default function optionsValidator(options?: TAbbreviation) {
  const getOtionsKeys = options ? Object.keys(options) : [];

  let decimals = 1;
  let suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixSpace = false;

  if (getOtionsKeys?.length > 0) {
    if (options?.decimals && typeof options?.decimals !== 'number') {
      throw new Error('A number value is required!');
    }
    
    if (options?.decimals && !Number.isInteger(options?.decimals)) {
      throw new Error('A interger value is required!');
    }

    if (options?.suffixes && options?.suffixes?.length !== 4) {
      throw new Error('The 4 suffixes indexes is required!');
    }

    if (
      options?.suffixes &&
      !options.suffixes.every(i => typeof i === 'string')
    ) {
      throw new Error('An array of strings is required!');
    }

    return {
      decimals: options?.decimals || 1,
      suffixes: options?.suffixes?.length
        ? ['', ...options.suffixes]
        : ['', 'K', 'M', 'B', 'T'],
      suffixSpace: options?.suffixSpace,
    };
  }

  return {
    decimals,
    suffixes,
    suffixSpace,
  };
}
