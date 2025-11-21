import nike1 from "./assets/n1-min.png";
import Select from "./components/Select";
import { QTY, SIZE } from "./constant";

export default function ShoeDetail() {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:flex-row-reverse">
      {/* Shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">
          <img src={nike1} alt="" className="animate-float" />
        </div>
      </div>

      <div className="flex-1 space-y-6">
        {/* Shoe Text Details*/}
        <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle show that's sure to turn head with its vibrant color gradient."
          }
        </div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">100 $</div>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZE} />
        </div>
        {/* Shoe Buttons And Links */}
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add To Bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
