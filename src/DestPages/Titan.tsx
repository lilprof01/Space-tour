interface TitanProps {
  data: any;
}

const Titan: React.FC<TitanProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-start align-middle gap-4">
      {/* Details div */}
      <div className="py-2 border-b border-[grey]">
        <h2 className="text-9xl">{data.destinations[3].name}</h2>
        <p className="text-[16px]">{data.destinations[3].description}
        </p>
      </div>

      {/* distance and days div */}
      <div className="w-full flex justify-between items-center align-middle">
        <div className="flex flex-col justify-center items-startr align-middle">
          <p className="text-[16px]">AVG. DISTANCE</p>
          <p className="text-3xl">{data.destinations[3].distance}</p>
        </div>

        <div className="flex flex-col justify-center items-start align-middle">
          <p className="text-[16px]">EST. TRAVEL TIME</p>
          <p className="text-3xl">{data.destinations[3].travel}</p>
        </div>
      </div>
    </div>
  );
};

export default Titan;