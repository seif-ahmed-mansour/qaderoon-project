import AboutBroad from "./AboutBroad";
import Formating from "./Formating";
import { Missions } from "./Missions";

const Board = () => {
  return (
    <>
      <section className="rounded-xl mx-auto bg-gray-100 py-10 mb-10 pt-6 lg:pt-26 px-4">
        <div className="container mx-auto ">
          <AboutBroad />
          <Formating />
        </div>
      </section>
      <Missions />
    </>
  );
};

export default Board;
