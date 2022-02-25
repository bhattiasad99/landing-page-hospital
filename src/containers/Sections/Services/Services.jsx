import React from "react";
import { Wrapper, Container } from "./Services.style";
import { Heading1 } from "../../../components/ThemeComponents/Headings";
import { GiTestTubes, GiHospital } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import Service from "./Service/Service";

const SERVICES = [
  {
    name: "diagnostics",
    props: {
      label: "Diagnostic Lab",
      desc: "Perform state of the art medical tests at extremely subsidized rates!",
      icon: <GiTestTubes />,
      link: "#",
    },
  },
  {
    name: "opd",
    props: {
      label: "Outdoor Services",
      desc: "24/7 Duty medical officers available",
      icon: <GiHospital />,
      link: "#",
    },
  },
  {
    name: "gynea",
    props: {
      label: "Gyneacology",
      desc: "Senior Gyneacologists from Rawalpindi administering the gyneacology department",
      icon: <FaBaby />,
      link: "#",
    },
  },
  {
    name: "pharmacy",
    props: {
      label: "Pharmacy",
      desc: "24/7 pharmacy available for emergency medication",
      icon: <MdOutlineLocalPharmacy />,
      link: "#",
    },
  },
];

const Services = () => {
  return (
    <Wrapper style={{ minHeight: "100vh" }} id="services">
      <Heading1>Our Services</Heading1>
      <Container>
        {SERVICES.map((service) => (
          <Service key={service.name} {...service.props} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Services;
