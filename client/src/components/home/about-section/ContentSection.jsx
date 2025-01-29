import { FaPlay } from "react-icons/fa6";
import Button from "../../../utils/Button";
import { Link } from "react-router-dom";

const ContentSection = () => (
  <div
    className="text-right"
    data-aos="fade-right">
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide">
      بدأت مبادرة{" "}
      <span className="text-secondary font-semibold">
        {"'"}شباب قادرون{"'"}
      </span>{" "}
      كإحدى الكيانات الشبابية تحت إشراف{" "}
      <span className="text-secondary font-semibold">
        وزارة الشباب والرياضة
      </span>
      ، بدعم ورعاية من معالي وزير الشباب والرياضة، الأستاذ الدكتور{" "}
      <span className="text-secondary font-semibold">أشرف صبحي</span>. على مدار
      عامين، قدمت المبادرة العديد من الفعاليات والأنشطة الشبابية في{" "}
      <span className="text-secondary font-semibold">مصر</span>، حيث كانت
      البداية مع{" "}
      <span className="text-secondary font-semibold">مؤتمر الشباب العربي</span>{" "}
      في إطار{" "}
      <span className="text-secondary font-semibold">
        {"'"}الجمهورية الجديدة{"'"}
      </span>{" "}
      الذي رعاه معالي الوزير. هذا المؤتمر كان نقطة الانطلاق للتوسع العربي، حيث
      بدأت المبادرة في عدة دول{" "}
      <span className="text-secondary font-semibold">عربية</span> شقيقة، ومن
      بينها{" "}
      <span className="text-secondary font-semibold">
        المملكة الأردنية الهاشمية
      </span>
      ، التي تلقت دعوة كريمة من{" "}
      <span className="text-secondary font-semibold">
        وزارة الشباب والتنمية السياسية
      </span>{" "}
      و<span className="text-secondary font-semibold">مجلس النواب الأردني</span>{" "}
      لنقل تجربة{" "}
      <span className="text-secondary font-semibold">
        {"'"}شباب قادرون{"'"}
      </span>{" "}
      إلى <span className="text-secondary font-semibold">الأردن</span>. بعد هذه
      الزيارة الناجحة، وجه السيد{" "}
      <span className="text-secondary font-semibold">وائل محمد الشريف</span>,
      رئيس{" "}
      <span className="text-secondary font-semibold">
        {"'"}شباب قادرون{"'"}
      </span>
      ، دعوة من{" "}
      <span className="text-secondary font-semibold">
        الديوان الملكي الأردني
      </span>{" "}
      إلى كوادر{" "}
      <span className="text-secondary font-semibold">
        {"'"}شباب قادرون{"'"}
      </span>{" "}
      لتأسيس الفرع الأردني للمبادرة. بعد ذلك، تلقى{" "}
      <span className="text-secondary font-semibold">
        {"'"}شباب قادرون{"'"}
      </span>{" "}
      طلبات من العديد من القيادات الشبابية في{" "}
      <span className="text-secondary font-semibold">السعودية</span>،{" "}
      <span className="text-secondary font-semibold">الإمارات</span>،{" "}
      <span className="text-secondary font-semibold">الكويت</span>،{" "}
      <span className="text-secondary font-semibold">البحرين</span>، و
      <span className="text-secondary font-semibold">المغرب</span> لتكرار نفس
      التجربة الناجحة في تلك الدول.
    </p>
    <div className="flex justify-start sm:flex-col md:flex-row mt-8 gap-6">
      <Link to="/about/institution">
        <Button className="hover:scale-105 transition-transform duration-200 text-lg px-6 py-3">
          عرض المزيد
        </Button>
      </Link>

      <a
        target="_blank"
        href="https://youtu.be/XU18YdtyNHk?si=0axAfZTf2PY5JtcO">
        <Button className="hover:scale-105 transition-transform duration-200 text-lg px-6 py-3">
          فيديو تعريفي <FaPlay className="mr-2" />
        </Button>
      </a>
    </div>
  </div>
);

export default ContentSection;
