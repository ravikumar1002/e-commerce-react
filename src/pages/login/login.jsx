import "./login.css"

const LoginPage = () => {
    return (
        <main>
            <div className="modal-container login-position">
                <div className="login-wrapper flex-col ">
                    <div>
                        <h2 className="text-center">Login</h2>
                    </div>

                    <div className="flex-col">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="fs-sm input-padding"
                            placeholder="ecommerce@gmail.com"
                            required
                        />
                    </div>
                    <div className="flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="fs-sm input-padding"
                            placeholder="*********"
                            required
                        />
                    </div>
                    <div className="flex-space-between p-0">
                        <span>
                            <label htmlFor="remember-me">
                                <input type="checkbox" id="remember-me" />
                                <span>Remember me</span>
                            </label>
                        </span>
                        <span>
                            <a href="#" className="text-underline-none">
                                Forget Your Password?
                            </a>
                        </span>
                    </div>

                    <div>
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="text-center">
                        <a
                            href="../signup/signup.html"
                            className="btn-icon-text-right text-underline-none centre"
                        >
                            Create New Account <i className="fas fa-angle-right fs-md"></i>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
