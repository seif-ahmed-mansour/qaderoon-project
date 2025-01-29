function Governorates() {
  const governorates = [
    "محافظة القاهرة",
    "محافظة الجيزة",
    "محافظة الاسكندرية",
    "محافظة الشرقية",
    "محافظة أسوان",
    "محافظة البحيرة",
    "محافظة الوادى الجديد",
    "محافظة قنا",
    "محافظة المنيا",
    "محافظة أسيوط",
    "محافظة الفيوم",
    "محافظة سوهاج",
    "محافظة الأقصر",
    "محافظة قنا",
    "محافظة بنى سويف",
    "محافظة السويس",
    "محافظة المنوفية",
  ];

  return (
    <div
      data-aos="fade-down"
      className="container px-6 py-5 mx-auto my-10 lg:my-20">
      <h2 className="font-extrabold text-2xl md:text-4xl underlineR md:pb-6 text-gray-900 mb-8 text-center">
        محافظات تواجد <span className="text-primary relative">شباب قادرون</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-8 ">
        {governorates.map((governorate, index) => (
          <div
            data-aos="fade-down"
            key={index}
            className="bg-white p-6 shadow-sm md:shadow-md rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 cursor-default">
            <h3 className="text-lg md:text-xl font-semibold text-primary text-center">
              {governorate}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Governorates;
