import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Heart({color = '#9393AA', size = 24}) {
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
        d="M19.987 9.171c.009-.112.013-.222.013-.354C19.986 6.696 18.314 5 16.276 5a3.668 3.668 0 00-2.768 1.273L12 8.002l-1.507-1.73A3.668 3.668 0 007.723 5C5.687 5 4.015 6.697 4 8.81c0 .059.008.3.014.373.19 2.527 2.236 5.144 7.986 10.17 5.75-5.026 7.796-7.643 7.987-10.182zM12 4.96l1.188-1.036c.9-.59 1.965-.923 3.088-.923C19.423 3 21.98 5.593 22 8.803c0 .199-.006.363-.02.53-.275 3.662-3.409 6.99-9.342 12.116L12 22l-.637-.55C5.428 16.321 2.295 12.994 2.02 9.332 2.009 9.196 2 8.898 2 8.81 2.022 5.593 4.577 3 7.724 3c1.123 0 2.188.334 3.088.923L12 4.958z"
        fill={color}
      />
    </Svg>
  );
}

export const HeartFill = ({color = '#9393AA', size = 24}) => {
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
        d="M7.724 3c1.671 0 3.212.738 4.276 1.958A5.668 5.668 0 0116.276 3C19.423 3 21.98 5.593 22 8.803c0 .199-.006.363-.02.53-.275 3.662-3.409 6.99-9.342 12.116L12 22l-.637-.55C5.428 16.321 2.295 12.994 2.02 9.332 2.009 9.196 2 8.898 2 8.81 2.022 5.593 4.577 3 7.724 3z"
        fill={color}
      />
    </Svg>
  );
};

export default Heart;
