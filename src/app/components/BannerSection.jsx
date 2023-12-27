import Image from "next/image";
import TextEffect from "./TextEffect";

export default function BannerSection() {
  const sentence =
    "From Shore to Your Door: SeaCoco.id - Your Premier Source for Coconut Treasures!".split(
      ""
    );
  return (
    <section className="xl:px-20 w-full h-auto px-5 py-3" name="banner">
      <div className="flex flex-col gap-8 h-screen items-center justify-center md:mt-10">
        <div className="md:w-[80%] text-center">
        {sentence.map((letter, index) => {
          return (
            <TextEffect key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextEffect>
          );
        })}
        </div>

        <div className="grid grid-cols-3 md:gap-3 gap-1">
            <div className="transition-transform delay-100 hover:-translate-y-5">
            <Image 
                src={'/images/banner.jpg'}
                width={1000}
                height={1000}
                alt="Banner Image"
                className="w-full h-auto object-cover rounded-tl-3xl rounded-bl-3xl"
                priority={true}
            />
            </div>
            <div className="transition-transform delay-100 hover:-translate-y-5">
            <Image 
                src={'/images/banner3.jpg'}
                width={1000}
                height={1000}
                alt="Banner Image"
                className="w-full h-auto object-cover"
                priority={true}
            />
            </div>
            <div className="transition-transform delay-100 hover:-translate-y-5">
            <Image 
                src={'/images/banner4.jpg'}
                width={1000}
                height={1000}
                alt="Banner Image"
                className="w-full h-auto object-cover rounded-tr-3xl rounded-br-3xl"
                priority={true}
            />
            </div>
        </div>
      </div>
    </section>
  );
}
