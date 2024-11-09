export const IrrigationMap = () => {
  const elementsArray = Array.from({ length: 200 });
  return (
    <div className="mt-5 w-full flex justify-center h-max">
      <div className=" flex flex-col w-[90%] h-max bg-white rounded-md px-4 ">
        <h1 className="font-bold text-[24px]">Irrigation Map</h1>
        <div className="p-2 mt-2 grid gap-1 gridmap border-2 border-dashed w-[100%] max-w-[500px] rounded-lg border-[#8D6E63]">
          {elementsArray.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 border-[#8D6E63] rounded-sm border-2 hover:bg-gray-400 hover:border-[#F4F4F9] hover:border-solid duration-1000 ease-in-out origin-center"
            ></div>
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
};
