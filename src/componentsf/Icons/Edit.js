import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Edit({color = '#9393AA', size = 24}) {
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
        d="M11.015 4a1 1 0 01.117 1.993L11.015 6H4v14l14-.003V13a1 1 0 011.993-.117L20 13v6.996a2 2 0 01-1.851 1.998l-.15.005H4a1.999 1.999 0 01-1.996-1.851L2 19.999V6.001c0-1.056.817-1.92 1.855-1.996L4.005 4h7.01zm8.948-1.406l1.442 1.442a2.034 2.034 0 01-.003 2.878L11.329 16.988l-3.788.95c-1.09.274-1.752-.392-1.48-1.48l.95-3.788L17.085 2.597a2.038 2.038 0 012.879-.003zM9.615 13l-.655.656L8.5 15.5l1.836-.45.664-.665L9.615 13zm6.91-7L11 11.527 12.474 13 18 7.476 16.526 6h-.001z"
        fill={color}
      />
    </Svg>
  );
}

export default Edit;
