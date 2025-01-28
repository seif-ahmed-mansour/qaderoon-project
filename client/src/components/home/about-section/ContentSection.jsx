import { FaPlay } from "react-icons/fa6";
import Button from "../../../utils/Button";
import { Link } from "react-router-dom";
const ContentSection = () => (
  <div className="text-right" data-aos="fade-right">
    <p className="text-gray-800 text-base  md:text-xl leading-relaxed">
      بـدأت شـبـاب قـادرون كـأحـد الـكـيـانـات الـشـبـابـيـة بـوزارة الشباب
      والرياضة وبدعم ورعاية من معالى وزير الشباب والرياضة الاستاذ الدكتور / أشرف
      صـبـحـى و خلال عـامـان قدمت فعاليات و انشطة شبابية في مصر وكانت البداية
      بمؤتمر الشباب العربى فى ظل الجمهورية الجديدة برعاية سيادتكم و هى نقطة
      البداية للتواجد عربيا بعدد من البلدان الـعـربـيـة الـشـقـيقة من خلال
      الممكلة الاردنية الهاشمية حيث تلقت شباب قادرون دعوة كـريـمـة مـن وزارة
      الـشــبـاب والتنمية السياسية ومجلس النواب الاردنى لنقل تجربة شباب قادرون
      إلى الاردن الشقيقة. مما نتج عن صدى تلك الزيارة للسيد رئيس شباب قادرون /
      وائل محمد الشريف توجيه الدعـوة مـن من نحن "شباب قادرون" الديوان الـمـلـكـى
      بـالاردن لـكـوادر شباب قادرون لتأسيس شباب قادرون بالاردن وطلب العديد من
      القيادات الشبابية فى السعودية و الامارات والكويت والبحرين والمغرب لتكرار
      نفس التجربة الاردنية .
    </p>
    <div className="flex justify-start mt-6 gap-4">
      <Link to="/about/institution"><Button className="hover:scale-105 transition-transform duration-200">
        عرض المزيد
      </Button> </Link>
      
      <Button className="hover:scale-105 transition-transform duration-200">
        فيديو تعريفي <FaPlay className="mr-2" />
      </Button>
    </div>
  </div>
);

export default ContentSection;
