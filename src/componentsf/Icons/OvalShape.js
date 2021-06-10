import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import Theme from '../../styles/Theme';

function Oval({size = 24, style, bgColor = Theme.colors.text, children}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={[
        {
          shadowRadius: 4,
          shadowOpacity: 0.5,
          shadowColor: bgColor,
          shadowOffset: {width: 0, height: 4},
        },
        style,
      ]}
      xmlns="http://www.w3.org/2000/svg">
      {children}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0c3 0 6.333.228 8.583 1.667a5.63 5.63 0 011.75 1.75C23.772 5.667 24 9 24 12s-.228 6.333-1.667 8.583c-.46.72-1.03 1.29-1.75 1.75C18.333 23.772 15 24 12 24s-6.333-.228-8.583-1.667a5.63 5.63 0 01-1.75-1.75C.228 18.333 0 15 0 12s.228-6.333 1.667-8.583a5.63 5.63 0 011.75-1.75C5.667.228 9 0 12 0z"
        fill={bgColor}
      />
    </Svg>
  );
}

export default Oval;
