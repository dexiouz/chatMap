import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MoreX({color = '#9393AA', size = 24}) {
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
        d="M11.5 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-14 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
        fill={color}
      />
    </Svg>
  );
}

export default MoreX;
