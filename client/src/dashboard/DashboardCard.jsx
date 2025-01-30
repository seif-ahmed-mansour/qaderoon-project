import { Link } from "react-router-dom";
import "./DashboardCard.css";

const DashboardCard = ({ action, url, icon }) => {
  return (
    <Link
      to={url}
      className="group flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-h-[300px] dashboard-card">
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Icon */}
        <div className="mb-4 text-primary text-4xl">{icon}</div>

        {/* Action Text */}
        <h3 className="text-xl font-bold text-primary text-center">{action}</h3>
      </div>
    </Link>
  );
};

export default DashboardCard;
