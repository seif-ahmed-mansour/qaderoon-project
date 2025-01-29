/**
 * @typedef {Object} Author
 * @property {string} id - Name of the author.
 * @property {string} name - Name of the author.
 * @property {string} title - Title or role of the author.
 */

/**
 * @typedef {Object} Article
 * @property {string} id - Unique identifier for the post.
 * @property {string} title - Title of the post.
 * @property {Author} author - Details about the author.
 * @property {string} content - Array of paragraphs representing the post content.
 */

/**
 * Represents an array of Article.
 * @type {Array<Article>}
 */
export default [
  {
    title: "الشباب ... أمل الأوطان وثروة المستقبل",
    image: "1738077815768-531028839-mission.jpg",
    author: {
      name: "وائل محمد الشريف",
      title: "رئيس مجلس الامناء لمؤسسة شباب قادرون للتنمية المستدامة",
    },
    content: `# الشباب ... أمل الأوطان وثروة المستقبل

تزدهر الأوطان بشبابها، فهم القلب النابض لأي مجتمع والركيزة التي يقوم عليها بناء الحضارات والإنجازات. الشباب ليسوا فقط
القوة العاملة التي تحرك عجلة الاقتصاد وتنشط التنمية، بل هم أيضًا صناع القرارات وقادة التغيير الذين يبنون المستقبل
بتطلعاتهم وأفكارهم المبدعة.

الشباب يمثلون الدم الذي يجري في عروق الوطن، وهم من يحملون راية التطور والابتكار ليضعوا أوطانهم في مصاف الأمم المتقدمة.
بعزيمتهم وقدرتهم على التغيير، يتحول الظلام إلى نور، والفساد إلى صلاح، والضلال إلى هدى. لكن هذا الدور الفاعل للشباب لا
يتحقق إلا إذا أُسس على مبادئ وأخلاق حميدة، وهو ما يعكس مسؤولية المجتمع في تهيئة البيئة المناسبة لهم، من خلال تقديم
الدورات التوعوية والمرافق الترفيهية، وإطلاق المبادرات التي تستثمر طاقاتهم في مجالات تخدم الوطن.

كما أن الأهل يقع على عاتقهم مسؤولية كبيرة في غرس القيم النبيلة والمبادئ السامية منذ الصغر، ليصبح الشباب قادرين على التمييز بين الخير والشر، واتخاذ قرارات واعية تعود بالنفع على أنفسهم ومجتمعهم.

لقد أكد الرسول الكريم -صلى الله عليه وسلم- في حديثه الشريف على أهمية تنشئة الشباب تربية صالحة، فقال: (سبعة يظلهم الله في ظله يوم لا ظل إلا ظله: إمام عادل، وشاب نشأ في عبادة الله...). فهذا الحديث يبرز قيمة الشباب الذين يترعرعون على الأخلاق الحميدة والقيم الدينية، ويُعد دليلاً قاطعًا على أهمية دورهم في بناء مجتمع متماسك وقوي.

على الشباب أن يستثمروا أوقاتهم وجهودهم في بناء أنفسهم وخدمة مجتمعاتهم، مبتعدين عن مظاهر اللهو والرفقة السيئة التي تفسد الأخلاق وتُهدر الطاقات. يجب أن يتحلوا بالأمل والتفاؤل، وأن يخلقوا الفرص بدلًا من انتظارها، متسلحين بالإرادة والرؤية لتحقيق طموحاتهم وأهدافهم.

الشباب مرحلة عمرية ليست دائمة، وإذا لم يستغلها الإنسان بالشكل المطلوب، فإن الندم يصبح ملازمًا له. لذلك، علينا جميعًا -كمؤسسات وأفراد- أن نوفر لهم كل ما يلزم لتطوير إمكانياتهم وتحقيق أحلامهم. فالشباب هم ثروة اليوم وكنز المستقبل، وأساس كل تغيير نحو الأفضل.

إننا نؤمن بأن الشباب هم صُنَّاع المستقبل، ونسعى من خلال برامجنا ومبادراتنا إلى تمكينهم ودعمهم ليكونوا قادة التنمية وشركاء في بناء مجتمعات مستدامة. رؤيتنا تعتمد على توجيه طاقاتهم وإبداعهم لتحقيق أهدافهم الشخصية وخدمة أوطانهم.

ختامًا، شباب مصر: أنتم الحاضر الزاهر والمستقبل الواعد، فاجعلوا من طاقاتكم أداة للبناء والتطوير، وتذكروا دائمًا أنكم الأمل الذي ينهض به الوطن بين الأمم.`,
    createdAt: new Date(),
  },
  {
    title: "المرونة النفسية والذكاء العاطفي مفتاح القدرة على إحداث التغيير",
    image: "1738077815768-531028839-mission.jpg",
    author: {
      name: "د. محمد حسين سمير",
      title: `أستاذ الإدارة بجامعة لندن
رئيس المجلس الإستشاري لـرواد مصر  2030`,
    },
    content: `# المرونة النفسية والذكاء العاطفي مفتاح القدرة على إحداث التغيير

في عصرٍ يشهد تغيّرات متسارعة على جميع الأصعدة، أصبح النجاح المؤسسي والشخصي مرتبطا بشكل وثيق بمدى قدرة الأفراد والقادة على التكيّف مع المتغيرات وإحداث تغيير إيجابي وفعّال.

في هذا السياق، تلعب المرونة النفسية (Resilience) والذكاء العاطفي دورا حاسما في تمكين الأفراد من التغلب على التحديات وتحقيق التغيير المنشود.

## المرونة النفسية وفنّ التعامل مع التحديات

المرونة النفسية هي قدرة الفرد على التعافي من الصدمات والتحديات، والاستمرار في مواجهة الأزمات بروح إيجابية، وهذه المهارة ليست مجرد قوة نفسية خام، بل هي مزيج من المهارات والسلوكيات التي يمكن تطويرها وصقلها.

القادة الذين يمتلكون المرونة النفسية يتميَّزون بقدرتهم على:

1. التكيّف مع الضغوط: بدلا من الانهيار تحت وطأة التغيير، يجدون طرقا جديدة للتعامل مع الأوضاع المعقّدة.

2. التعلّم من الفشل: يرون في الفشل فرصة للنمو وتطوير استراتيجيات أكثر كفاءة.

3. التواصُل الفعّال: يتعاملون مع التحديات من خلال بناء شبكات دعم قوية، تسهم في تخفيف الضغوط وتحقيق الأهداف.

## الذكاء العاطفي: حجر الزاوية في القيادة المؤثّرة

في قلب القدرة على إحداث التغيير يكمن الذكاء العاطفي، وهو مهارة تتعلّق بفهم وإدارة المشاعر الذاتية ومشاعر الآخرين، فالقادة الذين يتحلّون بالذكاء العاطفي لديهم القدرة على:

1. التواصُل بفعالية: تعزيز الثقة مع فِرق العمل وإيصال رسائل التغيير بروح إيجابية.

2. فَهم مشاعر الفريق: يميّزون مشاعر القلق أو المقاومة التي قد تنشأ في أثناء التغيير، ويتعاملون معها بحساسية ودراية.

3. إلهام الآخرين: يحفّزون فرقهم مِن خلال خلق رؤية واضحة ومستقبل مشرق للتغيير.

## إدارة الضغوط كأداة قيادية لإحداث التغيير

تعدّ إدارة الضغوط مهارة استراتيجية أخرى لا غنى عنها لقيادة التغيير.

القادة الفعّالون قادرون على التعامل مع الضغوط، ليس فقط على المستوى الشخصي، لكن أيضا على مستوى فريق العمل، من خلال:

1. التحكّم في الأجواء التنظيمية: خلق بيئة عمل داعمة، تقلل من القلق، وتعزز الشعور بالاستقرار في أثناء التغيير.

2. تفويض المهام بذكاء: توزيع المسؤوليات بشكل يوازن بين الأعباء، ويمنح الفريق إحساسا بالمشاركة.

3. تعزيز المرونة التنظيمية: تدريب الفرق على التكيّف مع التحديات وإدارة المواقف الصعبة بشكل جماعي.`,
    createdAt: new Date(),
  },
  {
    title:
      "أبرز 10 اتجاهات للمؤسسات الصغيرة والمتوسطة ومتناهية الصغر لعام 2024",
    image: "1738077815768-531028839-mission.jpg",
    author: {
      name: "المهندس/ مجدي وهبه",
      title: `عضو مجلس إدارة المجلس العالمي للمشروعات الصغيرة ICSB
خبير أول بالاتحاد الأوربي في مجال تطوير التعليم
عضو المجلس الإستشاري لـرواد مصر  2030`,
    },
    content: `# أبرز 10 اتجاهات للمؤسسات الصغيرة والمتوسطة ومتناهية الصغر لعام 2024

مستقبل المشروعات هو نسيج دائم التطور من الابتكار وريادة الأعمال والتَكَيُف. بينما نتطلع نحو آفاق عام جديد يدعوك المجلس الدولي للمشروعات الصغيرة (ICSB) إلى رحلة إلى هذا المشهد الديناميكي للمؤسسات الصغيرة والمتوسطة الحجم (MSMEs) في جميع أنحاء العالم. وهذه الاتجاهات التي نقدمها لكم ليست مجرد تخمينات؛ أهم عشرة اتجاهات سنوية لعام 2024 للمشروعات متناهية الصغر والصغيرة والمتوسطة.

تتضمن هذه الاتجاهات عشر اتجاهات، أعرضها من الأدنى للأعلى:

1. تشكيل مشهد المشروعات متناهية الصغر والصغيرة والمتوسطة، ويسلط الضوء على تشكيل التحالفات التعاونية - وهو مفهوم قديم مملوء بحيوية جديدة. ويظهر باعتباره الاتجاه رقم 1 للشركات الصغيرة والمتوسطة، حيث يقدم مسارًا تحويليًا للأمام.
2. من الأهمية بمكان التأكيد على أهمية تعزيز السلام من أجل التنمية الاقتصادية والازدهار .
3. سيصبح الذكاء الاصطناعي (AI) هو الاتجاه رقم 3، مما سيغير مشهد الأعمال بشكل كبير. يصل التأثير التحويلي للذكاء الاصطناعي إلى مختلف الصناعات، ويعيد تشكيل العمليات، وعمليات صنع القرار، وتفاعلات العملاء.
4. سوف تُعَد الأعمال الزراعية والتكنولوجيا الزراعية من أهم الاتجاهات للشركات الصغيرة والمتوسطة ومتناهية الصغر في أفريقيا. ولا تزال الزراعة تشكل حجر الزاوية في الاقتصاد الأفريقي
5. سوف يبرز "اقتصاد التسليم" باعتباره اتجاهًا يغير قواعد اللعبة بالنسبة للشركات الصغيرة والمتوسطة الحجم. ويعكس هذا الاتجاه تحولًا كبيرًا في تفضيلات المستهلك، حيث يتم تسليم كل شيء تقريبًا مباشرة إلى باب العميل.
6. ستظهر نماذج أعمال الاقتصاد الدائري باعتبارها الاتجاه الرئيسي للمشروعات متناهية الصغر والصغيرة والمتوسطة، مما يؤكد الالتزام المتزايد بالاستدامة والحد من النفايات. يتضمن هذا الاتجاه إعادة تصور سلاسل التوريد الخطية التقليدية ودورات حياة المنتج لإنشاء نهج عمل أكثر استدامة ومسئولية بيئية.
7. تمكين النساء والشباب في المؤسسات الصغيرة والمتوسطة ومتناهية الصغر
8. سوف تحتل ريادة الأعمال الإنسانية (Human Entrepreneurship) مكانتها باعتبارها الاتجاه رقم 8 للمؤسسات الصغيرة والمتوسطة ويعكس هذا الاتجاه وعيًا متزايدًا بالدور المحوري للتدريب والتوجيه. في رعاية إمكانات الموظفين داخل هذه الشركات.
9. السياحة والرياضة لتنمية ونمو المشروعات متناهية الصغر والصغيرة والمتوسطة، كأحد المجالات الهامة للمشروعات.
10. الوصول إلى التمويل المستدام للمشروعات متناهية الصغر والصغيرة والمتوسطة

باختصار: يجب على المشروعات متناهية الصغر والصغيرة والمتوسطة أن تستمر في الصمود ولكن مع التركيز على الابتكار والعمل السريع.
`,
    createdAt: new Date(),
  },
];
