import ContentSection from "./ContentSection";
import Header from "./Header";
import ImageSection from "./ImageSection";

const AboutSectionComponent = () => {
  return (
    <section className="container flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-100 rounded-xl shadow-lg mx-auto">
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
