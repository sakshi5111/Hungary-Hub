import { shimmer_card_unit } from "../utils/constants";

const CardShimmer = () => {
  return (
    <div className="container px-5 py-24 w-[300px]">
      <div className="lg:h-52 bg-gray-300 md:h-36 w-full object-cover object-center animate-pulse"></div>
      <div className="bg-gray-300 animate-pulse h-4 w-1/4 my-2"></div>
      <div className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-300"></div>
      <div className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300 "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-4 p-4 ml-14">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
