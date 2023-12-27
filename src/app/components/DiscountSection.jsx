import Link from "next/link";
import Image from "next/image";

export default function DiscountSection() {
  return (
    <section className="w-full h-auto xl:px-20 px-5 py-10" name="discount">
      <div className="flex md:flex-row flex-col gap-8 items-center">
        <div className="md:w-1/2 w-full transition-transform delay-75 hover:scale-90">
          <Image
            className="w-full h-auto object-cover rounded-3xl"
            src={"/images/discount.jpg"}
            width={1000}
            height={1000}
            alt="Discount Month Coconut"
            placeholder="blur"
            blurDataURL="data:image/..."
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-3">
          <span className="font-bold text-4xl text-[#92B58D]">
            Special Monthly Offer: January Delights!
          </span>
          <span className="font-normal text-md text-gray-700 text-justify">
            Enjoy a delightful 15% off on all our premium coconut products
            throughout the month of November. Indulge in the tropical goodness
            of SeaCoco.id and elevate your culinary experience.
          </span>
          <span className="font-normal text-md text-gray-700 text-justify">
            Hurry, dont miss the chance to savor the freshness of SeaCoco.id at
            an exclusive price this January!
          </span>
        </div>
      </div>
    </section>
  );
}
