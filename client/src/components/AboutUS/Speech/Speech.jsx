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
            src="/images/WhoWe/Speech/Head-of-the-institution.jpg"
            alt="Head of the institution"
            className="rounded-xl shadow-md h-auto"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full xl:w-2/3">
            <p className="text-base md:text-xl text-gray-800 ">
                في <span className="text-secondary">شباب قادرون</span>، نؤمن بأن 
                <span className="text-secondary"> الابتكار </span> و 
                <span className="text-secondary"> ريادة الأعمال </span> هما الأساس لتحقيق 
                <span className="text-secondary"> تنمية اقتصادية واجتماعية مستدامة </span> 
                في <span className="text-secondary"> مصر </span> و 
                <span className="text-secondary"> الوطن العربي </span>. رؤيتنا ترتكز على بناء 
                <span className="text-secondary"> مجتمع مزدهر </span> يعتمد على 
                <span className="text-secondary"> تمكين الشباب </span> ودعمهم لتحويل أفكارهم إلى 
                <span className="text-secondary"> مشاريع ريادية </span> تؤثر بشكل إيجابي وملموس في المجتمع.

                نسعى جاهدين لبناء <span className="text-secondary"> قدرات الشباب </span> وتمكينهم من 
                مواجهة <span className="text-secondary"> التحديات المتجددة </span> من خلال 
                <span className="text-secondary"> برامج ومبادرات </span> تهدف إلى تعزيز مشاركتهم الفعالة في مختلف القطاعات.
                نحن نعمل بتعاون وثيق مع <span className="text-secondary"> الجهات الحكومية والخاصة </span>، 
                ومع شركائنا <span className="text-secondary"> الإقليميين والدوليين </span>، 
                لتعزيز <span className="text-secondary"> مهاراتهم الريادية والإبداعية </span>، وإعدادهم ليكونوا 
                <span className="text-secondary"> قادة </span> قادرين على بناء مستقبل أفضل لأنفسهم وللمجتمعات التي ينتمون إليها.

                نؤمن بأن <span className="text-secondary"> تمكين المرأة </span> هو ركيزة أساسية في تحقيق 
                <span className="text-secondary"> التنمية المستدامة </span>، ونسعى جاهدين لتسليط الضوء على دورها الحيوي في 
                <span className="text-secondary"> تحفيز التغيير المجتمعي </span>. كما نولي اهتمامًا خاصًا بقضايا 
                <span className="text-secondary"> البيئة والتكنولوجيا </span>، باعتبارهما من العوامل الأساسية للنمو والتقدم.

                نعتبر أيضًا أن دعم <span className="text-secondary"> البحث العلمي </span> و 
                <span className="text-secondary"> المشروعات الناشئة </span> و 
                <span className="text-secondary"> الصناعة </span> هو جزء لا يتجزأ من استراتيجيتنا، حيث نعمل على تعزيز 
                <span className="text-secondary"> الابتكار </span> في كافة القطاعات الاقتصادية لضمان 
                <span className="text-secondary"> تقدم مستدام </span>.

                نحن في <span className="text-secondary"> شباب قادرون </span> نعتبر أن 
                <span className="text-secondary"> التنمية المستدامة </span> هي 
                <span className="text-secondary"> مسؤولية مشتركة </span>، وتتطلب تكاتف الجهود بين جميع الأطراف.
                ومن خلال <span className="text-secondary"> شراكاتنا الاستراتيجية </span> ودعم 
                <span className="text-secondary"> الابتكار </span>، نواصل العمل نحو تحقيق 
                <span className="text-secondary"> تنمية شاملة ومستدامة </span> تلبي تطلعات الشباب وتساهم في تلبية 
                <span className="text-secondary"> احتياجات المجتمع </span>، بما يتماشى مع أهداف 
                <span className="text-secondary"> الاستراتيجية الوطنية لمصر 2030 </span>.

                <br />
                <br />
                <span className="font-bold text-secondary"> وائل محمد الشريف </span> <br />
                <span className="font-bold text-secondary"> رئيس مجلس الأمناء </span> <br />
                <span className="font-bold text-secondary"> رئيس مؤسسة شباب قادرون للتنمية المستدامة </span>
            </p>
        </div>

        {/* Image Section Desktop*/}
        <div className="w-full xl:w-1/2 hidden xl:flex justify-center">
          <img
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
