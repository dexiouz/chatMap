import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Logout({color = '#9393AA', size = 24}) {
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
        d="M6.412 4.008A9.704 9.704 0 0112 2.25c5.377 0 9.75 4.373 9.75 9.75s-4.373 9.75-9.75 9.75a9.655 9.655 0 01-5.592-1.762 9.747 9.747 0 01-3.52-4.505l-.17-.488h2.143l.089.235c.384.834.914 1.589 1.57 2.245A7.713 7.713 0 0012 19.744a7.697 7.697 0 005.48-2.269 7.705 7.705 0 002.268-5.48 7.697 7.697 0 00-2.268-5.48A7.697 7.697 0 0012 4.248a7.697 7.697 0 00-5.48 2.269 7.758 7.758 0 00-1.57 2.25L4.86 9H2.72l.173-.488a9.747 9.747 0 013.52-4.504zm3.374 10.385l1.356-1.39H3.25a1.003 1.003 0 010-2.006h7.892L9.767 9.622a1.008 1.008 0 01.02-1.434 1.008 1.008 0 011.407.006l3.099 3.099a1 1 0 010 1.414l-3.088 3.088a.997.997 0 01-1.419-1.402z"
        fill={color}
      />
    </Svg>
  );
}

export default Logout;
