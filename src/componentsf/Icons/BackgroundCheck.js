import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackgroundCheck({size = 24}) {
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
        fill="#00D65B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.17 17.623L12 20.4l-3.17-2.778a6.393 6.393 0 01-2.179-4.808V6.637L12 5.02l5.349 1.616v6.178a6.393 6.393 0 01-2.18 4.808z"
        fill="#FFCE00"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.021v15.38l3.17-2.778a6.393 6.393 0 002.179-4.808V6.637L12 5.02z"
        fill="#FFB600"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.349 7.005L6.65 12.312v.503c0 .797.149 1.577.43 2.304l10.268-5.095v-3.02z"
        fill="#FA0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.349 7.005L12 9.658v3.02l5.349-2.654v-3.02z"
        fill="#FF9500"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.83 17.623l.5.437 7.877-3.908c.094-.436.142-.884.142-1.337v-1.753l-9.87 4.897c.35.62.804 1.184 1.351 1.664z"
        fill="#FA0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.716v3.02l5.207-2.584c.094-.436.142-.884.142-1.337v-1.753L12 13.716z"
        fill="#FF9500"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.433 18.076L12 21.203l3.567-3.127a6.996 6.996 0 002.385-5.26V6.188L12 4.392 6.048 6.189v6.626c0 2.015.87 3.933 2.385 5.261zm-1.18-5.26V7.083L12 5.651l4.746 1.433v5.731a5.79 5.79 0 01-1.973 4.355L12 19.6l-2.773-2.43a5.79 5.79 0 01-1.973-4.355z"
        fill="#FFF4C5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.392V5.65l4.746 1.433v5.731a5.79 5.79 0 01-1.973 4.355L12 19.6v1.602l3.567-3.126a6.996 6.996 0 002.385-5.26V6.188L12 4.392z"
        fill="#FFE89C"
      />
    </Svg>
  );
}

export default BackgroundCheck;
