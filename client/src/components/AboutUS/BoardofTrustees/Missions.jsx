import {
    FaChessKing,
    FaClipboardCheck,
    FaHandshake,
    FaLightbulb,
    FaMoneyCheckAlt
} from 'react-icons/fa';
export const Missions = () => {
    const cardsData = [
        {
            id: 1,
            title: "الرؤية والاستراتيجية",
            icon: (
                <FaClipboardCheck className="w-6 h-6 text-red-600" />
            ),
            items: [
                "وضع رؤية المؤسسة وأهدافها الاستراتيجية",
                "تحديد المجالات الرئيسية للتركيز"
            ]
        },
        {
            id: 2,
            title: "اتخاذ القرارات الاستراتيجية",
            icon: (
                <FaChessKing className="w-6 h-6 text-red-600" />
            ),
            items: [
                "اتخاذ القرارات المتعلقة بالسياسات العامة والبرامج الكبيرة التي تقوم بها المؤسسة.",
                "وضع خطط عمل شاملة لضمان تنفيذ المبادرات الاستراتيجية"
            ]
        }, {
            id: 3,
            title: "مراقبة الأداء والتقدم",
            icon: (
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            items: [
                "متابعة الأداء العام للمؤسسة وتقييم مدى نجاح الفعاليات والمشاريع التي يتم تنفيذها.",
                "متابعة الأداء العام للمؤسسة وتقييم مدى نجاح الفعاليات والمشاريع التي يتم تنفيذها."
            ]
        },
        {
            id: 4,
            title: "إدارة الموارد المالية",
            icon: (
                <FaMoneyCheckAlt className="w-6 h-6 text-red-600" />
            ),
            items: [
                "توفير الدعم المالي للمؤسسة والموافقة على الموازنة السنوية.",
                "البحث عن شراكات استراتيجية ومستدامة تساهم في تمويل مشاريع المؤسسة."
            ]
        },
        {
            id: 5,
            title: "تمثيل المؤسسة",
            icon: (
                <FaHandshake className="w-6 h-6 text-red-600" />
            ),
            items: [
                "تمثيل المؤسسة في المناسبات الرسمية والمشاركة في الشبكات المحلية والدولية.",
                "بناء علاقات مع الشركاء الرئيسيين، سواء كانوا حكومات أو مؤسسات غير ربحية أو شركات."
            ]
        },
        {
            id: 6,
            title: "دعم التوجهات المستقبلية",
            icon: (
                <FaLightbulb className="w-6 h-6 text-red-600" />
            ),
            items: [
                "تقديم الاستشارات والتوجيه فيما يتعلق بتطوير استراتيجيات المؤسسة والنمو المستدام.",
                "دعم القيادة التنفيذية في اتخاذ القرارات الحاسمة في الأوقات المناسبة."
            ]
        },
    ];
    return (


        <div className='bg-gray-100 '>
        <section className="container py-16 mx-auto" >
            <div className="container mx-auto px-4" data-aos="fade-down">
                <h2 data-aos="fade-down" className="font-extrabold text-2xl md:text-4xl pb-5 underlineR text-neutral-950 mb-6 container mx-auto ">
                    المهام والمسؤوليات
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-down">
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white shadow-black/30 group p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-red-600"
                        >
                            <div className="w-12 h-12 bg-red-100 rounded-xl mb-5 flex items-center justify-center">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-5 text-gray-800">
                                {card.title}
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                {card.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start text-justify leading-relaxed"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </section>
        </div>
    )
}
