type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="136"
      height="194"
      viewBox="0 0 136 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M136 106.851L136 168.372L62.6939 193.35L19.4307 168.372L90.6695 142.469V80.9502L136 106.851Z"
        fill="url(#paint0_linear_3276_18)"
      />
      <path
        d="M84.2008 77.709L84.193 135.989L51.8325 116.561L51.8281 58.2817L84.2008 77.709Z"
        fill="url(#paint1_linear_3276_18)"
      />
      <path
        d="M0.00948334 88.3489L-0.000144958 26.0138L74.474 -0.000167847L117.737 24.9775L45.3303 51.8045L45.34 113.326L0.00948334 88.3489Z"
        fill="url(#paint2_linear_3276_18)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3276_18"
          x1="77.2416"
          y1="63.8345"
          x2="77.2416"
          y2="213.699"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.8" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3276_18"
          x1="31.2832"
          y1="32.891"
          x2="31.2832"
          y2="181.241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.8" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3276_18"
          x1="57.6813"
          y1="134.242"
          x2="57.6813"
          y2="-15.6222"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.8" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  nextjs: (props: IconProps) => (
    <svg viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="64"></circle>
      <path
        fill="url(#a)"
        d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
      ></path>
      <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
      <defs>
        <linearGradient
          id="a"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
};
