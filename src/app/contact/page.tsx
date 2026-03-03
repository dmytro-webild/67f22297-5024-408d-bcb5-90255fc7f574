"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
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

      <div id="contact-main" data-section="contact-main">
        <ContactSplit
          tag="Get In Touch"
          title="Request Your Free Estimate"
          description="Fill out the form below or call us directly at (857) 247-8625. We'll respond within 24 hours with a no-obligation quote for your landscaping or snow removal needs. Victor Pineda Landscaping is committed to providing fair pricing and professional service to Newton and surrounding communities."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/couple-collects-leaves-cleans-park_1157-27418.jpg?_wi=5"
          imageAlt="Professional landscaping team"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Request Estimate"
          tagAnimation="slide-up"
        />
      </div>

      <div id="contact-info" data-section="contact-info">
        <FeatureCardEight
          title="How to Reach Us"
          description="Contact Victor Pineda Landscaping through any of these convenient methods. We're ready to discuss your landscaping needs and provide a free estimate."
          tag="Contact Info"
          features={[
            {
              id: 1,
              title: "Phone",              description: "Call us directly at (857) 247-8625. We answer calls Monday through Friday, 7am-6pm.",              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-gardener-pushing-modern-lawn-mower-while-walking-grass-view-handyman_7502-10570.jpg?_wi=6",              imageAlt: "Phone contact method"},
            {
              id: 2,
              title: "Email Request",              description: "Submit your contact information and service request through our online form. We'll respond within 24 hours.",              imageSrc: "http://img.b2bpic.net/free-photo/darkhaired-man-using-portable-powered-leaf-blower-blow-beveled-leaves-from-footpath-back-yard_7502-10567.jpg?_wi=5",              imageAlt: "Email contact method"},
            {
              id: 3,
              title: "Service Areas",              description: "We proudly serve Newton, Watertown, Waltham, Brookline, Brighton, and surrounding Greater Boston communities.",              imageSrc: "http://img.b2bpic.net/free-photo/kids-learnign-about-environment_23-2149176599.jpg?_wi=4",              imageAlt: "Service area map"},
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          tagAnimation="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="contact-footer" data-section="contact-footer">
        <FooterBase
          logoText="Victor Pineda Landscaping"
          copyrightText="© 2025 Victor Pineda Landscaping & Plowing Service. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}