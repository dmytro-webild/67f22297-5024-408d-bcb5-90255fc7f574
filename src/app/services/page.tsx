"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ServicesPage() {
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

      <div id="services-detail" data-section="services-detail">
        <FeatureCardEight
          title="Our Complete Service Offerings"
          description="Victor Pineda Landscaping provides comprehensive lawn care and property maintenance services tailored to your Newton area home. From routine maintenance to seasonal cleanup and snow removal, we handle it all with professionalism and attention to detail."
          tag="Services"
          features={[
            {
              id: 1,
              title: "Lawn Mowing & Lawn Care",              description: "Weekly lawn mowing, grass seeding, fertilization, and ongoing maintenance to keep your lawn healthy, lush, and beautiful throughout the growing season.",              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-gardener-pushing-modern-lawn-mower-while-walking-grass-view-handyman_7502-10570.jpg",              imageAlt: "Professional lawn mowing service"},
            {
              id: 2,
              title: "Yard Maintenance & Landscaping",              description: "Trimming, edging, mulch installation, landscape design consultation, and general property upkeep to enhance your outdoor space.",              imageSrc: "http://img.b2bpic.net/free-photo/darkhaired-man-using-portable-powered-leaf-blower-blow-beveled-leaves-from-footpath-back-yard_7502-10567.jpg",              imageAlt: "Yard maintenance and landscaping"},
            {
              id: 3,
              title: "Spring & Fall Cleanup",              description: "Comprehensive seasonal cleanup including leaf removal, debris collection, yard preparation, and spring mulching. Perfect for getting your property ready for each new season.",              imageSrc: "http://img.b2bpic.net/free-photo/kids-learnign-about-environment_23-2149176599.jpg",              imageAlt: "Spring and fall seasonal cleanup"},
            {
              id: 4,
              title: "Gutter Cleaning & Snow Removal",              description: "Professional gutter cleaning to prevent water damage and damage to your home's foundation. Winter snow plowing and removal to keep driveways and walkways safe.",              imageSrc: "http://img.b2bpic.net/free-photo/big-special-tractor-is-removing-snow-from-forestal-road_613910-13787.jpg",              imageAlt: "Snow plowing and gutter services"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="services-cta" data-section="services-cta">
        <ContactSplit
          tag="Ready to Get Started?"
          title="Schedule Your Service Today"
          description="Contact Victor Pineda Landscaping to discuss your specific needs. Whether you need one-time cleanup or ongoing maintenance, we'll provide a fair quote and professional service you can trust."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/couple-collects-leaves-cleans-park_1157-27418.jpg"
          imageAlt="Professional landscaping team"
          mediaAnimation="slide-up"
          mediaPosition="left"
          inputPlaceholder="Enter your email"
          buttonText="Get Free Quote"
          tagAnimation="slide-up"
        />
      </div>

      <div id="services-contact" data-section="services-contact">
        <FooterBase
          logoText="Victor Pineda Landscaping"
          copyrightText="© 2025 Victor Pineda Landscaping & Plowing Service. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}