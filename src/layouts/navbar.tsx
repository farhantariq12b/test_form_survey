import { useAuth } from "hooks/useAuth";
import { useBoolean } from "hooks/useBoolean";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FormRoutes } from "routes/paths";
import { AppNavLink } from "./components/nav-link";

export const AppNavbar = () => {
  const { isOn, toggle } = useBoolean();
  const { onLogout } = useAuth();
  return (
    <Navbar expand={"lg"}>
      <NavbarBrand>Admin Survey</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOn} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink>
              <AppNavLink to="/" title={"Home"} />
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Forms
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <AppNavLink to={FormRoutes.List} title={"Forms"} />
              </DropdownItem>
              <DropdownItem>
                <AppNavLink to={FormRoutes.CreateEdit} title={"Create"} />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText onClick={onLogout} className="cursor-pointer">
          Logout
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};
