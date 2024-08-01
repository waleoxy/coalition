import homeIcon from "../assets/homeIcon.jpg";
import patientsIcon from "../assets/patientsIcon.png";
import calendarIcon from "../assets/calendarIcon.png";
import msgIcon from "../assets/msgIcon.png";
import creditCardIcon from "../assets/creditCardIcon.png";

export const navLinks = [
  {
    id: 0,
    icon: homeIcon,
    link: "/",
    title: "Overview",
  },
  {
    id: 1,
    icon: patientsIcon,
    link: "patients",
    title: "Patients",
  },
  {
    id: 2,
    icon: calendarIcon,
    link: "schedule",
    title: "Schedule",
  },
  {
    id: 3,
    icon: msgIcon,
    link: "message",
    title: "Message",
  },
  {
    id: 4,
    icon: creditCardIcon,
    link: "transaction",
    title: "Transactions",
  },
];
