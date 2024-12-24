gsap.to(".box", {
    duration: 1.5,
    x: -450,
    rotation: 360,
    scale: 0.5,
    borderRadius: "50%",
    backgroundColor: "blue",
    ease: "bounce",
    yoyo: true,
    repeat: 1,
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",     // Scrolling element [default is body/html] , so it will work without scroller also
        start: "top 40%",
        // markers: true,
    }
});

gsap.from(".code", {
    duration: 2,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: ".code",
        start: "top 60%",
    }
})

gsap.from(".text h1", {
    duration: 0.5,
    delay: 1,
    y: 20,
    opacity: 0,
    stagger: 0.3  // delay between each element
})

gsap.to(".box2", {
    x: -550,
    rotation: 360,
    scale: 0.5,
    borderRadius: "50%",
    backgroundColor: "blue",
    ease: "linear",
    scrollTrigger: {
        trigger: ".page2",
        start: "top 40%",
        end: "bottom 50%",
        // markers: true,  //Used to show markers
        scrub: 1
    }
});

gsap.from(".scroll", {
    duration: 0.5,
    y: 70,
    opacity: 0,
    ease: "linear",
    scrollTrigger: {
        trigger: ".page2 .scroll",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
    }
})

gsap.to(".box3", {
    rotation: 360,
    scale: 0.5,
    borderRadius: "50%",
    backgroundColor: "blue",
    ease: "linear",
    scrollTrigger: {
        trigger: ".page3 .box3",
        start: "top 60%",
        end: "top -20%",
        // markers: true,
        scrub: 1,
        pin: true
    }
});

var tl = gsap.timeline()

tl.from(".navbar .logo", {
    duration: 0.3,
    delay: 0.4,
    y: -40,
    opacity: 0,
    ease: "linear",
})

tl.from(".navbar .nav_items ul li", {
    duration: 0.4,
    y: -40,
    opacity: 0,
    ease: "linear",
    stagger: 0.2
})

tl.from(".content h1", {
    duration: 1,
    x: -400,
    opacity: 0,
    ease: "bounce",
    stagger: 0.1
})

tl.from(".content h2", {
    duration: 1,
    opacity: 0,
    y: 400,
    ease: "bounce",
})

gsap.to(".page4 .pinned_text", {
    duration: 1,
    transform: "translateX(-300vw)",
    ease: "linear",
    scrollTrigger: {
        trigger: ".page4",
        start: "top 0%",
        end: "top -400%",
        // markers: true,
        scrub: 1,
        pin: true
    }
})

gsap.from(".text", {
    duration: 1,
    y: -400,
    opacity: 0,
    delay: 0.1,
    ease: "bounce",
    scrollTrigger: {
        trigger: ".page4",
        start: "top 30%"
    }
})

gsap.to(".text", {
    x: -200,
    scrollTrigger: {
        trigger: ".page4",
        start: "top 0%",
        end: "top -100%",
        // markers: true,
        scrub: 2
    }
})

var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";
var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
    // Get the updated position of the element
    var pos = string.getBoundingClientRect();

    // Log the dynamic values
    console.log("Dets y: ", dets.clientY);
    console.log("Pos top: ", pos.top);

    // Update the path dynamically
    path = `M 10 100 Q ${dets.clientX - pos.left} ${dets.clientY - pos.top} 990 100`;
    gsap.to("#string path", {
        attr: { d: path},
        duration: 0.1,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("#string path", {
        attr: { d: finalPath },
        duration: 1,
        ease: "elastic.out(2,0.3)"
    });
});

gsap.from(".page5 .guitar span", {
    duration: 1,
    y: -400,
    opacity: 0,
    ease: "bounce",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".page5",
        start: "top 60%",
        // markers: true
    }
})
