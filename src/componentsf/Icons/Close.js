import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Close({color = '#9393AA', size = 24}) {
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
        d="M19.072 17.658a1 1 0 11-1.414 1.414l-5.657-5.657-5.657 5.657a1 1 0 11-1.414-1.414l5.657-5.657L4.93 6.344A1 1 0 016.344 4.93l5.657 5.657 5.657-5.657a1 1 0 011.414 1.414l-5.657 5.657 5.657 5.657z"
        fill={color}
      />
    </Svg>
  );
}

export default Close;
