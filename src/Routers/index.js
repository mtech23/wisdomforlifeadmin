import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "../Screens/Auth/Login";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import { Dashboard } from "../Screens/Dashboard";
import { UserDateil } from "../Screens/UserManagement/Userdateil";

import { MyProfile } from "../Screens/my_account";
import { UserManagement } from "../Screens/UserManagement/index";
import { EditUserDetails } from "../Screens/UserManagement/editUser";

import { SafeManagement } from "../Screens/safeAdministartion/";
import { SafeDetails } from "../Screens/safeAdministartion/safeDetails";
import { AddSafe } from "../Screens/safeAdministartion/addSafe";

import { Profilelist } from "../Screens/Profile";
import { ProfileDateil } from "../Screens/Profile/Profiledateil";
// import ChangePassword from "../Screens/Profile/ChangePassword";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { CategoryManagement } from "../Screens/CategoryManagement";
import Register from "../Screens/Auth/Register";

import { CourseList } from "../Screens/CourseManagement/index";
import { CourseDateil } from "../Screens/CourseManagement/Coursedateil";
import { EditCourse } from "../Screens/CourseManagement/EditCourse";
import { AddCourse } from "../Screens/CourseManagement/AddCourse";

import { QuizList } from "../Screens/QuizManagement/index";
import { QuizDateil } from "../Screens/QuizManagement/Quizdateil";
import { EditQuiz } from "../Screens/QuizManagement/EditQuiz";
import { AddQuiz } from "../Screens/QuizManagement/AddQuiz";

import { PromoList } from "../Screens/PromoCodeManagement/index";
import { PromoDateil } from "../Screens/PromoCodeManagement/Promodateil";
import { EditPromo } from "../Screens/PromoCodeManagement/EditPromo";
import { AddPromo } from "../Screens/PromoCodeManagement/AddPromo";

import UserLogin from "../Screens/UserAccount/Auth/Login";

import { EventList } from "../Screens/EventManagement/index";
import { EventDateil } from "../Screens/EventManagement/Eventdateil";
import { AddEvent } from "../Screens/EventManagement/AddEvent";
import { EditEvent } from "../Screens/EventManagement/EditEvent";

// EditEvent

import Error from "../Screens/Error";
import { CalenderManagement } from "../Screens/CalenderManagement";

export default function AdminRouter() {
  return (
    <BrowserRouter basename="/steveLentiniAdmin">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />
        <Route path="/sign-up" element={<Register />} />

        <Route
          path="/dashboard"
          element={<ProtectedRoutes Components={Dashboard} />}
        />
        {/* dashboard-management  Profilelist*/}
        <Route
          path="/dashboard-management"
          element={<ProtectedRoutes Components={Dashboard} />}
        />
        <Route
          path="/user-management/"
          element={<ProtectedRoutes Components={UserManagement} />}
        />

        <Route
          path="/user-management/user-detail/:id"
          element={<ProtectedRoutes Components={UserDateil} />}
        />
        <Route
          path="/user-management/edit-detail/"
          element={<ProtectedRoutes Components={EditUserDetails} />}
        />

        <Route
          path="/event-news-management"
          element={<ProtectedRoutes Components={EventList} />}
        />

        <Route
          path="/Add-event"
          element={<ProtectedRoutes Components={AddEvent} />}
        />
        <Route
          path="/event-management/edit-event/:id"
          element={<ProtectedRoutes Components={EditEvent} />}
        />
        {/* EditEvent */}
        <Route
          path="/event-management/event-details/:id"
          element={<ProtectedRoutes Components={EventDateil} />}
        />
        {/*     <Route path="/add-subscription" element={<ProtectedRoutes Components={AddSubscription} />} />
        <Route path="/subscription/edit-subscription/:id" element={<ProtectedRoutes Components={EditSubscription} />} /> */}

        <Route
          path="/category-management/"
          element={<ProtectedRoutes Components={CategoryManagement} />}
        />

        {/* <Route
          path="/safe-administration"
          element={<ProtectedRoutes Components={SafeManagement} />}
        /> */}
        {/* <Route
          path="/safe-administration/safe-detail/:id"
          element={<ProtectedRoutes Components={SafeDetails} />}
        />

        <Route
          path="/add-safe/"
          element={<ProtectedRoutes Components={AddSafe} />}
        /> */}

        <Route
          path="/profile-management"
          element={<ProtectedRoutes Components={Profilelist} />}
        />
        <Route
          path="/profile-management/profile-details/:id"
          element={<ProtectedRoutes Components={ProfileDateil} />}
        />

        <Route
          path="/course-management"
          element={<ProtectedRoutes Components={CourseList} />}
        />
        <Route
          path="/add-course"
          element={<ProtectedRoutes Components={AddCourse} />}
        />
        <Route
          path="/course-management/course-details/:id"
          element={<ProtectedRoutes Components={CourseDateil} />}
        />
        <Route
          path="/course-management/edit-course/:id"
          element={<ProtectedRoutes Components={EditCourse} />}
        />

        {/* Quiz Managment */}
        <Route
          path="/quiz-management"
          element={<ProtectedRoutes Components={QuizList} />}
        />
        <Route
          path="/add-quiz"
          element={<ProtectedRoutes Components={AddQuiz} />}
        />
        <Route
          path="/quiz-management/quiz-details/:id"
          element={<ProtectedRoutes Components={QuizDateil} />}
        />
        <Route
          path="/quiz-management/edit-quiz/:id"
          element={<ProtectedRoutes Components={EditQuiz} />}
        />
        {/* Quiz Managment */}

        <Route
          path="/promocode-management"
          element={<ProtectedRoutes Components={PromoList} />}
        />
        <Route
          path="/add-promocode"
          element={<ProtectedRoutes Components={AddPromo} />}
        />
        <Route
          path="/promocode-management/promocode-details/:id"
          element={<ProtectedRoutes Components={PromoDateil} />}
        />
        <Route
          path="/promocode-management/edit-promocode/:id"
          element={<ProtectedRoutes Components={EditPromo} />}
        />

        <Route
          path="/category-management"
          element={<ProtectedRoutes Components={CategoryManagement} />}
        />




        <Route
          path="/calender-management"
          element={<ProtectedRoutes Components={CalenderManagement} />}
        />

        {/* /add-course  category-management*/}

        <Route name="user" path="user/login" element={<UserLogin />} />
        <Route name="user" path="/profile" element={<MyProfile />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
