import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Clock({color = '#9393AA', size = 24}) {
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
        d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 18.161c-4.5 0-8.16-3.66-8.16-8.16S7.5 3.84 12 3.84 20.16 7.5 20.16 12 16.5 20.161 12 20.161zm4.744-5.683l-3.825-2.482v-5.02a.92.92 0 10-1.838 0v6.018l4.66 3.026a.92.92 0 101.003-1.542z"
        fill={color}
      />
    </Svg>
  );
}

export default Clock;
