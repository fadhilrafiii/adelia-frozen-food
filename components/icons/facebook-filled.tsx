import { IconProps } from './utils';

const FacebookFilledIcon = ({ color = '#fff', size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 6.5C12.75 3.05 9.95 0.25 6.5 0.25C3.05 0.25 0.25 3.05 0.25 6.5C0.25 9.525 2.4 12.0437 5.25 12.625V8.375H4V6.5H5.25V4.9375C5.25 3.73125 6.23125 2.75 7.4375 2.75H9V4.625H7.75C7.40625 4.625 7.125 4.90625 7.125 5.25V6.5H9V8.375H7.125V12.7188C10.2812 12.4062 12.75 9.74375 12.75 6.5Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookFilledIcon;
