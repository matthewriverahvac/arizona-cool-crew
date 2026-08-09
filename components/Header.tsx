"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { FocusEvent, useEffect, useState } from "react";
import { navigation, siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { BrandMark } from "./BrandMark";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
    setDesktopServicesOpen(false);
  };

  const closeDesktopServicesOnBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setDesktopServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            if (item.href === "/services") {
              return (
                <div className="nav-dropdown" key={item.href} onMouseEnter={() => setDesktopServicesOpen(true)} onMouseLeave={() => setDesktopServicesOpen(false)} onFocusCapture={() => setDesktopServicesOpen(true)} onBlurCapture={closeDesktopServicesOnBlur} onKeyDown={(event) => { if (event.key === "Escape") setDesktopServicesOpen(false); }}>
                  <Link className={active ? "active" : ""} href={item.href} onClick={() => setDesktopServicesOpen(false)} aria-expanded={desktopServicesOpen}>
                    Services <ChevronDown aria-hidden="true" size={15} />
                  </Link>
                  <div className={`dropdown-panel${desktopServicesOpen ? " open" : ""}`}>
                    <Link href="/services" onClick={() => setDesktopServicesOpen(false)}>All Services</Link>
                    {services.map((service) => (
                      <Link href={`/services/${service.slug}`} key={service.slug} onClick={() => setDesktopServicesOpen(false)}>{service.shortTitle}</Link>
                    ))}
                  </div>
                </div>
              );
            }
            return <Link className={active ? "active" : ""} href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>;
          })}
        </nav>
        <div className="header-actions">
          <Link className="button button-gold header-schedule" href="/contact">Schedule Service</Link>
          <a className="header-phone" href={siteConfig.phoneHref}><Phone aria-hidden="true" size={19} />{siteConfig.phone}</a>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile navigation">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <button type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>
          Services <ChevronDown aria-hidden="true" size={17} />
        </button>
        {servicesOpen && (
          <div className="mobile-services">
            <Link href="/services" onClick={closeMenu}>All Services</Link>
            {services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug} onClick={closeMenu}>{service.shortTitle}</Link>)}
          </div>
        )}
        {navigation.slice(2).map((item) => <Link href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>)}
        <div className="mobile-nav-actions">
          <Link className="button button-gold" href="/contact" onClick={closeMenu}>Schedule Service</Link>
          <a className="button button-outline" href={siteConfig.phoneHref}><Phone aria-hidden="true" size={18} /> Call Now</a>
        </div>
      </nav>
    </header>
  );
}
