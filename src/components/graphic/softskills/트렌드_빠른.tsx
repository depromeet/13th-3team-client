/* eslint-disable unicorn/filename-case */
import { type ComponentProps } from 'react';

import Svg from '~/components/svg/Svg';

export const 트렌드_빠른 = ({ color = '#C9CFDF' }: ComponentProps<typeof Svg>) => {
  return (
    <Svg size={20} isUsingFill color={color}>
      <path d="M9.54238 1.34055C9.61085 1.13706 9.80158 1 10.0163 1H18.2788C18.6207 1 18.8617 1.33543 18.7527 1.65945L17.4068 5.65945C17.3384 5.86294 17.1476 6 16.9329 6H8.67039C8.32852 6 8.08747 5.66457 8.1965 5.34055L9.54238 1.34055Z" />
      <path d="M2.54238 5.34055C2.61084 5.13706 2.80158 5 3.01627 5H11.2788C11.6207 5 11.8617 5.33543 11.7527 5.65945L10.4068 9.65945C10.3384 9.86294 10.1476 10 9.93295 10H1.67039C1.32852 10 1.08747 9.66457 1.1965 9.34055L2.54238 5.34055Z" />
      <path d="M9.54238 10.3405C9.61085 10.1371 9.80158 10 10.0163 10H18.2788C18.6207 10 18.8617 10.3354 18.7527 10.6595L17.4068 14.6595C17.3384 14.8629 17.1476 15 16.9329 15H8.67039C8.32852 15 8.08747 14.6646 8.1965 14.3405L9.54238 10.3405Z" />
      <path d="M2.54238 14.3405C2.61084 14.1371 2.80158 14 3.01627 14H11.2788C11.6207 14 11.8617 14.3354 11.7527 14.6595L10.4068 18.6595C10.3384 18.8629 10.1476 19 9.93295 19H1.67039C1.32852 19 1.08747 18.6646 1.1965 18.3405L2.54238 14.3405Z" />
    </Svg>
  );
};
