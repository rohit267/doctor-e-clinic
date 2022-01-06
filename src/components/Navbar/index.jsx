import React from 'react';
import {
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';
import { BiPlusMedical, BiTime } from 'react-icons/bi';
import Classes from './index.module.css';
import NavbarIcons from '../NavbarIcons';
import { FaStethoscope } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';

const navIcons = [
  {
    icon: <FaStethoscope size="2em" />,
    text: 'Find a doctor',
  },
  {
    icon: <BiTime size="2em" />,
    text: 'Appointments',
  },
  {
    icon: <BsChat size="2em" />,
    text: 'Chat with doctor',
  },
];

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Row>
      <Navbar dark expand="md" className={Classes.Header}>
        <a href="/" className="d-flex">
          <BiPlusMedical size="3em" />
          <h1 className={Classes.LogoText}>Doctors e-clinic</h1>
        </a>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
             {navIcons.map((icon, index) => <NavbarIcons key={index} icon={icon.icon} text={icon.text} />)}
          </Nav>
        </Collapse>
      </Navbar>
    </Row>
  );
}

export default Header;
