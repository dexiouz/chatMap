import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PinMap({color = '#9393AA', size = 24}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path opacity={0.01} fill="#000" d="M2 2h20v20H2z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a8 8 0 018 8c0 2.921-1.345 5.788-3.54 8.394C14.84 20.314 12.801 22 12 22c-.801 0-2.841-1.685-4.46-3.606C5.346 15.788 4 12.921 4 10a8 8 0 018-8zm0 2a6 6 0 00-6 6c0 2.375 1.15 4.828 3.07 7.106a18.15 18.15 0 002.254 2.248c.297.245.676.52.676.52s.421-.31.676-.52c.737-.61 1.53-1.39 2.254-2.248C16.85 14.828 18 12.375 18 10a6 6 0 00-6-6zm0 3a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
        fill={color}
      />
    </Svg>
  );
}

export default PinMap;
