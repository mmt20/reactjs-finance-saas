const SocialLink = ({ href, Icon, hoverColor }: { href: string; Icon: React.ElementType; hoverColor: string }) => (
  <a
    href={href}
    className={`w-9 h-9 rounded-full bg-secondary transition-colors flex items-center justify-center hover:text-white ${hoverColor}`}
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default SocialLink;
