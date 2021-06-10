import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CarePro({size = 24}) {
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
        d="M12 0c3 0 6.333.228 8.583 1.667a5.63 5.63 0 011.75 1.75C23.772 5.667 24 9 24 12s-.228 6.333-1.667 8.583c-.46.72-1.03 1.29-1.75 1.75C18.333 23.772 15 24 12 24s-6.333-.228-8.583-1.667a5.63 5.63 0 01-1.75-1.75C.228 18.333 0 15 0 12s.228-6.333 1.667-8.583a5.63 5.63 0 011.75-1.75C5.667.228 9 0 12 0z"
        fill="#1DA1F2"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10.681L7.31 7.02h9.38L20 10.681 12 19l-8-8.319z"
        fill="#FFE182"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.254 10.681L12 19l8-8.319h-4.746z"
        fill="#FFE182"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.31 7.02L4 10.681h4.746L7.31 7.02zM15.254 10.681H20L16.69 7.02l-1.436 3.661z"
        fill="#FFCD73"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.254 10.681L12 7.02l-3.254 3.661h6.508z"
        fill="#FFCD73"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.02H7.31l1.436 3.661L12 7.02z"
        fill="#FFAA64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.69 7.02H12l3.254 3.661L16.69 7.02z"
        fill="#FFE182"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.746 10.681L12 19l3.254-8.319H8.746z"
        fill="#FFAA64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10.681L12 19 8.746 10.68H4z"
        fill="#FF8C5A"
      />
    </Svg>
  );
}

export default CarePro;
