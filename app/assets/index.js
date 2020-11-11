import pngPaths from './pngPaths';

export const requirePngFlag = lang => {
  if (typeof(pngPaths[lang]) === "undefined") {
    return pngPaths['unknown'];
  } else {
    return pngPaths[lang]
  }
}
