export default function Logo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 40V8L34 34V8"
        stroke="#E7E9E2"
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="38" y="18" width="5" height="17" fill="#7C8A55" />
      <circle cx="40.5" cy="10.5" r="4" fill="#7C8A55" />
    </svg>
  );
}
