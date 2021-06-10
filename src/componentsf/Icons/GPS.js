import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GPS({color = '#9393AA', size = 24}) {
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
        d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm2 0a2 2 0 113.999-.001A2 2 0 0110 12zm10.127-.91a8.177 8.177 0 00-7.218-7.217v-.964a.91.91 0 10-1.818 0v.964a8.177 8.177 0 00-7.218 7.218h-.964a.91.91 0 100 1.818h.964a8.177 8.177 0 007.218 7.218v.964a.91.91 0 101.818 0v-.964a8.177 8.177 0 007.218-7.218h.964a.91.91 0 100-1.818h-.964zM12 18a6.001 6.001 0 010-12 6.001 6.001 0 010 12z"
        fill={color}
      />
    </Svg>
  );
}

export default GPS;
