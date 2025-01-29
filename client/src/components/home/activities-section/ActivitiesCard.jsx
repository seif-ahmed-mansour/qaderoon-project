import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./activities.css";
import { AiFillSafetyCertificate } from "react-icons/ai";

function ActivitiesCard() {
  useEffect(() => {
    AOS.init();
  }, []);

  // Array of training programs
  const trainingPrograms = [
    "سفراء الحوكمة والتحول الرقمي",
    "سفراء الاستدامة",
    "سفراء التحول الرقمي والذكاء الاصطناعي",
    "سفراء الاعلام المستدام",
    "Green Generation الجيل الأخضر",
    "سفراء الرصد البيئي والتنمية المستدامة",
    "Engineers for sustainable Future",
  ];

  return (
    <div>
      {/* Bootstrap-like container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-22">
        {/* A container for animation */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold py-3.5 underlineR w-fit mx-auto">
            أنشطة المؤسسة
          </h1>

          {/* Content and image container */}
          <div className="flex flex-col-reverse md:flex-row mt-6 gap-6">
            <div
              className="md:w-1/2 text-right"
              data-aos="fade-down"
              data-aos-duration="1500">
              <h4 className="text-2xl md:text-3xl  font-semibold text-primary mb-4">
                البرامج التدريبية
              </h4>
              <div className="space-y-0 md:space-y-2">
                {" "}
                {/* Reduced margin between items */}
                {trainingPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg flex items-center group hover:translate-x-2 hover:scale-105 transition-all duration-300">
                    <div className="border-2 border-primary rounded-full p-1 group-hover:bg-primary group-hover:border-primary cursor-default">
                      <AiFillSafetyCertificate className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <h2 className="text-xl font-semibold mr-4 group-hover:text-primary">
                      {" "}
                      {/* Added margin-right (mr-4) for spacing */}
                      {program}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/images/ac-pic.png"
              alt="pic"
              data-aos="fade-up"
              data-aos-duration="1500"
              className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
            />
          </div>
          {/* End of content and image container */}
        </div>
      </div>
    </div>
  );
}

export default ActivitiesCard;
