import { useState } from "react";
import { Link } from "wouter";
import { companyInfo } from "../../data/companyInfo";
import { navigation } from "../../data/navigation";
import { socialLinks } from "../../data/socialLinks";
import { services } from "../../data/services";
import aramchemLogo from "../../assets/images/mainlogo.png";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import * as SiIcons from "react-icons/si";

function SocialIcon({ social }: { social: typeof socialLinks[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = SiIcons[social.icon as keyof typeof SiIcons];

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      data-testid={`link-social-${social.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={social.name}
      className="flex flex-col items-center gap-1.5 group"
      style={{ textDecoration: "none" }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-250"
        style={{
          backgroundColor: hovered ? social.baseColor : "rgba(255,255,255,0.12)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? `0 6px 20px ${social.baseColor}50` : "none",
        }}
      >
        {Icon && <Icon size={17} className="text-white" />}
      </div>
      <span
        className="text-[9px] font-semibold tracking-wider uppercase"
        style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.45)" }}
      >
        {social.name}
      </span>
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground pt-16 pb-8 border-t-[3px] border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="space-y-2">
            {/* Transparent logo on dark navy footer */}
            <img
              src={aramchemLogo}
              alt={companyInfo.name}
              className="h-18 w-auto "
              
            />
            <p className="text-sidebar-accent-foreground leading-relaxed ">
              {companyInfo.description}
            </p>
            {/* Social icons — elegant, compact */}
            <div className="flex gap-3 pt-1 flex-wrap">
              {socialLinks.map((social) => (
                <SocialIcon key={social.id} social={social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-bold text-white/90 mb-5 uppercase tracking-[0.2em] relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.route}>
                  <Link href={item.route}>
                    <span
                      data-testid={`link-footer-nav-${item.label.toLowerCase()}`}
                      className="text-sidebar-accent-foreground hover:text-white transition-colors flex items-center gap-2 text-sm cursor-pointer group"
                    >
                      <ArrowRight
                        size={12}
                        className="text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200"
                      />
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold text-white/90 mb-5 uppercase tracking-[0.2em] relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`}>
                    <span
                      data-testid={`link-footer-service-${service.id}`}
                      className="text-sidebar-accent-foreground hover:text-white transition-colors flex items-center gap-2 text-sm cursor-pointer group"
                    >
                      <ArrowRight
                        size={12}
                        className="text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200"
                      />
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold text-white/90 mb-5 uppercase tracking-[0.2em] relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sidebar-accent-foreground text-sm">
                <MapPin className="text-primary shrink-0 mt-0.5" size={14} />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sidebar-accent-foreground text-sm">
                <Phone className="text-primary shrink-0" size={14} />
                <a href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                  data-testid="link-footer-phone">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sidebar-accent-foreground text-sm">
                <Mail className="text-primary shrink-0" size={14} />
                <a href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors"
                  data-testid="link-footer-email">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sidebar-accent-foreground text-sm">
                <Clock className="text-primary shrink-0 mt-0.5" size={14} />
                <span className="leading-relaxed">{companyInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sidebar-accent-foreground text-xs tracking-wide text-center md:text-left opacity-70">
            &copy; {currentYear} {companyInfo.fullName}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-sidebar-accent-foreground opacity-60">
            <a href="#" className="hover:opacity-100 hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 hover:text-white transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
