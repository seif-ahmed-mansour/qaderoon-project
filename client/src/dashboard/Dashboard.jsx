import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    const [isVerified, setIsVerified] = useState(true);

    useEffect(() => {
        const verifyAdmin = async () => {
            try {
                const token = sessionStorage.getItem("token");
                if (!token) {
                    navigate("/dashboard/login");
                    return;
                }
                const response = await axios.post(`${import.meta.env.VITE_HOST_SERVER}admin/verify`, { token });
                if (response.status === 200) {
                    setIsVerified(true);
                } else {
                    navigate("/dashboard/login");
                }
            } catch (error) {
                navigate("/dashboard/login");
            }
        };
        // verifyAdmin();
    }, [navigate]);

    if (!isVerified) return navigate("/dashboard/login", {replace: true});

    return (
        <div className="flex h-full" dir="ltr">
            <aside className="w-64 bg-red-700 text-white p-5 hidden md:block">
                <h2 className="text-xl font-bold">Admin Dashboard</h2>
                <nav>
                    <ul>
                        <li><a href="/dashboard/home" className="block py-2">Home</a></li>
                        <li><a href="/dashboard/settings" className="block py-2">Settings</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-5">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
