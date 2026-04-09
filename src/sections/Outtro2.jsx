import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Outro = () => {
  useGSAP(() => {
    gsap.set(".final-message", { marginTop: "-100vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final-message",
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });

    tl.to(".final-content", { opacity: 0, duration: 1, ease: "power1.inOut" });
    tl.to(".final-message", {
      opacity: 1,
      // marginTop: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="final-message ">
      <div className="h-full grid grid-cols-1 md:grid-cols-[40fr_60fr] items-center relative">
        {/* 📝 Cột trái: Logo + CTA + Date */}
        <div className="col-center md:items-start gap-8 px-8 py-10 text-center md:text-left order-1">
          <img src="/images/logo.webp" alt="logo" className="w-48 md:w-56 mx-auto md:mx-0" />

          <h3 className="text-white/90 text-lg md:text-xl font-round-bold tracking-wide">仲間になろう</h3>

          <h4 className="gradient-title text-3xl md:text-4xl leading-tight">
            POROCIA TEAM <br /> 配信開始 <br /> 2026年5月26日
          </h4>
        </div>

        {/* 🖼️ Cột phải: Ảnh team */}
        <div className="hidden md:flex items-center justify-center pe-8 order-2">
          <div className="relative w-full max-w-2xl">
            <img
              src="/images/final.jpg"
              alt="Our Team"
              className="rounded-2xl shadow-2xl border-2 border-white/10 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none" />
          </div>
        </div>

        {/* 🌐 Social Icons - Đơn giản, chỉ nằm ở dưới */}
        <div className="absolute bottom-8 left-0 right-0 flex-center gap-10 z-20">
          <img
            src="/images/ps-logo.svg"
            alt="PlayStation"
            className="md:w-32 w-20 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/images/x-logo.svg"
            alt="X/Twitter"
            className="md:w-52 w-40 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default Outro;
