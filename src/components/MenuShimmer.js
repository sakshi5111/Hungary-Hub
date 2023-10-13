const ShimmerMenu = () => {
  return (
    <div className="ml-44 max-w-sm animate-pulse mt-36">
      <p className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></p>
      <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></p>
      <div className="flex ">
        <div>
          <p className="h-2 bg-gray-200 rounded-full mb-2.5"></p>
          <p className="h-2 bg-gray-200 rounded-full w-[330px] mb-2.5"></p>
          <p className="h-2 bg-gray-200 rounded-full w-[360px]"></p>
        </div>
        <p className="h-40 pl-48 ml-96 bg-gray-200 rounded-lg w-[600px]"></p>
      </div>
    </div>
  );
};

const MenuShimmer = () => {
  return (
    <div>
      <ShimmerMenu />
      <ShimmerMenu />
      <ShimmerMenu />
      <ShimmerMenu />
      <ShimmerMenu />
    </div>
  );
};

export default MenuShimmer;
