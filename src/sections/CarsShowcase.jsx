import LexusStage from "../components/LexusStage";

const CarsShowcase = () => {
  const car = {
    id: 1,
    title: "Stallion RS",
    subtitle: "Xe 1",
    description: "Chiếc xe đầu tiên với thiết kế hầm hố, phù hợp cho những pha drift và bứt tốc trên đường phố.",
  };

  return (
    <section className="car-showcase-section border border-red-500">
      <div className="car-showcase-wrapper">
        <div className="car-showcase-inner">
          <div className="car-stage border border-red-500">
            <LexusStage />
          </div>

          <div className="car-content">
            {/* <span className="car-content__eyebrow">Xe 1</span> */}
            <h2 className="car-content__title">Stallion RS</h2>
            <p className="car-content__text">Chiếc xe đầu tiên với thiết kế hầm hố...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsShowcase;
