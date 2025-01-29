import { FaArrowLeft } from "react-icons/fa";
import "./EgyptVision.css";

const data = {
  title: "رؤية مصر",
  visionArray: [
    `أطلقتْ جمهورية مصر العربية عام 2016 النسخةَ الأولى من استراتيجية التنمية المستدامة: رؤية مصر 2030، كنقطة ارتكاز أساسية لمسيرة التنمية الشاملة، آخذةً بعين الاعتبار الأولويات والطموحات الوطنية لرسم خارطة طريق تُحقّق التنمية المستدامة، وتلبِّي أحلام الشعب المصري وتطلعاته في الحياة الكريمة اللائقة، بما يُعظِّم الاستفادة من جميع مُقوّمات الدولة المصرية وإمكاناتها.`,
    `ونظرًا إلى ما شهدته السنوات السبع السابقة من تغيّرات وتحدّيات دوليّة وإقليميّة ومحلّية، سعتْ وزارة التخطيط والتنمية الاقتصادية إلى تحديث النسخة الأولى من الرؤية، عن طريق عملية تشاركية تضافرتْ فيها جهود جميع الفاعلين وشركاء التنمية من الجهات الحكومية، وممثلي القطاع الخاص والمجتمع المدني، مع الاستعانة بمجموعة متميّزة من الخبراء والأساتذة الأكاديميين وذوي الخبرة من جميع التخصّصات.`,
    `وفي هذا الإطار، تم إصدار النسخة المحدثة من "رؤية مصر 2030" والتي حددت أربعة مبادئ حاكمة تمثل الركائز الرئيسية التي تحكم تنفيذ الأهداف الاستراتيجية الستة للرؤية باستخدام سبعة ممكنات تمثل أدوات لتسريع تحقيق التنمية المستدامة في مصر.`,
    `كما تتضمَّن الرؤية المحدثة عددًا من المؤشرات الاستراتيجية لمتابعة الأداء والتقدّم المُحرَز، مع تحديد المستهدفات الكمية المرجو الوصول إليها، بهدف المتابعة والتقييم والمراجعة، ومن ثَمَّ تحسين الأداء بصورة دورية.`,
  ],
  button: "معرفة المزيد",
};

const EgyptVision = () => {
  return (
    <>
      <section className="flex flex-col place-items-center p-7 ev-section pb-10 ">
        <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR mb-6 text-stone-100">
          {data.title} <span className="text-primary relative top-1">2030</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-stone-100 container place-items-center">
          <div className="space-y-5">
            {data && data.visionArray.map((t, index) => <p key={index}>{t}</p>)}

            <button className="ev-button bg-secondary group">
              <p>{data.button}</p>
              <FaArrowLeft className="ev-arrow group-hover:-translate-x-2" />
            </button>
          </div>
          <img
            src="/images/egypt-vision.png"
            loading="lazy"
            className="rounded object-scale-down hidden lg:block"
            alt={data.title}
          />
        </div>
      </section>
    </>
  );
};

export default EgyptVision;
