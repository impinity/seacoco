
import AboutSlider from "./AboutSlider";

export default function AboutSection() {
  return (
    <section className="w-full h-auto xl:px-20 px-5 py-10" name="about">
      <div className="flex md:flex-row flex-col items-center justify-center gap-5">
        <div className="md:w-1/2 w-full flex flex-col gap-5">
          <span className="font-bold text-4xl text-[#92B58D]">About Us</span>
          <span className="font-normal text-md text-gray-700 text-justify">
            Experience the freshness of the ocean with SeaCoco.id. Our coconuts
            are harvested at the peak of ripeness, ensuring that you receive
            products with maximum flavor and nutritional value. With SeaCoco.id,
            freshness is guaranteed in every bite.
            <br /> <br />
            At SeaCoco.id, our mission is simple yet profound: to provide
            premium coconut products while upholding sustainable and ethical
            practices. We believe in creating a positive impact on both the
            environment and the communities we serve. Our commitment to quality
            and responsibility is reflected in every aspect of our operations.
          </span>
        </div>
        <div className="md:w-1/2 w-full">
          <AboutSlider />
        </div>
      </div>
    </section>
  );
}
