const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Posts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;