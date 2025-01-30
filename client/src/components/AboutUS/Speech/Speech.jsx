import "./speech.css";

function Speech() {
  return (
    <div
      data-aos="fade-down"
      className="container items-center gap-6 p-6  mx-auto my-6 lg:my-20">
      <h2 className="font-extrabold text-2xl md:text-4xl pb-5 underlinee text-neutral-950 mb-6 ">
        كلمة <span className="text-primary relative">رئيس المؤسسة</span>
      </h2>
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        {/* Image Section Mobile */}
        <div className="w-full xl:w-1/2 flex xl:hidden justify-center">
          <img
            loading="lazy"
            src="/images/WhoWe/Speech/Head-of-the-institution.jpg"
            alt="Head of the institution"
            className="rounded-xl shadow-md h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full xl:w-2/3">
          <p className="text-base md:text-xl text-gray-800 " style={{ lineHeight: "1.8" }}>
            في <span className="text-secondary font-semibold">شباب قادرون</span>
            ، نؤمن بأن الابتكار وريادة الأعمال هما الأساس لتحقيق تنمية اقتصادية
            واجتماعية مستدامة في مصر والوطن العربي. رؤيتنا ترتكز على بناء مجتمع
            مزدهر يعتمد على تمكين الشباب ودعمهم لتحويل أفكارهم إلى مشاريع ريادية
            مؤثرة. نسعى جاهدين لبناء قدرات الشباب وتمكينهم من مواجهة التحديات
            المتجددة من خلال برامج ومبادرات تعزز مشاركتهم الفعالة. نحن نعمل
            بتعاون وثيق مع الجهات الحكومية والخاصة، ومع شركائنا الإقليميين
            والدوليين، لتعزيز مهاراتهم الريادية والإبداعية وإعدادهم ليكونوا قادة
            قادرين على بناء مستقبل أفضل. نؤمن بأن تمكين المرأة هو ركيزة أساسية
            لتحقيق التنمية المستدامة، كما نولي اهتمامًا خاصًا بقضايا البيئة
            والتكنولوجيا باعتبارهما عوامل رئيسية للنمو والتقدم. دعم البحث العلمي
            والمشروعات الناشئة والصناعة هو جزء لا يتجزأ من استراتيجيتنا، حيث
            نعمل على تعزيز الابتكار في كافة القطاعات الاقتصادية لضمان تقدم
            مستدام. في{" "}
            <span className="text-secondary font-semibold">شباب قادرون</span>،
            نعتبر أن التنمية المستدامة مسؤولية مشتركة، وتتطلب تكاتف الجهود بين
            جميع الأطراف. ومن خلال شراكاتنا الاستراتيجية ودعم الابتكار، نواصل
            العمل لتحقيق تنمية شاملة تلبي تطلعات الشباب وتواكب أهداف{" "}
            <span className="text-secondary font-semibold">
              الاستراتيجية الوطنية لمصر 2030
            </span>
            .
            <br />
            <br />
            <span className="font-bold text-secondary">
              وائل محمد الشريف
            </span>{" "}
            <br />
            <span className="font-bold text-secondary">
              رئيس مجلس الأمناء
            </span>{" "}
            <br />
            <span className="font-bold text-secondary">
              رئيس مؤسسة شباب قادرون للتنمية المستدامة
            </span>
          </p>
        </div>

        {/* Image Section Desktop*/}
        <div className="w-full xl:w-1/2 hidden xl:flex justify-center">
          <img
            loading="lazy"
            src="/images/WhoWe/Speech/Head-of-the-institution.jpg"
            alt="Head of the institution"
            className="rounded-xl shadow-md h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Speech;
