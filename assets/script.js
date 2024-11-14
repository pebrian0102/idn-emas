gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
});

// Text Split
const text = new SplitType("#headline", { types: "chars" });
const text2 = new SplitType("#headline2", { types: "chars" });
gsap.from(text.chars, {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#headline",
        scrub: 0.5,
        start: "top 75%",
        end: "top 25%",
        markers: true
    }
});
gsap.from(text2.chars, {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#headline2",
        scrub: 0.5,
        start: "top 75%",
        end: "top 25%",
        markers: true
    }
});



// Scroll Horizontal

const layers = gsap.utils.toArray(".section.layer-section");

layers.forEach((layer, i) => {
    const pauseLayer = Boolean(layer.dataset.pauseLayer);
    if (pauseLayer) {
        gsap.set(layer, { marginBottom: "300vh" });
        const slides = gsap.utils.toArray(".horizontal-slide", layer);
        gsap.to(slides, {
            xPercent: -100 * (slides.length - 1),
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: layer,
                start: "top top",
                end: "+=300%",
                scrub: true
            }
        });
        ScrollTrigger.create({
            trigger: layer,
            start: "top top",
            end: "+=400%",
            scrub: true,
            pin: true,
            pinSpacing: false,
            id: i + 1,
            markers: {
                indent: 150 * i
            }
        });
    } else {
        ScrollTrigger.create({
            trigger: layer,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
            id: i + 1,
            markers: {
                indent: 150 * i
            }
        });
    }
});

// section 4

ScrollTrigger.create({
    trigger: ".hero__title-wrapper",
    pin: ".hero__title",
    scrub: true,
    start: "top top",
    end: () => "+=" + document.querySelector(".hero_txt").offsetHeight + " bottom",
    markers: true,
    pinSpacing: false
});

