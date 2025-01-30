import {
  FaCalendarAlt,
  FaBullhorn,
  FaCogs,
  FaLightbulb,
  FaHandshake,
  FaTasks,
} from "react-icons/fa";

const TechnicalOffice = () => (
  <section className="mb-20 mt-28">
    <h2
      data-aos="fade-down"
      className="flex space-x-2 font-extrabold text-xl md:text-4xl pb-4 underlinee text-neutral-950 mb-8">
      <FaCogs className="text-primary text-4xl" />
      <span>المكتب الفني – مؤسسة شباب قادرون</span>
    </h2>

    <p
      data-aos="fade-down"
      className="text-base font-bold mb-10 text-gray-700 leading-relaxed">
      المكتب الفني هو الوحدة المسؤولة عن تقديم الدعم الفني والتقني للمبادرات
      والأنشطة التي تنفذها مؤسسة شباب قادرون، ويعمل على تحسين الأداء وضمان تنفيذ
      المشاريع بشكل مبتكر وفعال. يهدف المكتب إلى توفير الحلول التقنية المناسبة
      وتطوير البرامج التي تساهم في تحقيق أهداف المؤسسة.
    </p>
    {/* المهام والمسؤوليات */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        data-aos="fade-down"
        className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaCogs className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          الدعم الفني والتقني
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>تقديم الاستشارات الفنية لدعم الأنشطة والمشاريع.</li>
          <li>
            تطوير وتنفيذ الأنظمة والبرامج التقنية التي تساهم في رفع كفاءة العمل.
          </li>
          <li>متابعة أحدث الاتجاهات التقنية واستخدامها لتحسين الأداء.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaTasks className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          التخطيط الاستراتيجي
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>
            وضع الخطط الفنية والتقنية لتحقيق الأهداف الاستراتيجية للمؤسسة.
          </li>
          <li>تحديد الأولويات التقنية وتوفير الحلول المناسبة لكل مشروع.</li>
          <li>تطوير خطط الطوارئ لمواجهة التحديات التقنية المحتملة.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaBullhorn className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          التدريب والتطوير
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>
            إعداد المحتوى التدريبي للفرق الفنية والإدارية لضمان إلمامهم
            بالتقنيات الحديثة.
          </li>
          <li>
            توفير ورش العمل والدورات التدريبية لتحسين المهارات الفنية لدى
            الأفراد.
          </li>
          <li>
            متابعة الأداء الفني وتقديم الدعم المستمر للتطوير الشخصي والتقني.
          </li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaHandshake className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          التنسيق مع الشركاء
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>
            التعاون مع الشركات التقنية، الجامعات، والمختصين لتطوير الحلول
            الفنية.
          </li>
          <li>
            بناء شراكات مع الجهات الحكومية والقطاع الخاص لدعم المبادرات التقنية.
          </li>
          <li>تنسيق العمل بين الفرق الفنية لضمان تنفيذ المشاريع بكفاءة.</li>
        </ul>
      </div>
    </div>

    {/* الأهداف العامة للمكتب الفني */}
    <h3
      data-aos="fade-down"
      className="text-2xl font-extrabold text-neutral-950 mb-8 mt-8">
      الأهداف العامة للمكتب الفني
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
        data-aos="fade-down"
        className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaCalendarAlt className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            دعم المبادرات والبرامج
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          تقديم الدعم الفني والمشورة لضمان نجاح المبادرات والبرامج.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaLightbulb className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            الابتكار والتحول الرقمي
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          تطوير الحلول التقنية التي تسهم في تحسين الأداء والابتكار داخل المؤسسة.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaHandshake className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            تعزيز التعاون والشراكات
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          بناء شراكات استراتيجية تدعم التطور التقني للمؤسسة.
        </p>
      </div>
    </div>
  </section>
);

export default TechnicalOffice;
