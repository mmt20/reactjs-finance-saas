const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a href={href} className="text-sm text-muted-foreground hover:text-balance transition-colors">
      {label}
    </a>
  </li>
);
export default FooterLink;
