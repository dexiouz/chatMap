/** This file contains helpers for the StyledComponent library for ReactJS.
 * Styled components helpers
 * @author Joseph Julius Owonvown
 */
import {path} from 'lodash/fp';
import {Dimensions, Platform, PixelRatio} from 'react-native';
import {css} from 'styled-components/native';
import {curry, split} from 'ramda';

export const fullwidth = a => {
  return (
    a.fullwidth &&
    css`
      width: 100%;
    `
  );
};

export const fetchPropFromTheme = themeProp => val => {
  return path(['theme', themeProp, val]);
};
export const colors = fetchPropFromTheme('colors');
export const gutter = fetchPropFromTheme('gutter');
export const responsive = values => a => a.theme.responsive(values);

export const isLarge = ({width, height}) => PixelRatio.get() >= 3;
export const isSmall = ({width, height}) => PixelRatio.get() < 2;
export const isMedium = ({width, height}) =>
  PixelRatio.get() >= 2 && PixelRatio.get() < 3;

export const _responsive = values => {
  if (values.length === 1) {
    return values[0];
  }
  const dimen = Dimensions.get('window');
  // console.info('The Dimension', dimen);

  if (isSmall(dimen)) {
    return values[0];
  }
  if (isMedium(dimen)) {
    return values[1] || values[0];
  }
  if (isLarge(dimen)) {
    return values[values.length - 1];
  }

  return values[0];
};

export const platform = (android, ios) => {
  return Platform.OS === 'android' ? android : ios;
};

// export const theme = curry((key, props) => {
//   const path = isArray(key) ? key : split('.', key);
//   const getPath = view(lensPath(path));

//   return getPath(props.theme);
// });

// export const themeOr = curry((fallback, key, props) => {
//   const keyFrom = theme(key);
//   return keyFrom(props) || keyFrom({ theme: fallback });
// });

export const withProp = curry((key, style, props) => {
  return props[key] && style;
});

export const propIs = curry(
  (prop, functor, style, props) => functor(props[prop]) && style,
);

// helps set a default value for a StyleComponent property
export const propOr = (prop, defValue) => props => props[prop] || defValue;

// gets a nested property value. Used for a StyleComponent css properties
export const theme = strPath => path(['theme', ...split('.', strPath)]);
