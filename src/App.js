/* eslint-disable */
import './App.css';
import Intro from './Pages/Intro/Intro'
import Header from './Components/Header/header'
import Recipes from "./Pages/Recipes/Recipes";
import Blogs from "./Pages/Blogs/Blogs";
import FullBlogs from "./Pages/Blogs/FullBlog";
import Food from "./Pages/Food/Food";
import Verification from "./Pages/Notfound404/verifi";
import AboutUs from './Pages/AboutUs/AboutUs'
import Dashboard from './Pages/Dashboard/Dashboard'
import ClientProfile from './Pages/Profile page/Clientprofile'
import NutritionistProfile from './Pages/Profile page/Nutritionistprofile'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import SignUpMobile from './Pages/Signup/Signup_mobile'
import LoginMobile from './Pages/Login/login_mobile'
import Nutritionist from './Pages/Dashboard/Nutritionist/Nutritionist'
import { AuthProvider } from './AuthContext'
import NonResponsiveOverlay from "./Components/NonResponsiveOverlay";


function App() {
  return (
    <>
      <NonResponsiveOverlay />
      <AuthProvider>
        <Router>
          <Header />
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/verification" component={Verification} />
            <Route exact path="/:uid/Nutritionistprofile" component={NutritionistProfile} />
            <Route exact path="/" component={Intro} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/:blogid/fullBlog" component={FullBlogs} />
            <Route exact path="/:uid/dashboard" component={Dashboard} />
            <Route exact path="/:uid/Nutritionistdashboard" component={Nutritionist} />
            <Route exact path="/:uid/profile" component={ClientProfile} />
            {
              window.screen.width <= 500 ? (<>
                <Route exact path="/signupmobile" component={SignUpMobile} />
                <Route exact path="/loginmobile" component={LoginMobile} /></>)
                : (<></>)
            }
          </AnimatedSwitch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
