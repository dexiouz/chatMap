import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CalendarCheck({color = '#9393AA', size = 24}) {
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
        d="M3 22h18a1 1 0 001-1V4a1 1 0 00-1-1h-4a1 1 0 10-2 0H9a1 1 0 00-2 0H3a1 1 0 00-1 1v17a1 1 0 001 1zM4 5h3a1 1 0 002 0h6a1 1 0 102 0h3v3H4V5zm0 5h16v10H4V10zm7.64 7.688a.904.904 0 01-1.278 0l-2.098-1.917a.904.904 0 011.278-1.277l1.459 1.277 3.486-3.506a.904.904 0 011.277 1.277l-4.124 4.146z"
        fill={color}
      />
    </Svg>
  );
}

export default CalendarCheck;
