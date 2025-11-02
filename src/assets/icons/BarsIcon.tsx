interface BarsIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const BarsIcon = ({
  color = "var(--primary)",
  className,
  ...props
}: BarsIconProps) => (
  <svg
    width="62"
    height="44"
    viewBox="0 0 62 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M3 18.647V40.9999"
      stroke={color}
      strokeOpacity="0.54"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M20.6826 7.4707V41.0001"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M38.3655 14.1763V40.9998"
      stroke={color}
      strokeOpacity="0.54"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M57.4849 3V41"
      stroke={color}
      strokeOpacity="0.54"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export default BarsIcon;
