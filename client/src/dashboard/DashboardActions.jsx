import { FaNewspaper, FaUserPlus } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import DashboardCard from "./DashboardCard";

const DashboardActions = () => {
  const dashboardItems = [
    {
      action: "إضافة مقال",
      url: "/dashboard/add-article",
      icon: <AiFillFileAdd className="size-12" />,
    },
    {
      action: "إضافة خبر",
      url: "/dashboard/add-news",
      icon: <FaNewspaper className="size-12" />,
    },
    {
      action: "إضافة كاتب",
      url: "/dashboard/add-author",
      icon: <FaUserPlus className="size-12" />,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-row px-10 py-20 justify-center">
        {dashboardItems.map((item, index) => (
          <DashboardCard
            key={index}
            action={item.action}
            url={item.url}
            icon={item.icon}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardActions;
