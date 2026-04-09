import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".jason .img-box",
      {
        scrollTrigger: {
          trigger: ".jason",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<",
    );
  });

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        {/* <h2>Jason wants an easy life, but things just keep getting harder.</h2>
        <p>Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.</p> */}
        <h2>楽な人生を望むジェイソン。だが、すべてがますます困難になっていく。</h2>
        <p>
          ジェイソンは詐欺師や悪党に囲まれて育つ。傷ついた十代を払拭するため軍隊に入隊したが、結局はキーズで自分が得意なことをやっていた。地元の麻薬密売人のために働いていたのだ。そろそろ新しい道を歩む時が来たのかもしれない。
        </p>

        <div className="jason-2">
          <img src="/images/jason-2.webp" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
