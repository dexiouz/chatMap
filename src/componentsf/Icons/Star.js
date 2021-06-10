import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Star({color = '#FE9870', size = 24}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.696 6.345c.276-.28.373-.692.254-1.075a1.01 1.01 0 00-.81-.713l-3.39-.514a.445.445 0 01-.334-.253L7.901.584A.995.995 0 007 0 .995.995 0 006.1.584L4.584 3.79a.445.445 0 01-.334.253l-3.39.514a1.01 1.01 0 00-.81.714c-.119.382-.022.794.254 1.074L2.756 8.84c.105.107.153.26.128.41l-.578 3.523c-.052.31.026.612.219.85.298.37.82.484 1.237.255l3.032-1.664a.437.437 0 01.412 0l3.032 1.664a.96.96 0 00.467.122.99.99 0 00.77-.377c.193-.238.27-.54.22-.85l-.58-3.523a.476.476 0 01.128-.41l2.453-2.495z"
        fill={color}
      />
    </Svg>
  );
}

export default Star;
