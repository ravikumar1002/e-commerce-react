import { Link } from "react-router-dom"

import "./signup.css"

const SignUpPage = () => {

    return (
        <main>
            <div className="modal-container  login-position">
                <div className="login-wrapper flex-col ">
                    <div>
                        <h2 className="text-center">Signup</h2>
                    </div>
                    <div className="flex-col">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" className="fs-sm input-padding" required />
                    </div>
                    <div className="flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="fs-sm input-padding" required />
                    </div>
                    <div className="flex-space-between p-0">
                        <span>
                            <label htmlFor="remember-me"> <input type="checkbox" id="remember-me" required /> <span>I accept all Terms & Conditions</span></label>
                        </span>
                    </div>

                    <div>
                        <button className="btn btn-primary">
                            Create New Account
                        </button>
                    </div>
                    <div className="text-center">
                        <Link to="../login/login" className="btn-icon-text-right text-underline-none centre ">Already have an account <i className="fas fa-angle-right fs-md"></i></Link>
                    </div>

                </div>
            </div>

        </main>
    )
}

export default SignUpPage