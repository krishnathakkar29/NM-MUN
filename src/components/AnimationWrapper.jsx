import React, { useEffect, useRef } from "react";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

export const gsapAnimation = (screen, body) => {
  let tl = new TimelineMax();
  tl.to(screen, {
    duration: 1.2,
    height: "100%",
    bottom: "0%",
    ease: Power3.easeInOut,
  });
  tl.to(screen, {
    duration: 1,
    top: "100%",
    ease: Power3.easeInOut,
    delay: 0.3,
  });
  tl.set(screen, { left: "-100%" });
  TweenMax.to(body, 0.3, {
    css: {
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut,
    },
  }).delay(2);
  return () => {
    TweenMax.to(body, 1, {
      css: {
        opacity: "0",
        pointerEvents: "none",
      },
    });
  };
};

function AnimationWrapper({ children, title = "Rogue Code" }) {
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    gsapAnimation(screen, body);
  });

  return (
    <React.Fragment>
      <div
        className="load-container-gsap fixed inset-0 z-[9999] pointer-events-none"
        style={{ zIndex: 9999 }}
      >
        <div
          className="load-screen-gsap"
          style={{ zIndex: 9999 }}
          ref={(el) => (screen = el)}
        >
          <h1 style={{ zIndex: 9999 }}>{title}</h1>
        </div>
      </div>
      <div data-barba="container" className="container-gsap">
        <div ref={(el) => (body = el)} className="headd-gsap">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default AnimationWrapper;
