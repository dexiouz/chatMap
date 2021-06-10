import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackArrow({color = '#272755', size = 24}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path opacity={0.01} fill="#000" d="M0 0h24v24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.415 12l5.292 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.415 12zm4.676 1C8.488 13 8 12.552 8 12s.488-1 1.09-1H20.91c.603 0 1.09.448 1.09 1s-.487 1-1.09 1H9.091z"
        fill={color}
      />
    </Svg>
  );
}

export default BackArrow;
