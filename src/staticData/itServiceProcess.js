import {
  faCheckCircle,
  faCogs,
  faComments,
  faHeadset,
  faMagnifyingGlass,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const itServiceProcess = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We begin by understanding your IT needs, business goals, and existing challenges.",
    icon: faComments, // replace with your actual icon reference
  },
  {
    step: 2,
    title: "IT Assessment",
    description:
      "Our team analyzes your current infrastructure, systems, and workflows to identify gaps and opportunities.",
    icon: faMagnifyingGlass,
  },
  {
    step: 3,
    title: "Solution Design",
    description:
      "We design a tailored IT architecture or solution that fits your business requirements and budget.",
    icon: faProjectDiagram,
  },
  {
    step: 4,
    title: "Implementation",
    description:
      "We deploy hardware, configure software, and integrate systems efficiently and securely.",
    icon: faCogs,
  },
  {
    step: 5,
    title: "Testing & Optimization",
    description:
      "Thorough testing and fine-tuning ensure the system performs optimally and securely.",
    icon: faCheckCircle,
  },
  {
    step: 6,
    title: "Ongoing Support",
    description:
      "We provide continuous monitoring, maintenance, and support to keep your IT running smoothly.",
    icon: faHeadset,
  },
];

export default itServiceProcess;
