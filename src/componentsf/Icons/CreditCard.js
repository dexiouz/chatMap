import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CreditCard({color = '#9393AA', size = 24}) {
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
        d="M2.01 6c0-1.105.885-2 1.99-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2l.01-12zM8 10H4v1h4v-1zm2 0h4v1h-4v-1zm10 0h-4v1h4v-1zM4 18v-5h16v5H4zM4 6v2h16V6H4z"
        fill={color}
      />
    </Svg>
  );
}

export default CreditCard;
