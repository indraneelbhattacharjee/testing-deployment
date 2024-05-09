import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../sidenav.css';//need to be connected properly
import { faHome, faChartBar, faEnvelope, faBoxOpen, faInfoCircle, faCog, faBeer, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function SideNavDark() {
  const logoSrc = `${process.env.PUBLIC_URL}/img/sideNav/logo.png`;
  const navigate = useNavigate();

  axios.defaults.baseURL = 'http://localhost:8080';
  axios.defaults.withCredentials = true;

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
      if (response.status === 200) {
        console.log('Logout successful');
        navigate('/login'); // Redirect to the home page or login page
      }
    } catch (error) {
      console.error('Logout failed:', error.response || error);
    }
  };

  const handleEmployeeLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logout');
      if (response.status === 200) {
        console.log('Logout successful');
        // Perform any client-side cleanup
        navigate('/employee_login'); // Redirect to the home page or login page
      }
    } catch (error) {
      console.error('Logout failed:', error.response || error);
    }
  };

  const location = useLocation();
  let userLoggedIn = false;

  //paths for user and employee
  const userPaths = ['/user-dashboard', '/contact-signedin', '/services', '/about-signedin', '/profile', '/uiux-services', '/webDev-services', '/software-services', '/appDev-services', '/paymentPage'];
  const employeePaths = ['/ems', '/employee_contact', '/employee_services', '/employee_about', '/employee_uiux', '/employee_webDev', '/employee_software', '/employee_appDev', '/employee_payment'];

  // Check if the current path is included in userPaths or employeePaths
  const isUserPage = userPaths.includes(location.pathname);
  const isEmployeePage = employeePaths.includes(location.pathname);
  if(isUserPage){
    userLoggedIn = true;
  }
  if(isEmployeePage){
    userLoggedIn = false;
  }
  return (
  <div className='flex_container' >
    <div className='sideb'>
      <div className='main_div' >
        {userLoggedIn ? (
          <>
        <nav className="navbar">
          <div className="logo">

            <img className='logo_image' src={logoSrc} alt="logo" />
            <hr />
          </div>
          <Link to="/user-dashboard"><FontAwesomeIcon icon={faBeer} /> <font> Overview </font></Link>

          <Link to="/user-dashboard"><FontAwesomeIcon icon={faChartBar} /> <font> Analytics</font></Link>
          <Link to="/contact-signedin"><FontAwesomeIcon icon={faEnvelope} /> <font> Contact us </font></Link>
          <Link to="/services"><FontAwesomeIcon icon={faBoxOpen} /> <font> Products </font></Link>
          <Link to="/about-signedin"><FontAwesomeIcon icon={faInfoCircle} /> <font> About us</font></Link>
        </nav>
      <div className="navbara">
        <Link to="/profile" className='logou'><FontAwesomeIcon icon={faCog} /> <font> Settings </font></Link>
        <button onClick={handleLogout} type="sub" className="group relative w-100px flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log Out
        </button>

      </div>
      </>
        ) : (
          <>
        <nav className="navbar">
          <div className="logo">

            <img className='logo_image' src={logoSrc} alt="logo" />
            <hr />
          </div>
          <Link to="/ems"><FontAwesomeIcon icon={faBeer} /> <font> Overview </font></Link>

          <Link to="/ems"><FontAwesomeIcon icon={faChartBar} /> <font> Analytics</font></Link>
          <Link to="/employee_contact"><FontAwesomeIcon icon={faEnvelope} /> <font> Contact us </font></Link>
          <Link to="/employee_services"><FontAwesomeIcon icon={faBoxOpen} /> <font> Products </font></Link>
          <Link to="/employee_about"><FontAwesomeIcon icon={faInfoCircle} /> <font> About us</font></Link>
        </nav>
      <div className="navbara">
        <button onClick={handleEmployeeLogout} type="sub" className="group relative w-100px flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log Out
        </button>

      </div>
      </>
      )}
    </div>
  </div>
</div>
  );
};

export default SideNavDark;