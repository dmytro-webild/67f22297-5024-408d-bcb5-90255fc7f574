"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "About", id: "/about" },
    { name: "Service Areas", id: "/service-areas" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Company",      items: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Service Areas", href: "/service-areas" },
      ],
    },
    {
      title: "Contact",      items: [
        { label: "Call: (857) 247-8625", href: "tel:(857)247-8625" },
        { label: "28 Middle St, Newton, MA 02458", href: "#" },
        { label: "Request Estimate", href: "/contact" },
      ],
    },
    {
      title: "Legal",      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="largeSmallSizeLargeTitles"
      background="none"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Victor Pineda"
          navItems={navItems}
          button={{ text: "Call Now", href: "tel:(857)247-8625" }}
        />
      </div>

      <div id="about-main" data-section="about-main">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",              content:
                "Victor Pineda Landscaping has been serving Newton and the surrounding Boston area communities with professional, dependable lawn care and property maintenance services. Our mission is to deliver exceptional landscaping results with integrity, hard work, and fair pricing. Victor leads a dedicated team of professionals committed to customer satisfaction and attention to detail."},
          ]}
          buttons={[{ text: "View Our Services", href: "/services" }]}
          useInvertedBackground={false}
          buttonAnimation="opacity"
        />
      </div>

      <div id="about-stats" data-section="about-stats">
        <MetricCardEleven
          title="Our Commitment to Excellence"
          description="Years of experience and countless satisfied customers speak to our dedication to quality landscaping and property maintenance services"
          tag="About Us"
          metrics={[
            {
              id: "1",              value: "5.0★",              title: "Google Rating",              description: "Consistently rated 5 stars by our satisfied Newton area customers",              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-gardener-pushing-modern-lawn-mower-while-walking-grass-view-handyman_7502-10570.jpg",              imageAlt: "Customer satisfaction"},
            {
              id: "2",              value: "100+",              title: "Happy Clients",              description: "Over 100 residential customers trust us with their lawn care and maintenance",              imageSrc: "http://img.b2bpic.net/free-photo/darkhaired-man-using-portable-powered-leaf-blower-blow-beveled-leaves-from-footpath-back-yard_7502-10567.jpg",              imageAlt: "Customer community"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          tagAnimation="slide-up"
        />
      </div>

      <div id="about-footer" data-section="about-footer">
        <FooterBase
          logoText="Victor Pineda Landscaping"
          copyrightText="© 2025 Victor Pineda Landscaping & Plowing Service. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}