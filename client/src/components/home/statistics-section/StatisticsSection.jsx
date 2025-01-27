import { MdCastForEducation } from "react-icons/md";
import { PiVideoConference } from "react-icons/pi";
import { RiUserCommunityFill } from "react-icons/ri";
import { Md6FtApart } from "react-icons/md";

import StatisticsCard from "./StatisticsCard";

const StatisticsSection = () => (
  <section className="bg-gray-100 py-20">
    <div className="text-center mb-8">
      <h2 className="text-[#da1e33] text-3xl font-bold">الإحصائيات</h2>
      <p className="text-gray-600 text-lg mt-2">
        أرقام تعبر عن تميز وريادة المؤسسة
      </p>
      <div className="w-16 h-1 bg-[#a21c34] mt-2 mx-auto"></div>
    </div>

    <div className="flex flex-wrap justify-center gap-2 md:gap-10 px-[1px]">
      <StatisticsCard
        icon={<PiVideoConference />}
        number="6"
        label="المؤتمرات"
      />
      <StatisticsCard
        icon={<MdCastForEducation />}
        number="85"
        label="الدورات"
      />
      <StatisticsCard
        icon={<RiUserCommunityFill />}
        number="1870"
        label="أعضاء المؤسسة"
      />
      <StatisticsCard icon={<Md6FtApart />} number="38" label="الشركاء" />
    </div>
  </section>
);

export default StatisticsSection;
