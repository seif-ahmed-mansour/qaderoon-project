
const Cards = () => {
    const data=[
        {
            title:"الرؤيه",
            icon:"/images/WhoWe/see-svgrepo-com.svg",
            para:"صناعة جيل شبابي واعي قادر علي بناء مستقبل وطنه",

        },
        {
            title:"الاهداف",
            icon:"/images/WhoWe/shake-hand-svgrepo-com.svg",
            para:"نعمل علي نشر الوعي الوطني و تنمية قدرات الشباب و دعم البحث العلمي و التشجيع علي الابتكار وريادة الاعمال والمشاركة المجتمعية والتطوعية ودعم رؤية مصر 2030 للتنمية المستدامة",

        },
        {
            title:"الرؤيه",
            icon:"/images/WhoWe/personal-network-2-svgrepo-com.svg",
            para:"رفع كفاءة الشباب من خلال توسيع الخيارات المتاحه لهم وبناء قدراتهم للمشاركة في صنع مستقبل ايجابي مستدام لوطنهم",

        }
    ]
  return (
    <div className="grid text-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-8">
        {data.map((object)=>{
            return(
                <div className="bg-white w-110 md:w-82 lg:w-100 xl:100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 " >
                    <div className="flex justify-center">
                  <div className="bg-red-100 w-fit justify-items-center  p-3 rounded-full mb-4">
                    <img src={object.icon} alt="icon1" className="w-8 h-8 items-center text-red-600 " />
                  </div>
                  </div>
                  <h3 className="font-bold text-3xl mb-2">{object.title}</h3>
                  <p className="text-2xl text-gray-600">{object.para}</p>
                </div>
              </div>
            )
        })}

</div>
  )
}

export default Cards