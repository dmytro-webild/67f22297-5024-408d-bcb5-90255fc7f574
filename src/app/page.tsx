"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Victor Pineda Landscaping"
          description="Professional lawn care, property maintenance, and snow removal from a hardworking local team serving Newton and nearby communities."
          buttons={[
            { text: "Call Now", href: "tel:(857)247-8625" },
            { text: "Get a Free Estimate", href: "/contact" },
          ]}
          background={{ variant: "sparkles-gradient" }}
          imageSrc="http://img.b2bpic.net/free-psd/professional-lawn-gardening-services-advertisement_505751-8151.jpg?_wi=1"
          imageAlt="Professional lawn care in Newton, MA"
          mediaAnimation="slide-up"
          frameStyle="card"
          buttonAnimation="opacity"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",              content:
                "Victor Pineda Landscaping & Plowing Service is a trusted landscaping company serving homeowners in Newton and surrounding communities. Victor and his team are known for being dependable, punctual, fairly priced, and extremely hardworking."},
          ]}
          buttons={[{ text: "Learn More", href: "/about" }]}
          useInvertedBackground={false}
          buttonAnimation="opacity"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardEight
          title="Our Services"
          description="Complete landscaping and property maintenance solutions for Newton area homeowners"
          tag="What We Offer"
          features={[
            {
              id: 1,
              title: "Lawn Mowing & Lawn Care",              description: "Weekly lawn mowing and ongoing maintenance to keep lawns healthy and clean.",              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-gardener-pushing-modern-lawn-mower-while-walking-grass-view-handyman_7502-10570.jpg?_wi=1",              imageAlt: "Professional lawn mowing service"},
            {
              id: 2,
              title: "Yard Maintenance",              description: "Seeding, trimming, property cleanup, and general landscaping care.",              imageSrc: "http://img.b2bpic.net/free-photo/darkhaired-man-using-portable-powered-leaf-blower-blow-beveled-leaves-from-footpath-back-yard_7502-10567.jpg?_wi=1",              imageAlt: "Yard maintenance and landscaping"},
            {
              id: 3,
              title: "Spring & Fall Cleanup",              description: "Seasonal yard cleanup including leaves, debris removal, and preparation for the next season.",              imageSrc: "http://img.b2bpic.net/free-photo/kids-learnign-about-environment_23-2149176599.jpg?_wi=1",              imageAlt: "Spring and fall seasonal cleanup"},
            {
              id: 4,
              title: "Gutter Cleaning",              description: "Professional gutter cleaning to protect homes from water damage.",              imageSrc: "http://img.b2bpic.net/free-photo/auto-mechanic-inflating-tire-with-air-compressor-street_651396-3561.jpg",              imageAlt: "Professional gutter cleaning service"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Victor is fairly priced, hardworking, and dependable. He always leaves my house clean. I can't recommend him enough. His team has been maintaining my lawn for years with consistent excellence."
          rating={5}
          author="Austin F."
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg", alt: "Austin F." },
            { src: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg", alt: "Steven W." },
            { src: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg", alt: "Michael M." },
            { src: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg", alt: "Customer 4" },
            { src: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg", alt: "Customer 5" },
            { src: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg", alt: "Customer 6" },
          ]}
          useInvertedBackground={false}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Why Choose Victor Pineda"
          description="Proven track record of reliability and customer satisfaction in Newton and surrounding communities"
          tag="Our Track Record"
          metrics={[
            {
              id: "1",              value: "5.0★",              title: "Google Rating",              description: "Trusted by 7+ verified reviews from satisfied customers",              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-gardener-pushing-modern-lawn-mower-while-walking-grass-view-handyman_7502-10570.jpg?_wi=2",              imageAlt: "Customer satisfaction metric"},
            {
              id: "2",              value: "5+ Years",              title: "Long-Term Clients",              description: "Many customers have worked with Victor for over five years consistently",              imageSrc: "http://img.b2bpic.net/free-photo/darkhaired-man-using-portable-powered-leaf-blower-blow-beveled-leaves-from-footpath-back-yard_7502-10567.jpg?_wi=2",              imageAlt: "Long-term customer relationships"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          tagAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Request Your Free Estimate"
          description="Fill out the form below or call us directly. We'll get back to you within 24 hours with a no-obligation quote for your landscaping or snow removal needs."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/couple-collects-leaves-cleans-park_1157-27418.jpg?_wi=1"
          imageAlt="Professional landscaping team"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Request Estimate"
          tagAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Victor Pineda Landscaping"
          copyrightText="© 2025 Victor Pineda Landscaping & Plowing Service. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}