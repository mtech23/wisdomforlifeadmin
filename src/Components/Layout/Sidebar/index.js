import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faUser,
  faEye,
  faMoneyBill1,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

import "./style.css";

export const Sidebar = (props) => {

  const location = useLocation()
  return (
    <div className={`sidebar ${props.sideClass}`} id="sidebar">
      <ul className="list-unstyled">
        {/* <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/dashboard') ? 'active' : ''}`} to="/dashboard">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faBorderAll} />
            </span>
            <span className="sideLinkText">Dashboard</span>
          </Link>
        </li> */}



<li className="sidebar-li">



          <Link className={`sideLink ${location.pathname.includes('/dashboard-management') ? 'active' : ''}`} to="/dashboard-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">Dashboard Management </span>
          </Link>
        </li>



        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('#') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText"> Profile Management   </span>
          </Link>
        </li>

        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/user-management') ? 'active' : ''}`} to="/user-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="sideLinkText">User Management</span>
          </Link>
        </li>


        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('#') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText"> Board Management   </span>
          </Link>
        </li>





        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/category-management') ? 'active' : ''}`} to="/category-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">   Category Management   </span>
          </Link>
        </li>




  


        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/course-management') ? 'active' : ''}`} to="/course-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">Course Management </span>
          </Link>
        </li>

        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/promocode-management') ? 'active' : ''}`} to="/promocode-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">PromoCode Management </span>
          </Link>
        </li>

 
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/student-management') ? 'active' : ''}`} to="/student-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="sideLinkText">Student Management</span>
          </Link>
        </li>



        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('#') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">Personal Notes Management</span>
          </Link>
        </li>



        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/event-news-management') ? 'active' : ''}`} to="/event-news-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">Event News Management   </span>
          </Link>
        </li>

        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('#') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText"> Calender Management   </span>
          </Link>
        </li>



        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('#') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText"> Cart Management   </span>
          </Link>
        </li>



        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('#') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText"> Invoice Management   </span>
          </Link>
        </li>




      </ul>
    </div>
  );
};
