import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <div className='relative min-h-screen md:flex bg-white'>
            {/* Left Side: Sidebar Component */}
            <Sidebar />

            {/* Right Side: Dashboard Dynamic Content */}
            <div className='flex-1  md:ml-72 border-0'>
                <div className='p-5'>
                    {/* Outlet for dynamic contents */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;