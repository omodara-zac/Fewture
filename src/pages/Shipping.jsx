
import React from "react";
import LegalPage from "../components/LegalPage";

const Shipping = () => {
  const sections = [
    {
      heading: "DELIVERY LOCATIONS",
      paragraphs: [
        "FEWTURE currently operates from Lagos, Nigeria. Delivery availability depends on the customer's location and our delivery arrangements.",
        "Please contact us to confirm whether delivery is available to your location before placing an order."
      ]
    },
    {
      heading: "DELIVERY TIMELINES",
      paragraphs: [
        "Estimated delivery timelines will be communicated when your order is confirmed.",
        "Delivery times may vary depending on your location, order volume and courier availability."
      ]
    },
    {
      heading: "DELIVERY FEES",
      paragraphs: [
        "Delivery charges depend on the destination and delivery method.",
        "Any applicable delivery fee will be communicated to you before your order is finalized."
      ]
    },
    {
      heading: "ORDER PROCESSING",
      paragraphs: [
        "Orders are processed after confirmation and completion of the required payment arrangements.",
        "Processing times may vary during high-demand periods or promotional releases."
      ]
    },
    {
      heading: "DELIVERY INFORMATION",
      paragraphs: [
        "Customers are responsible for providing a correct and complete delivery address and an active contact number.",
        "FEWTURE should be informed promptly if any delivery information needs to be corrected."
      ]
    },
    {
      heading: "DELIVERY DELAYS",
      paragraphs: [
        "Although we aim to deliver within the estimated timeframe, delays may occur due to circumstances outside our reasonable control, including weather conditions, courier issues or public holidays.",
        "Where possible, we will communicate significant delivery updates."
      ]
    },
    {
      heading: "DELIVERY ENQUIRIES",
      paragraphs: [
        "For questions about an existing order or delivery, contact our team through our official channels."
      ],
      link: {
        label: "CONTACT FEWTURE",
        to: "/contact"
      }
    }
  ];

  return (
    <LegalPage
      title="SHIPPING & DELIVERY"
      intro="Every FEWTURE order deserves a smooth delivery experience. Here's what you need to know about how we process and deliver your orders."
      sections={sections}
    />
  );
};

export default Shipping;
