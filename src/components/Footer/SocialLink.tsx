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
    className={`w-9 h-9 rounded-full bg-secondary transition-colors flex items-center justify-center hover:text-white ${hoverColor}`}
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default SocialLink;
