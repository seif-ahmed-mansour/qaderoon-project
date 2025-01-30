import "./EgyptVision.css";
import Button from "../../../utils/Button";

const data = {
  title: "رؤية مصر",
  visionArray: [
    `أطلقتْ جمهورية مصر العربية عام 2016 النسخةَ الأولى من استراتيجية التنمية المستدامة: رؤية مصر 2030، كنقطة ارتكاز أساسية لمسيرة التنمية الشاملة، آخذةً بعين الاعتبار الأولويات والطموحات الوطنية لرسم خارطة طريق تُحقّق التنمية المستدامة، وتلبِّي أحلام الشعب المصري وتطلعاته في الحياة الكريمة اللائقة، بما يُعظِّم الاستفادة من جميع مُقوّمات الدولة المصرية وإمكاناتها.`,
    `ونظرًا إلى ما شهدته السنوات السبع السابقة من تغيّرات وتحدّيات دوليّة وإقليميّة ومحلّية، سعتْ وزارة التخطيط والتنمية الاقتصادية إلى تحديث النسخة الأولى من الرؤية، عن طريق عملية تشاركية تضافرتْ فيها جهود جميع الفاعلين وشركاء التنمية من الجهات الحكومية، وممثلي القطاع الخاص والمجتمع المدني، مع الاستعانة بمجموعة متميّزة من الخبراء والأساتذة الأكاديميين وذوي الخبرة من جميع التخصّصات.`,
    `وفي هذا الإطار، تم إصدار النسخة المحدثة من "رؤية مصر 2030" والتي حددت أربعة مبادئ حاكمة تمثل الركائز الرئيسية التي تحكم تنفيذ الأهداف الاستراتيجية الستة للرؤية باستخدام سبعة ممكنات تمثل أدوات لتسريع تحقيق التنمية المستدامة في مصر.`,
    `كما تتضمَّن الرؤية المحدثة عددًا من المؤشرات الاستراتيجية لمتابعة الأداء والتقدّم المُحرَز، مع تحديد المستهدفات الكمية المرجو الوصول إليها، بهدف المتابعة والتقييم والمراجعة، ومن ثَمَّ تحسين الأداء بصورة دورية.`
  ]
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

            <Button className="font-semibold"
                    link="https://www.presidency.eg/AR/%D9%85%D8%B5%D8%B1/%D8%B1%D8%A4%D9%8A%D8%A9-%D9%85%D8%B5%D8%B1-2030/"
                    target="_blank"
                    rel="noopener noreferrer">
              معرفة المزيد
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
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
