import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import dynamic from "next/dynamic";
import LogoLabelDesktop from "./LogoLabelDesktop";
import LogoLabelMobile from "./LogoLabelMobile";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";

const ProfileMenu = dynamic(() => import("./ProfileMenu"), { ssr: false });

const pages = [
  { name: "Seat Map", href: "/seatmap" },
  { name: "About", href: "/about" },
];

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LogoLabelDesktop />
          <NavMenu pages={pages} />
          <LogoLabelMobile />
          <NavBar pages={pages} />
          <ProfileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
