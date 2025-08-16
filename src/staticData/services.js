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
    tagline: "Turning Ideas Into Digital Reality",
    description:
      "We deliver scalable, secure, and user-friendly software solutions tailored to your unique business needs.",
    backgroundImage: "/images/software-bg.jpg",
    subpoints: [
      { point: "Custom Software", pointicon: faCogs },
      { point: "Web & Mobile Apps", pointicon: faMobileAlt },
    ],
    cta: "Get a Free Quote",
  },
  {
    title: "Network Solution",
    icon: faNetworkWired,
    tagline: "Fast, Secure, Reliable",
    description:
      "From setup to optimization, we ensure your network runs seamlessly with maximum uptime and security.",
    backgroundImage: "/images/network-bg.jpg",
    subpoints: [
      { point: "Infrastructure Setup", pointicon: faServer },
      {
        point: "Network Troubleshooting & Optimization",
        pointicon: faTools,
      },
    ],
    cta: "Contact Us Today",
  },
  {
    title: "Website Services",
    icon: faLayerGroup,
    tagline: "Your Brand, Your Digital Home",
    description:
      "We create stunning, high-performance websites that capture your brand and engage your audience.",
    backgroundImage: "/images/website-bg.jpg",
    subpoints: [
      { point: "Web Design & Development", pointicon: faPaintBrush },
      { point: "Domain & Hosting", pointicon: faGlobe },
    ],
    cta: "Start Your Website",
  },
  {
    title: "IT Support & Consulting",
    icon: faHeadset,
    tagline: "Expert Help, When You Need It",
    description:
      "Our IT specialists provide fast, reliable support and guidance to keep your systems running smoothly.",
    backgroundImage: "/images/support-bg.jpg",
    subpoints: [
      { point: "Remote Desktop Support", pointicon: faDesktop },
      { point: "IT Consulting", pointicon: faUserTie },
      { point: "System Maintenance", pointicon: faScrewdriverWrench },
    ],
    cta: "Request Support",
  },
  {
    title: "Cybersecurity Services",
    icon: faShieldHalved,
    tagline: "Your Data, Our Shield",
    description:
      "Protect your business with advanced threat detection, prevention, and security audits.",
    backgroundImage: "/images/cybersecurity-bg.jpg",
    subpoints: [
      { point: "Threat Detection & Prevention", pointicon: faBug },
      { point: "Security Audits", pointicon: faClipboardCheck },
      { point: "Endpoint Protection", pointicon: faShield },
    ],
    cta: "Secure My Business",
  },
  {
    title: "Cloud Solutions",
    icon: faCloud,
    tagline: "Scale Without Limits",
    description:
      "We help businesses migrate, manage, and optimize cloud infrastructure for performance and cost-efficiency.",
    backgroundImage: "/images/cloud-bg.jpg",
    subpoints: [
      { point: "Cloud Migration", pointicon: faCloudArrowUp },
      { point: "Cloud Management", pointicon: faSlidersH },
      { point: "Backup & Recovery", pointicon: faRecycle },
    ],
    cta: "Explore Cloud Services",
  },
];

export default services;
