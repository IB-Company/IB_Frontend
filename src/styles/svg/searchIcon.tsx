import { SvgProperties } from "../../types/svg/SvgProperties.type";

const SearchIcon = ({ width = 1.8, height = 1.8, deg = 0 }: SvgProperties) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      transform={`rotate(${deg})`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.46784 12.9619C10.607 13.0365 13.2125 10.5392 13.2874 7.38414C13.3623 4.22908 10.8782 1.61099 7.73909 1.53646C4.59995 1.46194 1.99445 3.9592 1.91955 7.11426C1.84465 10.2693 4.3287 12.8874 7.46784 12.9619Z"
        stroke="#FF202D"
        strokeWidth="1.94929"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6572 16.19L12.4282 12.1355"
        stroke="#FF202D"
        strokeWidth="1.94929"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
