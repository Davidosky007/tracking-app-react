import { logout } from '../logic/sessions';
import Icon from './Icon';

const Footer = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <footer className="flex fixed footer">
      <Icon icon="fas fa-plus-square" path="/add" title="Add Measure." />
      <Icon icon="fas fa-home" path="/" title="Home" />
      <Icon icon="fas fa-weight" path="/progress" title="Progress" />
      <Icon icon="fas fa-sign-out-alt" path="/users/login" title="Logout" clickHandler={handleLogout} />
    </footer>
  );
};

export default Footer;
