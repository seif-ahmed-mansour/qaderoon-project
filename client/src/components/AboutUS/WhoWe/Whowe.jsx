import Cards from "./Cards";
import ContentOne from "./ContentOne";
import HeaderWho from "./HearderWho";
import Header2 from "./Header2";

const Whowe = () => {
  return (
    <>
      <section className="container items-center gap-6 p-6 rounded-xl mx-auto my-6 lg:my-20">
        <HeaderWho />
        <ContentOne />
      </section>
      <section className="container items-center gap-6 p-6 rounded-xl mx-auto my-6 lg:my-20">
        <Header2 />
        <Cards />
      </section>
    </>
  );
};

export default Whowe;
