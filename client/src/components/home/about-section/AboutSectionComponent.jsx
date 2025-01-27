import ContentSection from "./ContentSection";
import Header from "./Header";
import ImageSection from "./ImageSection";

const AboutSectionComponent = () => {
  return (
    <section className="container flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl mx-auto mt-3">
      <div className="md:w-1/2">
        <Header />
        <ContentSection />
      </div>
      <div className="md:w-1/2">
        <ImageSection />
      </div>
    </section>
  );
};

export default AboutSectionComponent;
