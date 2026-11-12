
import React from "react";
import LegalPage from "../components/LegalPage";
import Footer from "../components/Footer";

const Terms = () => {
  const sections = [
    {
      heading: "GENERAL INFORMATION",
      paragraphs: [
        "FEWTURE is a streetwear clothing brand based in Lagos, Nigeria. These terms govern your access to and use of our website and services.",
        "By using our website, you agree to comply with these terms."
      ]
    },
    {
      heading: "PRODUCTS & AVAILABILITY",
      paragraphs: [
        "We aim to ensure that product descriptions, images and details are accurate. However, slight variations in colour, appearance or sizing may occur.",
        "Product availability may change without prior notice. FEWTURE reserves the right to update, modify or discontinue products at any time."
      ]
    },
    {
      heading: "ORDERS & PAYMENTS",
      paragraphs: [
        "Orders are subject to product availability and confirmation by FEWTURE.",
        "Customers are responsible for providing accurate contact and order information. Applicable prices and payment instructions will be communicated through our official sales channels.",
        "An order is considered confirmed only after FEWTURE has acknowledged it."
      ]
    },
    {
      heading: "INTELLECTUAL PROPERTY",
      paragraphs: [
        "All content on this website, including the FEWTURE name, logos, images, graphics, designs and written material, belongs to FEWTURE unless otherwise stated.",
        "You may not reproduce, distribute or use our content for commercial purposes without prior written permission."
      ]
    },
    {
      heading: "WEBSITE USE",
      paragraphs: [
        "You agree not to misuse our website, attempt unauthorized access, interfere with its operation or use our platform for unlawful activities.",
        "We reserve the right to restrict access to our website where misuse or a violation of these terms occurs."
      ]
    },
    {
      heading: "LIMITATION OF LIABILITY",
      paragraphs: [
        "To the extent permitted by applicable law, FEWTURE will not be liable for indirect or consequential losses arising from the use of our website or products."
      ]
    },
    {
      heading: "CHANGES TO THESE TERMS",
      paragraphs: [
        "FEWTURE may update these terms when necessary. Changes will be published on this page. Continued use of our website after changes are published means you accept the updated terms."
      ]
    },
    {
      heading: "CONTACT US",
      paragraphs: [
        "If you have questions about these terms, contact us through our official social media platforms or contact page."
      ],
      link: {
        label: "CONTACT FEWTURE",
        to: "/contact"
      }
    }
  ];

  return (
    <LegalPage
      title="TERMS OF SERVICE"
      intro="Welcome to FEWTURE. By accessing our website or purchasing from us, you agree to the terms outlined below. Please read them carefully."
      sections={sections}
    />
  );
};

export default Terms;
