import LexusStage from "../components/LexusStage";

const CarsShowcase = () => {
  const car = {
    title: "Lexus LFA | Shadow Hunter",
    description:
      "V10の咆哮は挑戦ではない。それは宣告だ。夜の公道で、掟を破る者はすぐに悟るだろう。彼らは競っているのではない。狩られているのだ。",
  };

  return (
    <section className="car-showcase-section">
      <div className="car-showcase-wrapper">
        <div className="car-showcase-inner">
          {/* 🚗 Cột 1: 3D Stage (Nằm bên TRÁI trên desktop) */}
          <div className="car-stage">
            <LexusStage />
          </div>

          {/* 📝 Cột 2: Nội dung (Nằm bên PHẢI trên desktop) */}
          <div className="car-content">
            <h2 className="car-content__title">{car.title}</h2>
            <p className="car-content__text">{car.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsShowcase;
