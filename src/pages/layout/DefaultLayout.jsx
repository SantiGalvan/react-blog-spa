import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const DefaultLayout = () => {
    return (<>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>)
}

export default DefaultLayout;