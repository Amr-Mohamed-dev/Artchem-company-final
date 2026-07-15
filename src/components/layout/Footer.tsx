import { Link } from "wouter";
import { companyInfo } from "../../data/companyInfo";
import { navigation } from "../../data/navigation";
import { socialLinks } from "../../data/socialLinks";
import { productCategories } from "../../data/categories";
import artchemLogo from "../../assets/images/mainlogo.webp";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa6";

function SocialIconCompact({ social }: { social: typeof socialLinks[0] }) {
  const Icon =
  (SiIcons as any)[social.icon] ||
  (FaIcons as any)[social.icon];

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      title={social.name}
      className="group flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 border border-white/10 hover:border-white/25"
    >
      {Icon && <Icon size={14} className="text-white/70 group-hover:text-white transition-colors" />}
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground pt-14 pb-6 border-t-[3px] border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand Column */}
          <div className="space-y-2">
          <img
                src={artchemLogo}
                alt={companyInfo.name}
                className="h-[48px] md:h-[88px] w-auto object-contain block"
                style={{ imageRendering: "auto" }}
              />
            <p className="text-sidebar-accent-foreground leading-relaxed text-sm">
              {companyInfo.description}
            </p>
            {/* Social icons — compact row */}
            <div className="flex gap-2 pt-1">
              {socialLinks.map((social) => (
                <SocialIconCompact key={social.id} social={social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold text-white/90 mb-5 uppercase tracking-[0.22em] relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-6 h-[2px] bg-primary" />
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.route}>
                  <Link href={item.route}>
                    <span className="text-sidebar-accent-foreground hover:text-white transition-colors flex items-center gap-2 text-sm cursor-pointer group">
                      <ArrowRight
                        size={11}
                        className="text-primary/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                      />
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[10px] font-bold text-white/90 mb-5 uppercase tracking-[0.22em] relative inline-block">
              Products
              <span className="absolute -bottom-2 left-0 w-6 h-[2px] bg-primary" />
            </h3>
            <ul className="space-y-2">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/products/category/${cat.id}`}>
                    <span className="text-sidebar-accent-foreground hover:text-white transition-colors flex items-center gap-2 text-sm cursor-pointer group">
                      <ArrowRight
                        size={11}
                        className="text-primary/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                      />
                      {cat.name}
                    </span>
                  </Link>
                  <ul className="ml-4 mt-1 space-y-1">
                    {cat.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <Link href={`/products/category/${cat.id}/${sub.id}`}>
                          <span className="text-sidebar-accent-foreground/60 hover:text-white/80 transition-colors flex items-center gap-1.5 text-xs cursor-pointer">
                            <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                            {sub.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-bold text-white/90 mb-5 uppercase tracking-[0.22em] relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-6 h-[2px] bg-primary" />
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sidebar-accent-foreground text-sm">
                <MapPin className="text-primary shrink-0 mt-0.5" size={13} />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sidebar-accent-foreground text-sm">
                <Phone className="text-primary shrink-0" size={13} />
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sidebar-accent-foreground text-sm">
                <Mail className="text-primary shrink-0" size={13} />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sidebar-accent-foreground text-sm">
                <Clock className="text-primary shrink-0 mt-0.5" size={13} />
                <span className="leading-relaxed">{companyInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sidebar-accent-foreground text-xs tracking-wide text-center sm:text-left opacity-60">
            &copy; {currentYear} {companyInfo.fullName}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-sidebar-accent-foreground opacity-50">
            <a href="#" className="hover:opacity-100 hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 hover:text-white transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
