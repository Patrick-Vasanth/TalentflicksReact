import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

let navData = [
  {
    navMenu: "Home",
    navLink: "/",
    icon: HouseRoundedIcon,
  },
  {
    navMenu: "Guidelines",
    navLink: "/guide",
    icon: GavelRoundedIcon,
  },
  {
    navMenu: "About Us",
    navLink: "/about",
    icon: ContactSupportRoundedIcon,
  },
  {
    navMenu: "Register",
    navLink: "/register",
    icon: AppRegistrationIcon,
  },
];

let sliderImage = [
  {
    id: 1,
    path: require("../Images/Banner1.jpeg"),
    alt: "banner1",
  },
  { id: 2, path: require("../Images/Banner2.png"), alt: "banner2" },
  {
    id: 3,
    path: require("../Images/Banner3.png"),
    alt: "banner3",
  },
];

let workContent = [
  {
    id: 1,
    h2content: "Submit your short film:",
    pcontent: `Kickstart your journey by submitting your short film to our platform for competition.
              We curate and upload these films to our YouTube channel daily, providing a stage
              for your talent to shine.`,
    icon: ArrowDownwardIcon,
    path: require("../Images/Rectangle 116.png"),
    color: "#ffd200",
  },
  {
    id: 2,
    h2content: "Daily Showcases and Grand Finale:",
    pcontent: `Immerse yourself in the daily showcases of handpicked short films. When the competition
              concludes, one outstanding contender will be crowned the ultimate winner, claiming the
              grand prize of ${(<b className="price">Rs.1,00,000</b>)}.`,
    icon: ArrowDownwardIcon,
    path: require("../Images/download.jpeg"),
    color: "#ffd200",
  },
  {
    id: 3,
    h2content: "Viewer Engagement for Cash Prizes:",
    pcontent: `Every week, you can win money by joining the "Talentflicks Quiz Competition".
              Like, subscribe, and comment on your favorite short films to win!`,
    icon: CheckCircleIcon,
    path: require("../Images/Rectangle 118.png"),
    color: "#ffd200",
  },
];

const images = [
  { id: 1, src: require("../Images/Rectangle 116.png"), alt: "Image 1" },
  { id: 2, src: require("../Images/download.jpeg"), alt: "Image 2" },
  { id: 3, src: require("../Images/Rectangle 118.png"), alt: "Image 3" },
];

export { navData, sliderImage, workContent, images };
