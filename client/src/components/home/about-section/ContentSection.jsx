import { FaPlay } from "react-icons/fa6";
import Button from "../../../utils/Button";
import { Link } from "react-router-dom";

const ContentSection = () => (
  <div
    className="text-right"
    data-aos="fade-right">
    <p
      className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide"
      style={{ lineHeight: "1.8" }}>
      {" "}
      بدأت مبادرة{" "}
      <span className="text-secondary">
        {'"'}شباب قادرون{'"'}
      </span>{" "}
      كإحدى الكيانات الشبابية تحت إشراف وزارة الشباب والرياضة، بدعم ورعاية من
      معالي وزير الشباب والرياضة،
      <span className="text-secondary">الأستاذ الدكتور أشرف صبحي</span>. على
      مدار عامين، قدمت المبادرة العديد من الفعاليات والأنشطة الشبابية في مصر،
      حيث كانت البداية مع
      <span className="text-secondary"> مؤتمر الشباب العربي </span> في إطار
      {'"'}الجمهورية الجديدة{'"'}، الذي رعاه معالي الوزير. توسعت المبادرة
      عربيًا، حيث بدأت في عدة دول عربية، من بينها
      <span className="text-secondary"> الأردن </span>، التي تلقت دعوة من
      <span className="text-secondary"> وزارة الشباب والتنمية السياسية </span> و
      <span className="text-secondary"> مجلس النواب الأردني </span>
      لنقل التجربة إليها. بعد زيارة ناجحة، وجه{" "}
      <span className="text-secondary">وائل محمد الشريف</span>، رئيس المبادرة،
      دعوة من
      <span className="text-secondary"> الديوان الملكي الأردني </span>
      إلى كوادر{'"'}شباب قادرون{'"'} لتأسيس الفرع الأردني. لاحقًا، تلقت المبادرة
      طلبات من قيادات شبابية في
      <span className="text-secondary">
        {" "}
        السعودية، الإمارات، الكويت، البحرين، والمغرب
      </span>{" "}
      لتكرار التجربة الناجحة.
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
        <Button className="inline-flex items-center text-lg font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none transition duration-150 card-button hover:scale-105 transition-transform duration-200 px-8 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4">
          {" "}
          {/* Increased padding */}
          فيديو تعريفي <FaPlay className="mr-2" />
        </Button>
      </a>
    </div>
  </div>
);

export default ContentSection;
