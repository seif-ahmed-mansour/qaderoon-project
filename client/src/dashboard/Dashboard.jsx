import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          navigate("/dashboard/login", { replace: true });
          return;
        }
        const response = await axios.post(
          `${import.meta.env.VITE_HOST_SERVER}admin/verify`,
          { token }
        );
        if (response.status === 200) {
          setIsVerified(true);
        } else {
          navigate("/dashboard/login", { replace: true });
        }
      } catch (error) {
        navigate("/dashboard/login", { replace: true });
      }
    };
    verifyAdmin();
  }, [navigate]);

  if (!isVerified) return null; // Show nothing until verification completes

  return (
    <div className="flex flex-col h-full w-full">
      <div className="bg-gray-100 w-full py-10 px-5">
        <h1 className="text-4xl font-bold text-primary">لوحة التحكم</h1>
      </div>
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
