const StatisticsCard = ({ icon, number, label }) => (
  <div className="flex flex-col items-center justify-center border-2 border-transparent rounded-xl p-4 w-50 h-50 bg-gradient-to-r from-[#da1e33] to-[#a21c34] shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
    <div className="text-white text-6xl mb-2">{icon}</div>
    <p className="text-white text-3xl font-bold">{number}</p>
    <p className="text-white text-xl font-medium mt-1">{label}</p>
  </div>
);

export default StatisticsCard;
