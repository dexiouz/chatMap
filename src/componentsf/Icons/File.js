import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function File({color = '#9393AA', size = 24}) {
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
        d="M15 4H6v16h12V7h-3V4zM6 2h10l4 4v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm2 9h8v2H8v-2zm0 4h8v2H8v-2z"
        fill={color}
      />
    </Svg>
  );
}

export default File;
