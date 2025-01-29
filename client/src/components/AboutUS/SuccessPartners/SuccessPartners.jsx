const sponsors = [
  {
    id: 1,
    name: "وزارة التضامن الاجتماعي",
    link: "https://www.moss.gov.eg",
  },
  {
    id: 2,
    name: "وزارة الشباب والرياضة",
    link: "https://www.emys.gov.eg",
  },
  {
    id: 3,
    name: "اتحاد التنمية المهنية الشبابية",
    link: "https://manhom.com/شركات/اتحاد-التنمية-المهنية-الشبابية",
  },
  {
    id: 4,
    name: "مركز التحكيم العربي الدولي",
    link: "https://www.facebook.com/arbtration/?locale=ar_AR",
  },
  {
    id: 5,
    name: "جمعية الترابط الإنساني",
    link: "https://www.facebook.com/MoroccanEgyptianAssociationinegy",
  },
  {
    id: 6,
    name: "مؤسسة مهندسون من اجل مصر المستدامة",
    link: "https://ese-eg.com",
  },
  {
    id: 7,
    name: "مؤسسة شارعنا للرعاية والتنمية",
    link: "https://www.facebook.com/shr3na.eg",
  },
  {
    id: 8,
    name: "كيان شباب الوطن للريادة والتنمية",
    link: "https://www.facebook.com/shababelwatan",
  },
  {
    id: 9,
    name: "Team NTY",
    link: "https://www.facebook.com/TeamNTY.9com",
  },
  {
    id: 10,
    name: "إيجي جيت لريادة الأعمال ودعم المرأة",
    link: "https://www.facebook.com/profile.php?id=100083000097290",
  },
  {
    id: 11,
    name: "مؤسسة صعيد مصر",
    link: "https://www.facebook.com/profile.php?id=100082239436192",
  },
  {
    id: 12,
    name: "جمعية الريادة لتنمية الأعمال وسلاسل التوريد",
    link: "https://www.facebook.com/profile.php?id=100068578001391",
  },
  {
    id: 13,
    name: "شباب مستدام",
    link: "https://www.facebook.com/Mostadaminitiative",
  },
  {
    id: 14,
    name: "MTD",
    link: "#",
  },
  {
    id: 15,
    name: "American Canadian Academy",
    link: "https://www.linkedin.com/company/american-canadian-academy",
  },
  {
    id: 16,
    name: "AMIT learning",
    link: "https://amit-learning.com",
  },
  {
    id: 17,
    name: "YMCA",
    link: "https://www.ymca.int",
  },
  {
    id: 18,
    name: "Epic Academy",
    link: "https://www.facebook.com/epicacademy1",
  },
  {
    id: 19,
    name: "QYF School",
    link: "https://qyfschool.com",
  },
  {
    id: 20,
    name: "شركة فالكون للاستثمار الرياضي",
    link: "https://www.facebook.com/Falcon197/?locale=ar_AR",
  },
];

const SuccessPartners = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-10 lg:px-20 my-12">
      <h2 className="text-center font-extrabold text-2xl md:text-4xl pb-4 underlineR text-neutral-950 mb-8">
        شركاء <span className="text-primary relative top-1">النجاح</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 cursor-pointer">
        {sponsors.map((sponsor) => (
          <div
            data-aos="fade-down"
            key={sponsor.id}
            className="flex flex-col items-center text-center bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full">
              <img
                src={`/images/sponsors/sponsor-${sponsor.id}.png`}
                alt={sponsor.name}
                className="w-full max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 object-contain"
              />
            </a>
            <p className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-neutral-800">
              {sponsor.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessPartners;
