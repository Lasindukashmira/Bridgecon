import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faCogs,
  faMobileAlt,
  faNetworkWired,
  faServer,
  faTools,
  faLayerGroup,
  faPaintBrush,
  faGlobe,
  faHeadset,
  faDesktop,
  faUserTie,
  faScrewdriverWrench,
  faShieldHalved,
  faBug,
  faClipboardCheck,
  faShield,
  faCloud,
  faCloudArrowUp,
  faSlidersH,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Software Development",
    icon: faCode,
    subpoints: [
      {
        point: "Custom Software",
        pointicon: faCogs,
      },
      {
        point: "Web & Mobile Apps",
        pointicon: faMobileAlt,
      },
    ],
  },
  {
    title: "Network Solution",
    icon: faNetworkWired,
    subpoints: [
      {
        point: "Infrastructure Setup",
        pointicon: faServer,
      },
      {
        point: "Network Troubleshooting & Optimization",
        pointicon: faTools,
      },
    ],
  },
  {
    title: "Website Services",
    icon: faLayerGroup,
    subpoints: [
      {
        point: "Web Design & Development",
        pointicon: faPaintBrush,
      },
      {
        point: "Domain & Hosting",
        pointicon: faGlobe,
      },
    ],
  },
  {
    title: "IT Support & Consulting",
    icon: faHeadset,
    subpoints: [
      {
        point: "Remote Desktop support",
        pointicon: faDesktop,
      },
      {
        point: "IT Consulting",
        pointicon: faUserTie,
      },
      {
        point: "System Maintainance",
        pointicon: faScrewdriverWrench,
      },
    ],
  },
  {
    title: "Cybersecurity Services",
    icon: faShieldHalved,
    subpoints: [
      {
        point: "Threat Detection & Prevention",
        pointicon: faBug,
      },
      {
        point: "Security Audits",
        pointicon: faClipboardCheck,
      },
      {
        point: "Endpoint Protection",
        pointicon: faShield,
      },
    ],
  },
  {
    title: "Cloud Solutions",
    icon: faCloud,
    subpoints: [
      {
        point: "Cloud Migration",
        pointicon: faCloudArrowUp,
      },
      {
        point: "Cloud Management",
        pointicon: faSlidersH,
      },
      {
        point: "Backup & Recovery",
        pointicon: faRecycle,
      },
    ],
  },
];
export default services;
