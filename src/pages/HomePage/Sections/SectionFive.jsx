import React, { forwardRef } from "react";
import SectionHeader from "../../../components/SectionHeader";
import ProcessCard from "../components/ProcessCard";
import {
  calenderIcon,
  confirmedLocationIcon,
  paymentIcon,
  propertyIcon,
} from "../../../constants/icons";

const SectionFive = forwardRef((props, ref) => {
  return (
    <section className="py-10 lg:py-20" ref={ref}>
      <SectionHeader
        sectionName={"How It Works"}
        title={"Journey to Achieve Property Success"}
        firstLineDesc={
          "Explore our process from understanding your needs to finding the right property."
        }
      />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <ProcessCard
          icon={propertyIcon}
          stepNumber={"01"}
          title={"Discover Property"}
          description={
            "Find a wide selection of properties that perfectly suit your needs and preferences.Browse a comprehensive list of properties that offer detailed information."
          }
          alt ={'apartment icon'}
        />
        <ProcessCard
          icon={calenderIcon}
          stepNumber={"02"}
          title={"Schedule"}
          description={
            "Once you find a property of interest, schedule a visit at your convenience. Choose a date and time, and our team will ensure a smooth viewing experience."
          }
          alt ={'calender icon'}
        />
        <ProcessCard
          icon={confirmedLocationIcon}
          stepNumber={"03"}
          title={"Property Visit"}
          description={
            "Visit, explore the neighborhood, and ensure every detail meets your expectations. Our team will be on hand to answer questions and provide information."
          }
          alt ={'confirmed location icon'}
        />
        <ProcessCard
          icon={paymentIcon}
          stepNumber={"04"}
          title={"Finalize The Deal"}
          description={
            "After the visit, if you're ready, we'll guide you through a secure transaction, handling everything from negotiation to paperwork until you're the official owner."
          }
          alt ={'dollar sign icon'}
        />
      </section>
    </section>
  );
});

export default SectionFive;
