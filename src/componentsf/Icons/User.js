import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function User({color = '#9393AA', size = 24}) {
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
        d="M12 2a5.5 5.5 0 015.5 5.5v2.7a5.5 5.5 0 11-11 0V7.5A5.5 5.5 0 0112 2zm0 2a3.5 3.5 0 00-3.5 3.5v2.7a3.5 3.5 0 107 0V7.5A3.5 3.5 0 0012 4zm4.532 10.235a1 1 0 00.421 1.35c1.893.994 2.883 2.43 3.028 4.415H4.041c.205-2.362 1.177-3.756 2.926-4.354a1 1 0 10-.647-1.892C3.445 14.737 2 17.235 2 21v1h19.938l.048-.948c.17-3.262-1.228-5.729-4.104-7.237a1 1 0 00-1.35.42z"
        fill={color}
      />
    </Svg>
  );
}

export default User;
