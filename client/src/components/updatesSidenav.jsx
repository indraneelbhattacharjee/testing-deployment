import './sidenav.css';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { faHome, faChartBar, faEnvelope, faBoxOpen, faInfoCircle, faCog, faBeer, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const SideNav = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logoo.png`;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logout');
      if (response.status === 200) {
        console.log('Logout successful');
        // Perform any client-side cleanup
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
  const userPaths = ['/user-dashboard', '/contact', '/services', '/about', '/profile', '/uiux-services', '/webDev-services', '/software-services', '/appDev-services', '/paymentPage'];
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
          <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> <font> Contact us </font></Link>
          <Link to="/services"><FontAwesomeIcon icon={faBoxOpen} /> <font> Products </font></Link>
          <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> <font> About us</font></Link>
        </nav>
        <div className="navbara">
          <Link to="/profile"><FontAwesomeIcon icon={faCog} /> <font> Settings </font></Link>
          <button onClick={handleLogout} type="sub" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
        <button onClick={handleEmployeeLogout} type="sub" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log Out
        </button>

      </div>
      </>
      )}
        </div>
   
        </div>
        <div className='center_div'>
          <div className='projects_analytics'>
          <div className='projanaly'>
          <div className='projec'>
                <font className='projects_text'>Projects </font>
          </div>
          <div className='analytics'>
          <font className='projects_text'>Analytics </font>
          </div>
          </div>
          <div className='idnames'>
                <div>
              {/* <h4>John D.</h4> */}
              <img className='person_image' src={logoSrc} alt="logo" />
            <font className='john_text'>Title </font> <br />
              <font className='project_text'>Name </font>
                </div>
                <div className='to_do'>
                <font className='projects_text'>To-Do </font>
                </div>
          </div>
          </div>
          <div className='project_recommendation'>
          <font className='projects_text'>Project Recommendations  </font>
          </div>
        </div>
        
 </div>

  );
}

export default SideNav;
