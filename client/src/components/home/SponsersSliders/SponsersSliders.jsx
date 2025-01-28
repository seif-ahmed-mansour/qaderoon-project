import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./SponsersSliders.css";

const sponsors = [
  {
    id: 1,
    logo: "/images/sponsors/وزارة التضامن الاجتماعي.png",
    name: "وزارة التضامن الاجتماعي",
    link: "https://www.moss.gov.eg/",
  },
  {
    id: 2,
    logo: "/images/sponsors/وزارة الشباب والرياضة.png",
    name: "وزارة الشباب والرياضة",
    link: "https://www.emys.gov.eg/",
  },
  {
    id: 3,
    logo: "/images/sponsors/اتحاد التنمية المهنية الشبابية.png",
    name: "اتحاد التنمية المهنية الشبابية",
    link: "https://manhom.com/شركات/اتحاد-التنمية-المهنية-الشبابية/",
  },
  {
    id: 4,
    logo: "/images/sponsors/مركز التحكيم العربي الدولي.png",
    name: "مركز التحكيم العربي الدولي",
    link: "https://www.facebook.com/arbtration/?locale=ar_AR",
  },
  {
    id: 5,
    logo: "/images/sponsors/جمعية الترابط الإنساني.png",
    name: "جمعية الترابط الإنساني",
    link: "https://www.facebook.com/MoroccanEgyptianAssociationinegy/",
  },
  {
    id: 6,
    logo: "/images/sponsors/مؤسسة مهندسون من اجل مصر المستدامة.png",
    name: "مؤسسة مهندسون من اجل مصر المستدامة",
    link: "https://ese-eg.com/",
  },
  {
    id: 7,
    logo: "/images/sponsors/مؤسسة شارعنا للرعاية والتنمية.png",
    name: "مؤسسة شارعنا للرعاية والتنمية",
    link: "https://www.facebook.com/shr3na.eg/",
  },
  {
    id: 8,
    logo: "/images/sponsors/كيان شباب الوطن للريادة والتنمية.png",
    name: "كيان شباب الوطن للريادة والتنمية",
    link: "https://www.facebook.com/shababelwatan/",
  },
  {
    id: 9,
    logo: "/images/sponsors/Team NTY.png",
    name: "Team NTY",
    link: "https://www.facebook.com/TeamNTY.9com",
  },
  {
    id: 10,
    logo: "/images/sponsors/إيجي جيت لريادة الأعمال ودعم المرأة.png",
    name: "إيجي جيت لريادة الأعمال ودعم المرأة",
    link: "https://www.facebook.com/p/%D8%A5%D9%8A%D8%AC%D9%8A-%D8%AC%D9%8A%D8%AA-%D9%84%D8%B1%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84-%D9%88%D8%AF%D8%B9%D9%85-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9-100083000097290/?locale=ar_AR",
  },
  {
    id: 11,
    logo: "/images/sponsors/مؤسسة صعيد مصر.png",
    name: "مؤسسة صعيد مصر",
    link: "https://www.facebook.com/profile.php?id=100082239436192"
  },
  {
    id: 12,
    logo: "/images/sponsors/جمعية الريادة لتنمية الأعمال وسلاسل التوريد.png",
    name: "جمعية الريادة لتنمية الأعمال وسلاسل التوريد",
    link: "https://www.facebook.com/p/Reyada-Association-for-Business-Development-and-Supply-Chain-100068578001391/?_rdr"
  },
  {
    id: 13,
    logo: "/images/sponsors/شباب مستدام.png",
    name: "شباب مستدام",
    link: "https://www.facebook.com/Mostadaminitiative/"
  },
  {
    id: 14,
    logo: "/images/sponsors/Training and Business Development.png",
    name: "MTD",
    link: "#",
  },
  {
    id: 15,
    logo: "/images/sponsors/american canadian academy.png",
    name: "American Canadian Academy",
    link: "https://www.linkedin.com/company/american-canadian-academy",
  },
  {
    id: 16,
    logo: "/images/sponsors/AMIT learning.png",
    name: "AMIT learning",
    link: "https://amit-learning.com/"
  },
  {
    id: 17,
    logo: "/images/sponsors/YMCA.png",
    name: "YMCA",
    link: "https://www.ymca.int/",
  },
  {
    id: 18,
    logo: "/images/sponsors/EPIC.png",
    name: "Epic Academy",
    link: "https://www.facebook.com/epicacademy1"
  },
  {
    id: 19,
    logo: "/images/sponsors/QYF School.png",
    name: "QYF School",
    link: "https://qyfschool.com/"
  },
  {
    id: 20,
    logo: "/images/sponsors/شركة فالكون للاستثمار الرياضي.png",
    name: "شركة فالكون للاستثمار الرياضي",
    link: "https://www.facebook.com/Falcon197/?locale=ar_AR"
  },
];

const SponsorsSlider = () => {
  return (
    <div className="sponsors-slider-container container w-full mx-auto px-3 md:px-1 my-16">
      {/* Title Section */}
      <h2 className="font-extrabold text-3xl md:text-4xl pb-5 ev-title-sponsors mb-6 text-neutral-950">
        شركاء <span className="text-primary relative top-1">النجاح</span>
      </h2>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1500 }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className="mySwiper mt-14"
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide className="select-none" key={sponsor.id}>
            <div className="sponsor-card w-full h-full flex flex-col justify-center items-center">
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="object-contain w-full max-h-30"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorsSlider;
