import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./SponsersSliders.css";

const sponsors = [
  { id: 1, logo: "/images/sponsors/Picture1.png", name: "Picture1" },
  { id: 2, logo: "/images/sponsors/Picture2.png", name: "Picture2" },
  { id: 3, logo: "/images/sponsors/Picture3.png", name: "Picture3" },
  { id: 4, logo: "/images/sponsors/Picture4.jpg", name: "Picture4" },
  { id: 5, logo: "/images/sponsors/Picture5.png", name: "Picture5" },
  { id: 6, logo: "/images/sponsors/Picture6.png", name: "Picture6" },
  { id: 7, logo: "/images/sponsors/Picture7.png", name: "Picture7" },
  { id: 8, logo: "/images/sponsors/Picture8.png", name: "Picture8" },
  { id: 9, logo: "/images/sponsors/Picture9.jpg", name: "Picture9" },
  { id: 10, logo: "/images/sponsors/Picture10.jpg", name: "Picture10" },
  { id: 11, logo: "/images/sponsors/Picture11.png", name: "Picture11" },
  { id: 12, logo: "/images/sponsors/Picture12.png", name: "Picture12" },
  { id: 13, logo: "/images/sponsors/Picture13.png", name: "Picture13" },
  { id: 14, logo: "/images/sponsors/Picture14.png", name: "Picture14" },
  { id: 15, logo: "/images/sponsors/Picture15.png", name: "Picture15" },
  { id: 16, logo: "/images/sponsors/Picture16.jpg", name: "Picture16" },
  { id: 17, logo: "/images/sponsors/Picture17.png", name: "Picture17" },
  { id: 18, logo: "/images/sponsors/Picture18.jpg", name: "Picture18" },
  { id: 19, logo: "/images/sponsors/Picture19.jpg", name: "Picture19" },
  {id: 20, logo: "/images/sponsors/Picture20.jpg", name: "Picture20"},
];

const SponsorsSlider = () => {
  return (
    <div className="sponsors-slider-container container w-full m-auto px-3 md:px-1 my-16">
      <h2 className="font-extrabold text-4xl pb-5 ev-title-sponsors mb-6 text-neutral-950">
        شركاء <span className="text-primary relative top-1">النجاح</span>
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide className="select-none" key={sponsor.id}>
            <div className="sponsor-card flex justify-center items-center">
              <img src={sponsor.logo} alt={sponsor.name} className="object-contain w-full h-32" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorsSlider;
