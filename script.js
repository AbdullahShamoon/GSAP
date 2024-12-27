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

gsap.from(".text1 h1", {
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
}, "-=0.5")  // -=0.5 means 0.5 second delay  ,, for timeline we have to do like this

tl.from(".content h2", {
    duration: 1,
    opacity: 0,
    y: 400,
    ease: "bounce",
})

tl.to(".color", {
    duration: 1,
    width: "100%",
    height: "100%",
    borderRadius: "0%",
    ease: "none",
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

    // Update the path dynamically
    path = `M 10 100 Q ${dets.clientX - pos.left} ${dets.clientY - pos.top} 990 100`;
    gsap.to("#string path", {
        attr: { d: path },
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
    opacity: 0,
    ease: "bounce",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".page5",
        start: "top 60%",
        // markers: true
    }
})

var page6 = document.querySelector(".page6")
page6.addEventListener("mousemove", function (event) {
    // Get the updated position of the element
    var pos = page6.getBoundingClientRect();

    xx = event.clientX - pos.left
    yy = event.clientY - pos.top

    gsap.to("#cursor1", {
        x: xx,
        y: yy,
        duration: 1,
    })

    gsap.to("#cursor2", {
        x: xx,
        y: yy,
        duration: 0.9,

    })
    gsap.to("#cursor3", {
        x: xx,
        y: yy,
        duration: 0.8,

    })
    gsap.to("#cursor4", {
        x: xx,
        y: yy,
        duration: 0.7,

    })
    gsap.to("#cursor5", {
        x: xx,
        y: yy,
        duration: 0.6,

    })
    gsap.to("#cursor6", {
        x: xx,
        y: yy,
        duration: 0.5,

    })
    gsap.to("#cursor7", {
        x: xx,
        y: yy,
        duration: 0.4,

    })
})

var page7 = document.querySelector(".page7")
page7.addEventListener("mousemove", function (event) {
    // Get the updated position of the element
    var pos = page6.getBoundingClientRect();

    xx = event.clientX - pos.left
    yy = event.clientY - pos.top

    gsap.to("#cursor7", {
        x: xx,
        y: yy,
        duration: 1,
    })
})

var image = document.querySelector(".imageContainer")
image.addEventListener("mouseenter", function (event) {
    gsap.to("#cursor7", {
        scale: 3,
        backgroundColor: "rgba(255, 255, 255, 0.473)"
    })
})
image.addEventListener("mouseleave", function (event) {
    gsap.to("#cursor7", {
        scale: 1,
        backgroundColor: "white"
    })
})

var rain_time = gsap.timeline()

rain_time.to(".drop", {
    duration: 0.5,
    y: "95vh",
    opacity: 0,
    ease: "linear",
    stagger: 0.2,
})

rain_time.pause()

var play = document.querySelector("#play")
var pause = document.querySelector("#pause")
play.addEventListener("click", function () {
    rain_time.play()
})
pause.addEventListener("click", function () {
    rain_time.pause()
})
var reverse = document.querySelector("#reverse")
reverse.addEventListener("click", function () {
    rain_time.reverse()
})

gsap.from(".timeline", {
    duration: 0.5,
    left: "-20%",
    ease: "bounce",
    scrollTrigger: {
        trigger: ".page8",
        start: "top 40%",
    }
})

var s = document.querySelector(".s")
s.addEventListener("mouseover", function () {
    gsap.to(".s", {
        scale: 1.5,
        duration: 0.5,
        ease: "elastic.out(2,0.1)",
    })
})
s.addEventListener("mouseleave", function () {
    gsap.to(".s", {
        scale: 1,
        duration: 0.5,
        ease: "linear",
    })
})

var m = document.querySelector(".m")
m.addEventListener("mouseover", function () {
    gsap.to(".m", {
        scale: 1.5,
        duration: 0.5,
        ease: "elastic.out(2,0.1)",
    })
})
m.addEventListener("mouseleave", function () {
    gsap.to(".m", {
        scale: 1,
        duration: 0.5,
        ease: "linear",
    })
})

gsap.from(".pagal", {
    duration: 6,
    x: -750,
    rotation: 3600,
    ease: "bounce",
    scrollTrigger: {
        trigger: ".page9",
        start: "top 20%",
    }
})

function breakTheText() {
    var content10 = document.querySelector("#content10")
    var content10Text = content10.textContent

    var splittedText = content10Text.split("")

    // var clutter = ""

    // splittedText.forEach(function(elem){
    //     clutter += `<span>${elem}</span>`
    // })
    // content10.innerHTML = clutter

    // OR

    var fullValue = splittedText.length
    var halfValue = Math.floor(splittedText.length / 2)

    content10.textContent = ""

    for (var i = 0; i < fullValue; i++) {

        if (i < halfValue) {

            var span = document.createElement("span")
            span.textContent = splittedText[i]
            span.classList.add("firstHalf")
        }
        else {
            var span = document.createElement("span")
            span.textContent = splittedText[i]
            span.classList.add("secondHalf")
        }

        content10.appendChild(span)
    }
}

breakTheText()

gsap.from(".firstHalf", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".page10",
        start: "top 40%",
    }
})

gsap.from(".secondHalf", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    opacity: 0,
    stagger: -0.3,
    scrollTrigger: {
        trigger: ".page10",
        start: "top 40%",
    }
})

var content10Span = document.querySelectorAll("#content10 span")
for (var i = 0; i < content10Span.length; i++) {
    content10Span[i].addEventListener("mouseover", function () {
        gsap.to(content10Span, {
            scale: 1.5,
            duration: 0.7,
            stagger: 0.2,
        })
    })
    content10Span[i].addEventListener("mouseleave", function () {
        gsap.to(content10Span, {
            scale: 1,
            duration: 0.7,
            ease: "linear",
            stagger: 0.2,

        })
    })
}


var fly = document.querySelector(".fly")
fly.addEventListener("mouseover", function (e) {

    var randomX = Math.floor(gsap.utils.random(-600, 600))
    var randomY = Math.floor(gsap.utils.random(-300, 300))
    var randomRotation = Math.floor(gsap.utils.random(-360, 360))

    gsap.to(".fly", {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        duration: 0.5,
    })
})
