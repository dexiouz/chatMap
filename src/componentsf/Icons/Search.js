import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Search({color = '#9393AA', size = 24}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.833 10.152a1 1 0 11-1.939.49 3.506 3.506 0 00-2.707-2.575 1 1 0 01.39-1.961 5.506 5.506 0 014.256 4.046zM21.69 20.2l-3.044-3.032a9.235 9.235 0 002.082-5.842C20.728 6.19 16.532 2 11.364 2 6.196 2 2 6.179 2 11.326c0 5.148 4.196 9.327 9.364 9.327a9.334 9.334 0 005.781-2l3.054 3.042c.212.21.476.305.75.305.275 0 .54-.105.751-.305a1.068 1.068 0 00-.01-1.495zM4.113 11.326c0-3.979 3.255-7.22 7.25-7.22s7.25 3.241 7.25 7.22c0 3.98-3.255 7.221-7.25 7.221s-7.25-3.242-7.25-7.22z"
        fill={color}
      />
    </Svg>
  );
}

export default Search;
