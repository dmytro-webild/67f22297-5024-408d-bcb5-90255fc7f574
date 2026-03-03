"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ServiceAreasPage() {
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

      <div id="service-areas-main" data-section="service-areas-main">
        <FeatureCardEight
          title="Service Areas"
          description="Victor Pineda Landscaping serves Newton and the Greater Boston area. We provide comprehensive lawn care, property maintenance, and snow removal services throughout these communities."
          tag="Where We Serve"
          features={[
            {
              id: 1,
              title: "Newton, MA",              description: "Our primary service area. We provide comprehensive landscaping, lawn care, seasonal cleanup, and winter snow removal throughout Newton.",              imageSrc: "http://img.b2bpic.net/free-psd/professional-lawn-gardening-services-advertisement_505751-8151.jpg",              imageAlt: "Newton Massachusetts service area"},
            {
              id: 2,
              title: "Watertown",              description: "Professional lawn mowing, yard maintenance, and property cleanup services for Watertown residential customers.",              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-gardener-pushing-modern-lawn-mower-while-walking-grass-view-handyman_7502-10570.jpg",              imageAlt: "Watertown landscaping services"},
            {
              id: 3,
              title: "Waltham",              description: "Seasonal cleanup, weekly lawn care, and general property maintenance for Waltham residents seeking reliable landscaping.",              imageSrc: "http://img.b2bpic.net/free-photo/kids-learnign-about-environment_23-2149176599.jpg",              imageAlt: "Waltham yard care services"},
            {
              id: 4,
              title: "Brookline & Brighton",              description: "Full range of landscaping services including lawn mowing, yard maintenance, spring/fall cleanup, and professional snow removal.",              imageSrc: "http://img.b2bpic.net/free-photo/couple-collects-leaves-cleans-park_1157-27418.jpg",              imageAlt: "Brookline and Brighton service areas"},
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          tagAnimation="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="service-areas-cta" data-section="service-areas-cta">
        <ContactSplit
          tag="In Our Service Area?"
          title="Contact Us Today"
          description="If you're in Newton, Watertown, Waltham, Brookline, Brighton, or a nearby community, contact Victor Pineda Landscaping for professional lawn care and property maintenance services. We're ready to serve you!"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/couple-collects-leaves-cleans-park_1157-27418.jpg"
          imageAlt="Professional landscaping team"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get a Quote"
          tagAnimation="slide-up"
        />
      </div>

      <div id="service-areas-footer" data-section="service-areas-footer">
        <FooterBase
          logoText="Victor Pineda Landscaping"
          copyrightText="© 2025 Victor Pineda Landscaping & Plowing Service. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}