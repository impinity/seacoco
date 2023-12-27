import Image from "next/image";
import ImageProduct from "./ImageProduct";
export default function ProductSection() {
  return (
    <section className="w-full h-auto xl:px-20 px-5 py-10" name="product">
      <div className="flex flex-col gap-5">
        <span className="font-bold text-4xl text-[#92B58D]">
          Products Gallery
        </span>
        <span className="font-normal text-md text-gray-700 text-justify">
          Explore our exquisite coconut collection at SeaCoco.id, where
          freshness meets flavor. From creamy coconut milk to versatile coconut
          oil, each product is crafted with care to bring the essence of the
          tropics to your culinary adventures
        </span>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 mt-5">
        <ImageProduct />
      </div>
    </section>
  );
}
