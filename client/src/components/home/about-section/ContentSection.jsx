import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../../utils/Button";

const ContentSection = () => (
  <div
    className="text-right"
    data-aos="fade-right">
    <p
      className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide"
      style={{ lineHeight: "1.8" }}>
      احد مؤسسات المجتمع المدنى بوزارة التضامن الإجتماعى بقرار وزاري قيد رقم
      ١١٤٩٢ لسنة ٢٠٢٢ عضو الجميعة العمومية لاتحاد تنظيم الكيانات الشبابية . احد
      الكيانات الشبابية الرسمية بوزارة الشباب والرياضة علي مستوى الجمهورية . احد
      الكيانات الشبابية بلجنة الكيانات الشبابية والمتطوعين بحملة السيد الرئيس
      عبدالفتاح السيسي. احد المؤسسات التى تعمل بشكل إقليمي والبداية كانت من
      الاردن وفي صدد السعودية والإمارات وعمان والبحرين والمغرب وفي ٢٠ محافظة
      داخل مصر. تعمل شباب قادرون علي تنمية قدرات الشباب المصري وتطوير مهاراتهم
      الريادية وتوفير فرص عمل لائقة للشباب وبناء الوعي والتثقيف للمجتمع ودعم
      البحث العلمي وريادة الأعمال والاستثمار وملفات المرأة والبيئة والتكنولوجيا
      ضمن استراتيجية الوطنية لمصر ٢٠٣٠.
    </p>

    <div className="flex flex-col justify-start sm:flex-col md:flex-row mt-8 md:gap-8">
      {" "}
      {/* Increased gap between buttons */}
      <Link to="/about/institution">
        <Button className="inline-flex items-center text-lg font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none transition duration-150 card-button hover:scale-105 transition-transform duration-200 px-8 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4">
          {" "}
          {/* Increased padding */}
          عرض المزيد
        </Button>
      </Link>
      <a
        target="_blank"
        href="https://youtu.be/XU18YdtyNHk?si=0axAfZTf2PY5JtcO">
        <Button className="inline-flex items-center text-lg font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary transition duration-150 card-button hover:scale-105 transition-transform duration-200 px-8 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4">
          {" "}
          {/* Increased padding */}
          فيديو تعريفي <FaPlay className="group-hover:-translate-x-2" />
        </Button>
      </a>
    </div>
  </div>
);

export default ContentSection;
