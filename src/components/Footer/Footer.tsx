import FacebookIcon from "@assets/icons/FacebookIcon";
import GithubIcon from "@assets/icons/GithubIcon";
import InstagramIcon from "@assets/icons/InstagramIcon";
import TwitterIcon from "@assets/icons/TwitterIcon";
import SocialLink from "./SocialLink";
import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";
import LogoIcon from "@/assets/logo.svg?react";
import EmailForm from "../Hero/EmailForm";

const companyLinks = [
  { href: "#", label: "About Us" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Affiliate" },
];

const helpLinks = [
  { href: "#", label: "Support Center" },
  { href: "#", label: "Live Chat Support" },
  { href: "#", label: "FAQ" },
];

const socialLinks = [
  { href: "#", Icon: TwitterIcon, hoverColor: "hover:bg-[#1DA1F2]" },
  { href: "#", Icon: FacebookIcon, hoverColor: "hover:bg-[#1877F2]" },
  { href: "#", Icon: InstagramIcon, hoverColor: "hover:bg-[#E4405F]" },
  { href: "#", Icon: GithubIcon, hoverColor: "hover:bg-[#333]" },
];
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const Footer = () => {
  return (
    <footer className="border-t dark:bg-card2 bg-[#E0E0E0] border-border mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <LogoIcon className="shrink-0" />
              <span className="font-bold text-base sm:text-lg whitespace-nowrap">FinBiz</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Upgrade your finances with our smart and new-generation business.
            </p>
            <div className="flex gap-3 ">
              {socialLinks.map(({ href, Icon, hoverColor }, i) => (
                <SocialLink key={i} href={href} Icon={Icon} hoverColor={hoverColor} />
              ))}
            </div>
          </div>

          {/* Company */}
          <FooterColumn title="Company">
            <ul className="space-y-3">
              {companyLinks.map(({ href, label }) => (
                <FooterLink key={label} href={href} label={label} />
              ))}
            </ul>
          </FooterColumn>

          {/* Help */}
          <FooterColumn title="Help">
            <ul className="space-y-3">
              {helpLinks.map(({ href, label }) => (
                <FooterLink key={label} href={href} label={label} />
              ))}
            </ul>
          </FooterColumn>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-foreground">Subscribe to Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Get the latest updates and news from FinBiz</p>

            <EmailForm onSubmit={() => {}} />
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© Copyright {currentYear}, All Rights Reserved by FinBiz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
