const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-foreground mb-4 font-semibold">{title}</h3>
    {children}
  </div>
);
export default FooterColumn;
