import FacebookIcon from "@assets/icons/FacebookIcon";
import GithubIcon from "@assets/icons/GithubIcon";
import InstagramIcon from "@assets/icons/InstagramIcon";
import TwitterIcon from "@assets/icons/TwitterIcon";
import SocialLink from "./SocialLink";
import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";
import LogoIcon from "@/assets/logo.svg?react";
import EmailForm from "../common/EmailForm";

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
  {
    href: "#",
    Icon: TwitterIcon,
    hoverColor: "hover:bg-[#1DA1F2]",
    label: "Twitter",
  },
  {
    href: "#",
    Icon: FacebookIcon,
    hoverColor: "hover:bg-[#1877F2]",
    label: "Facebook",
  },
  {
    href: "#",
    Icon: InstagramIcon,
    hoverColor: "hover:bg-[#E4405F]",
    label: "Instagram",
  },
  {
    href: "#",
    Icon: GithubIcon,
    hoverColor: "hover:bg-[#333]",
    label: "Github",
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
  };

  return (
    <footer className="dark:bg-card2 border-border mt-12 w-full border-t bg-[#E0E0E0]">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4 py-12">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center gap-2">
                <LogoIcon className="shrink-0" />
                <span className="text-base font-bold whitespace-nowrap sm:text-lg">
                  FinBiz
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Upgrade your finances with our smart and new-generation
                business.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, Icon, hoverColor, label }, i) => (
                  <SocialLink
                    key={i}
                    href={href}
                    Icon={Icon}
                    label={label}
                    hoverColor={hoverColor}
                  />
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
            <div className="md:mx-12 lg:col-span-2">
              <h3 className="text-foreground mb-4 font-semibold">
                Subscribe to Newsletter
              </h3>
              <EmailForm
                onSubmit={handleEmailSubmit}
                buttonVariant="accent"
                buttonText="Join"
                placeholder="Enter email address"
                className="h-12 w-full max-w-sm overflow-hidden rounded-lg"
                buttonClass="rounded-l-none rounded-r-lg w-40 font-medium"
                inputClass="placeholder:text-muted-foreground/60"
              />
            </div>
          </div>

          <div className="text-muted-foreground border-t pt-8 text-center text-sm">
            <p>© Copyright {currentYear}, All Rights Reserved by FinBiz</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
