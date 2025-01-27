import ContentSection from "./ContentSection";
import Header from "./Header";
import ImageSection from "./ImageSection";

const AboutSectionComponent = () => {
  return (
    <section className="container flex lg:flex-row items-center gap-6 p-6 rounded-xl mx-auto my-10 lg:my-20 ">
      <div className="lg:w-1/2">
        <Header />
        <ContentSection />
      </div>
      <div className="lg:w-1/2">
        <ImageSection />
      </div>
    </section>
  );
};

export default AboutSectionComponent;
