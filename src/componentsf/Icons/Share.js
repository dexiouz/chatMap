import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Share({color = '#9393AA', size = 24}) {
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
        d="M12.002 7.683V4.002c0-.89 1.078-1.337 1.708-.707l8 7a1 1 0 01-.006 1.42l-8 6.867c-.633.621-1.702.174-1.702-.713V15.24c-5.068.197-5.673.925-8.194 4.353-.636.865-2.001.257-1.785-.794 1.414-6.867 2.761-9.798 9.98-11.117zm2-1.267v2.12a1 1 0 01-.862.99c-5.332.74-5.95 1.565-7.903 5.793 2.798-2.09 3.357-2.097 7.765-2.097a1 1 0 011 1v1.26l5.58-4.486-5.58-4.58z"
        fill={color}
      />
    </Svg>
  );
}

export default Share;
