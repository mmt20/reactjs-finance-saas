const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a
      href={href}
      className="text-muted-foreground text-sm transition-colors hover:text-balance"
    >
      {label}
    </a>
  </li>
);
export default FooterLink;
