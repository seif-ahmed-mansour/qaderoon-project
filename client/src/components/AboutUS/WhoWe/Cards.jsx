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
      icon: <FaHandshake className="text-white w-12 h-12" />,
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
      {data.map((object, index) => {
        // Determine the appropriate heading level based on its index or context
        // If this is a list of sections, you might want to use <h2> or <h3> accordingly
        // In this case, let's assume <h2> is appropriate for this section
        const HeadingTag = index === 0 ? "h2" : "h3"; // Example to use <h2> for the first item, then <h3> for others
        return (
          <div
            data-aos="fade-up"
            className="bg-whiet shadow-black/40 rounded-xl shadow-sm hover:shadow-md transform transition-all duration-300 hover:scale-105 cursor-pointer"
            key={object.title}>
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="bg-primary p-4 rounded-full shadow-md transition-transform transform hover:scale-110">
                  {/* Render the icon dynamically */}
                  {typeof object.icon === "string" ? (
                    <img
                      loading="lazy"
                      src={object.icon}
                      alt="icon"
                      className="w-12 h-12 "
                    />
                  ) : (
                    object.icon
                  )}
                </div>
              </div>
              {/* Use the dynamically determined HeadingTag */}
              <HeadingTag className="font-semibold text-2xl text-gray-800 mb-4">
                {object.title}
              </HeadingTag>
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
