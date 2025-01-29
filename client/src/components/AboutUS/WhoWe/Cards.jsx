import { FaHandshake } from "react-icons/fa";

const Cards = () => {
  const data = [
    {
      title: "الرؤيه",
      icon: "/images/WhoWe/see-svgrepo-com.svg",
      para: "صناعة جيل شبابي واعي قادر علي بناء مستقبل وطنه",
    },
    {
      title: "الاهداف",
      icon: <FaHandshake className="text-black w-12 h-12" />,
      para: "نعمل علي نشر الوعي الوطني و تنمية قدرات الشباب و دعم البحث العلمي و التشجيع علي الابتكار وريادة الاعمال والمشاركة المجتمعية والتطوعية ودعم رؤية مصر 2030 للتنمية المستدامة",
    },
    {
      title: "رسالة",
      icon: "/images/WhoWe/personal-network-2-svgrepo-com.svg",
      para: "رفع كفاءة الشباب من خلال توسيع الخيارات المتاحه لهم وبناء قدراتهم للمشاركة في صنع مستقبل ايجابي مستدام لوطنهم",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-2">
      {data.map((object) => {
        return (
          <div
            data-aos="fade-up"
            className="bg-white shadow-black/40 rounded-xl shadow-sm hover:shadow-md transform transition-all duration-300 hover:scale-105 cursor-pointer"
            key={object.title}>
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="bg-red-100 p-4 rounded-full shadow-md transition-transform transform hover:scale-110">
                  {/* Render the icon dynamically */}
                  {typeof object.icon === "string" ? (
                    <img
                      src={object.icon}
                      alt="icon"
                      className="w-12 h-12 text-red-600"
                    />
                  ) : (
                    object.icon
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-2xl text-gray-800 mb-4">
                {object.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {object.para}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
