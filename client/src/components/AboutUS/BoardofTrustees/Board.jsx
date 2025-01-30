import AboutBroad from "./AboutBroad";
import Formating from "./Formating";
import { Missions } from "./Missions";

const Board = () => {
  return (
    <>
      <section className="rounded-xl mx-auto bg-gray-100 ">
        <div className="container mx-auto pt-12 px-6 py-1 lg:py-20 mb-10">
          <AboutBroad />
          <Formating />
        </div>
      </section>
      <Missions />
    </>
  );
};

export default Board;
