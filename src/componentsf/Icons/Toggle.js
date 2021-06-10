import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Toggle({color = '#9393AA', size = 24}) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM4 12a8 8 0 018-8v16a8 8 0 01-8-8z"
        fill={color}
      />
    </Svg>
  );
}

export default Toggle;
