const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="font-semibold mb-4 text-foreground">{title}</h3>
    {children}
  </div>
);
export default FooterColumn;
