import { type ComponentProps } from 'react';

import Svg from '~/components/svg/Svg';

function CheckCircleIcon({ width = 24, height = 24, color = '#CDE7AC', ...rest }: ComponentProps<typeof Svg>) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.207 10.215L11.624 15.799C11.4359 15.9858 11.1816 16.0906 10.9165 16.0906C10.6514 16.0906 10.3971 15.9858 10.209 15.799L6.793 12.383C6.70016 12.2902 6.62651 12.1799 6.57626 12.0586C6.52601 11.9373 6.50015 11.8073 6.50015 11.676C6.50015 11.4108 6.60549 11.1565 6.793 10.969C6.98051 10.7815 7.23482 10.6762 7.5 10.6762C7.76518 10.6762 8.01949 10.7815 8.207 10.969L10.916 13.678L15.793 8.801C15.8858 8.70816 15.9961 8.63451 16.1174 8.58426C16.2387 8.53401 16.3687 8.50815 16.5 8.50815C16.6313 8.50815 16.7613 8.53401 16.8826 8.58426C17.0039 8.63451 17.1142 8.70816 17.207 8.801C17.2998 8.89384 17.3735 9.00407 17.4237 9.12537C17.474 9.24668 17.4998 9.3767 17.4998 9.508C17.4998 9.6393 17.474 9.76932 17.4237 9.89063C17.3735 10.0119 17.2998 10.1222 17.207 10.215ZM12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1Z"
        fill={color}
      />
    </Svg>
  );
}

export default CheckCircleIcon;
