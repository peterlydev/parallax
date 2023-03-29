const height = window.innerHeight;

const getRatio = (el) => innerHeight / (height + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");

  gsap.fromTo(
    section.bg,
    {
      backgroundPosition: () =>
        i ? `50% ${-height * getRatio(section)} px` : "50% 0 px",
    },
    {
      backgroundPosition: () => `50% ${height * (1 - getRatio(section))} px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
      },
    }
  );
});
