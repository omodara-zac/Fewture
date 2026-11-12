
import React from "react";
import LegalPage from "../components/LegalPage";

const Privacy = () => {
  const sections = [
    {
      heading: "INFORMATION WE COLLECT",
      paragraphs: [
        "When you interact with FEWTURE, we may collect information you provide, such as your name, phone number, email address, delivery address and order details.",
        "We may also collect basic website usage information through cookies or similar technologies, depending on the tools enabled on our website."
      ]
    },
    {
      heading: "HOW WE USE YOUR INFORMATION",
      paragraphs: [
        "We use customer information to process orders, arrange deliveries, respond to enquiries and provide customer support.",
        "We may also use it to communicate important updates about orders, products and services."
      ]
    },
    {
      heading: "SHARING YOUR INFORMATION",
      paragraphs: [
        "We do not sell your personal information.",
        "Where necessary, we may share relevant information with delivery companies, payment providers or service providers involved in fulfilling your order or operating our website."
      ]
    },
    {
      heading: "PAYMENT INFORMATION",
      paragraphs: [
        "Payment information is handled through the payment methods or providers used for your transaction.",
        "We do not intend to store sensitive payment credentials such as card security codes."
      ]
    },
    {
      heading: "DATA SECURITY",
      paragraphs: [
        "We take reasonable steps to protect customer information against unauthorized access, loss, misuse or disclosure.",
        "However, no method of transmitting or storing information online can be guaranteed to be completely secure."
      ]
    },
    {
      heading: "DATA RETENTION",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including order records, customer support and applicable legal obligations."
      ]
    },
    {
      heading: "YOUR PRIVACY RIGHTS",
      paragraphs: [
        "Depending on applicable law, you may have rights to request access to, correction of or deletion of your personal information, or to object to certain uses of it.",
        "You can contact us to make a privacy-related request."
      ]
    },
    {
      heading: "COOKIES",
      paragraphs: [
        "Our website may use cookies or similar technologies to support functionality and understand website usage.",
        "You can manage cookies through your browser settings. Disabling certain cookies may affect how parts of the website work."
      ]
    },
    {
      heading: "CHANGES TO THIS POLICY",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated revision date."
      ]
    },
    {
      heading: "CONTACT US",
      paragraphs: [
        "If you have questions or requests regarding your personal information, please contact us through our official channels."
      ],
      link: {
        label: "CONTACT FEWTURE",
        to: "/contact"
      }
    }
  ];

  return (
    <LegalPage
      title="PRIVACY POLICY"
      intro="Your privacy matters to FEWTURE. This policy explains what information we may collect, how we use it and the steps we take to protect it."
      sections={sections}
    />
  );
};

export default Privacy;
