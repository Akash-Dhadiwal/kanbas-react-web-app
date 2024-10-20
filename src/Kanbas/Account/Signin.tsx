import {Link} from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen " className="px-3">
            <h3>Sign in</h3>
            <input id="wd-username" placeholder="Username" className="form-control mb-2"/>
            <input id="wd-password" placeholder="Password" type="password"
                   className="form-control mb-2"/>
            <Link id="wd-signin-btn"
                  to="/Kanbas/Dashboard" className="btn btn-primary w-100"> Sign in </Link>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    );
}