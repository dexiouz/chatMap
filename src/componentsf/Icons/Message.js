import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Message({color = '#9393AA', size = 24}) {
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
        d="M11.995 2c-2.67 0-5.18 1.04-7.07 2.93-3.583 3.583-3.904 9.29-.799 13.238-.334.6-.749 1.059-1.238 1.3a1.3 1.3 0 00.375 2.45c.248.039.522.062.82.062 1.135 0 2.298-.313 3.407-1.054a9.999 9.999 0 0011.58-1.856A9.93 9.93 0 0022 12a9.934 9.934 0 00-2.934-7.07A9.931 9.931 0 0011.995 2zm5.665 15.665a8.012 8.012 0 01-9.724 1.247.934.934 0 00-1.1.11.578.578 0 00-.082.068 4.348 4.348 0 01-1.45.744c.339-.427.622-.917.855-1.45a.956.956 0 00.05-.603.892.892 0 00-.217-.468 8.023 8.023 0 01.334-10.978c3.125-3.125 8.209-3.125 11.33 0 3.129 3.125 3.13 8.205.004 11.33zM9 12a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0z"
        fill={color}
      />
    </Svg>
  );
}

export default Message;
