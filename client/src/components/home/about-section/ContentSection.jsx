import { FaPlay } from "react-icons/fa6";

const ContentSection = () => (
  <div className="text-right">
    <p className="text-gray-800 text-lg leading-relaxed">
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
      <button className="bg-gradient-to-b from-primary to-secondary text-white px-4 py-2 rounded-xl shadow-md hover:bg-green-500 hover:scale-105 transition-transform duration-200">
        معرفة المزيد
      </button>
      <button className="bg-gradient-to-b from-primary to-secondary text-white px-4 py-2 rounded-xl shadow-md hover:bg-green-500 hover:scale-105 transition-transform duration-200">
        فيديو تعريفي <FaPlay />
      </button>
    </div>
  </div>
);

export default ContentSection;
