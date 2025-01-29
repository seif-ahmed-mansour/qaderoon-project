import {
  FaClipboardList,
  FaCalendarAlt,
  FaBullhorn,
  FaCogs,
  FaUsersCog,
} from "react-icons/fa";

const ExecutiveOffice = () => (
  <section className="mb-20 mt-20">
    <h2 className="flex space-x-2 font-extrabold text-2xl md:text-4xl pb-4 underlinee text-neutral-950 mb-8">
      <FaCalendarAlt className="text-primary text-4xl" />
      <span>المكتب التنفيذي – مؤسسة شباب قادرون</span>
    </h2>

    <p className="text-lg font-bold mb-10 text-gray-700 leading-relaxed">
      المكتب التنفيذي هو الواجهة الرئيسية لمؤسسة شباب قادرون، والمسؤولة عن تنظيم
      المبادرات وإدارة الفعاليات والندوات والمؤتمرات التي تخص المؤسسة. تهدف
      المكتب إلى ضمان نجاح جميع الفعاليات من خلال تقديم حلول مبتكرة وغير
      تقليدية، مع التركيز على متابعة تطور عمل اللجان الأخرى وتسهيل التواصل بينها
      وبين الإدارة.
    </p>
    {/* المهام والمسؤوليات */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaCalendarAlt className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          تنظيم المبادرات والفعاليات
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>
            تخطيط شامل لجميع جوانب الفعالية، بما في ذلك إعداد البرامج، تحديد
            الأماكن، وتنسيق الجداول الزمنية.
          </li>
          <li>
            إدارة جميع التفاصيل اللوجستية مثل التسجيل، التجهيزات الفنية،
            والاستضافة.
          </li>
          <li>التنسيق مع الأطراف المعنية لضمان تنظيم فعاليات سلسة ومميزة.</li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaCogs className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          التنسيق بين اللجان
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>التأكد من تنسيق العمل بين مختلف اللجان التنظيمية.</li>
          <li>دعم الفعاليات من خلال تقديم التوجيهات والمساعدة.</li>
          <li>مراقبة التقدم وتقديم الحلول لأي مشاكل تطرأ.</li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaBullhorn className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          التواصل والدعاية
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>إعداد الحملات الدعائية والإعلانية للمبادرات.</li>
          <li>تنظيم المؤتمرات الصحفية والظهور الإعلامي.</li>
          <li>التفاعل مع الجمهور والمؤسسات الشريكة لضمان النجاح.</li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaUsersCog className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          إدارة العلاقات العامة
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>إدارة العلاقات مع الشركاء والرعاة والجهات المعنية.</li>
          <li>التنسيق بين مختلف الأطراف لتسهيل تبادل المعلومات.</li>
          <li>تطوير استراتيجيات التعاون طويلة الأمد.</li>
        </ul>
      </div>
    </div>

    {/* أهداف المكتب التنفيذي */}
    <h3 className="text-2xl font-extrabold text-neutral-950 mb-8 mt-8">
      أهداف المكتب التنفيذي
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaCalendarAlt className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            تنظيم فعاليات متميزة
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          العمل على تنظيم فعاليات متميزة ومتكاملة تسهم في تحقيق أهداف المؤسسة
          وتلبي احتياجات المشاركين.
        </p>
      </div>

      <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaBullhorn className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">خلق بيئة محفزة</h4>
        </div>
        <p className="text-gray-600 text-lg">
          خلق بيئة محفزة تزيد من تفاعل المشاركين وتشجعهم على المساهمة الفعالة في
          الفعاليات.
        </p>
      </div>

      <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaCogs className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            تطوير حلول غير تقليدية
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          تطوير حلول غير تقليدية تسهم في تحسين تنظيم الفعاليات وتعزيز تجربة
          الحضور.
        </p>
      </div>

      <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaUsersCog className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            ضمان التنسيق بين اللجان
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          ضمان سهولة التنسيق بين جميع اللجان المختلفة لتحقيق تكامل وتنظيم محكم
          لجميع الأنشطة.
        </p>
      </div>

      <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaClipboardList className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            تحسين فعالية الإدارة
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          تحسين فعالية إدارة الفعاليات من خلال إدارة دقيقة لكل التفاصيل
          اللوجستية والبروتوكولات.
        </p>
      </div>
      
    </div>
  </section>
);

export default ExecutiveOffice;
