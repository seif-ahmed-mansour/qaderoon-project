import AdministrativeOffice from "./AdministrativeOffice";
import ExecutiveOffice from "./ExecutiveOffice";
import TechnicalOffice from "./TechnicalOffice";

function Offices() {
  return (
    <div className="w-full mx-auto px-4 md:px-10 lg:px-20 my-16 text-gray-900">
      {/* المكتب الإداري */}

      <AdministrativeOffice />
      {/* المكتب التنفيذي */}
      <ExecutiveOffice />

      {/* المكتب الفني */}
      <TechnicalOffice />
    </div>
  );
}

export default Offices;
