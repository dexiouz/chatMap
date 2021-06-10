import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Calendar({color = '#9393AA', size = 24}) {
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
        d="M21 22H3a1 1 0 01-1-1V4a1 1 0 011-1h4a1 1 0 012 0h6a1 1 0 112 0h4a1 1 0 011 1v17a1 1 0 01-1 1zM7 5H4v3h16V5h-3a1 1 0 11-2 0H9a1 1 0 01-2 0zm-3 5h16v10H4V10zm3 4v-2h2v2H7zm0 4v-2h2v2H7zm6-6h-2v2h2v-2zm-2 4h2v2h-2v-2zm6-2v-2h-2v2h2zm-2 4v-2h2v2h-2z"
        fill={color}
      />
    </Svg>
  );
}

export default Calendar;
