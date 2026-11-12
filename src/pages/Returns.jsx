
import React from "react";
import LegalPage from "../components/LegalPage";

const Returns = () => {
  const sections = [
    {
      heading: "RETURN ELIGIBILITY",
      paragraphs: [
        "If you receive an incorrect, damaged or defective item, contact FEWTURE as soon as possible so we can review your request.",
        "Items must meet the conditions set out in our return policy before a return or exchange can be approved."
      ]
    },
    {
      heading: "CONDITIONS FOR RETURNS",
      paragraphs: [
        "Returned items should be unused, unworn, unwashed and in their original condition, with original tags and packaging where applicable.",
        "Items showing signs of wear, damage caused after delivery or alterations may not qualify for a return."
      ]
    },
    {
      heading: "HOW TO REQUEST A RETURN",
      paragraphs: [
        "Contact us through our official channels with your order details and a clear explanation of the issue.",
        "Where necessary, we may request photographs or additional information to assess your request.",
        "Please wait for our confirmation and instructions before sending an item back."
      ]
    },
    {
      heading: "EXCHANGES",
      paragraphs: [
        "Exchange requests are subject to product availability and approval.",
        "If your preferred replacement is unavailable, our team will communicate the available alternatives."
      ]
    },
    {
      heading: "REFUNDS",
      paragraphs: [
        "Where a refund is approved, the refund method and expected processing timeframe will be communicated to the customer.",
        "The time it takes for funds to reflect may depend on the payment provider or financial institution."
      ]
    },
    {
      heading: "NON-RETURNABLE ITEMS",
      paragraphs: [
        "Certain items may be excluded from returns or exchanges where permitted by applicable law. Any such exclusions will be communicated before purchase."
      ]
    },
    {
      heading: "CONTACT US",
      paragraphs: [
        "For return, exchange or refund enquiries, contact FEWTURE through our official channels. Please include your order details to help us assist you."
      ],
      link: {
        label: "CONTACT FEWTURE",
        to: "/contact"
      }
    }
  ];

  return (
    <LegalPage
      title="RETURNS & REFUNDS"
      intro="We want you to be happy with your FEWTURE purchase. This page explains how to contact us about returns, exchanges and refunds."
      sections={sections}
    />
  );
};

export default Returns;
