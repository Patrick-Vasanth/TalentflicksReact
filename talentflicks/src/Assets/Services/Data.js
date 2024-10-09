import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

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

export { navData, sliderImage };
