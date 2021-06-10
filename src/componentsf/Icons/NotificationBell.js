import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function NotificationBell({size = 24, color = '#F74300'}) {
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
        d="M12 22c1.042 0 1.895-.9 1.895-2h-3.79c0 1.1.853 2 1.895 2zm7.019-6v-5.5c0-3.1-2.36-5.6-5.43-6.3v-.7c0-.8-.742-1.5-1.589-1.5s-1.588.7-1.588 1.5v.7c-3.07.7-5.42 3.2-5.42 6.3V16L3 18v1h18v-1l-1.981-2zm-2.013 1H6.976v-6.5C6.975 8 9.105 6 12 6c2.895 0 5.006 2 5.006 4.5V17z"
        fill={color}
      />
    </Svg>
  );
}

export default NotificationBell;
