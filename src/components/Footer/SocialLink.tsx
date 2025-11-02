interface ISocialLinkProps {
  href: string;
  Icon: React.ElementType;
  hoverColor: string;
  label: string;
}

const SocialLink = ({ href, Icon, hoverColor, label }: ISocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    className={`bg-secondary flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-white ${hoverColor}`}
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default SocialLink;
