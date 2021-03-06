import React from "react";
import  {Link} from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";
import {isLoaded} from 'react-redux-firebase'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (
       <nav className="nav-wrapper blue darken-1">
           <div className="container">
            <Link to ='/' className="brand-logo">Project Planner</Link>
            {isLoaded (auth) && links} {/* remove this to show on tech talk */}
           </div>
       </nav>
    )
}

const mapStateToProps = (state)  => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);