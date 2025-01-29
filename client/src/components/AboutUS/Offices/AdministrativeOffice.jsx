import {
  FaUsers,
  FaMoneyBillWave,
  FaTasks,
  FaRegLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

const AdministrativeOffice = () => (
  <section className="mb-20">
    <h2 data-aos="fade-down" className="flex space-x-2 font-extrabold text-xl md:text-4xl pb-4 underlinee text-neutral-950 mb-8">
      <FaUsers className="text-primary text-4xl" />
      <span>المكتب الإداري – مؤسسة شباب قادرون</span>
    </h2>

    <p data-aos="fade-down" className="text-base font-bold mb-10 text-gray-700 leading-relaxed">
      المكتب الإداري هو الوحدة المسؤولة عن إدارة الشؤون الإدارية والمالية لمؤسسة
      شباب قادرون، ويعمل على توفير الدعم اللازم للأنشطة والبرامج التي تنفذها
      المؤسسة من الناحيتين الإدارية والمالية، بما يضمن سير العمل بكفاءة وفعالية.
    </p>

    {/* المهام والمسؤوليات */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div data-aos="fade-down" className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaMoneyBillWave className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          الإدارة المالية
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>إعداد الميزانية العامة للمؤسسة ومتابعة تنفيذها.</li>
          <li>
            مراقبة المصروفات والإيرادات لضمان التوافق مع السياسات المالية.
          </li>
          <li>إعداد التقارير المالية الدورية لضمان الشفافية والمساءلة.</li>
        </ul>
      </div>

      <div data-aos="fade-down" className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaUsers className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          الإدارة الشخصية
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>إدارة سجلات العاملين والمتطوعين داخل المؤسسة.</li>
          <li>تنظيم عمليات التوظيف والتدريب لضمان كفاءة الفريق.</li>
          <li>متابعة الحضور والأداء وتوفير الدعم اللازم للأفراد.</li>
        </ul>
      </div>

      <div data-aos="fade-down" className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaTasks className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          الشؤون الإدارية
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>تنظيم الوثائق والمراسلات الرسمية للمؤسسة.</li>
          <li>إدارة المكاتب والمرافق لضمان توافر بيئة عمل مريحة ومنظمة.</li>
          <li>متابعة متطلبات المؤسسة من موارد وأدوات تشغيلية.</li>
        </ul>
      </div>

      <div data-aos="fade-down" className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <FaRegLightbulb className="text-primary text-5xl mb-6" />
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          التنظيم والتخطيط
        </h4>
        <ul className="text-gray-600 text-base leading-relaxed">
          <li>وضع خطط تشغيلية لدعم الأهداف الاستراتيجية للمؤسسة.</li>
          <li>
            التنسيق مع الأقسام واللجان المختلفة لتسهيل تنفيذ الأنشطة والبرامج.
          </li>
          <li>تطوير نظم وإجراءات تنظيمية لتعزيز كفاءة العمل.</li>
        </ul>
      </div>
    </div>

    {/* أهداف المكتب */}
    <h3 data-aos="fade-down" className="text-2xl font-extrabold text-neutral-950 mb-8 mt-8">
      أهداف المكتب الإداري
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div data-aos="fade-down" className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaMoneyBillWave className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            دعم الأنشطة والبرامج
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          دعم الأنشطة والبرامج للمؤسسة من الناحية الإدارية والمالية.
        </p>
      </div>

      <div data-aos="fade-down" className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaTasks className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">ضمان سير العمل</h4>
        </div>
        <p className="text-gray-600 text-lg">
          ضمان سير العمل بشكل منظم ومتوافق مع أهداف المؤسسة.
        </p>
      </div>

      <div data-aos="fade-down" className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <FaHandsHelping className="text-primary text-4xl" />
          <h4 className="text-xl font-bold text-gray-800">
            تعزيز كفاءة الموارد
          </h4>
        </div>
        <p className="text-gray-600 text-lg">
          تعزيز كفاءة الموارد البشرية والمادية لتحقيق التأثير الإيجابي المستدام.
        </p>
      </div>
    </div>
  </section>
);
export default AdministrativeOffice;
