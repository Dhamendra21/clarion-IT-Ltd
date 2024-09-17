function loadingAniation() {
    let tl = gsap.timeline();

    tl.from(".loading, .loader-img-div img", {
        onStart :()=>{
            let window = document.body
            window.style.overflow = "hidden" 
        },
        y: 500,
        duration: 1.3,
        stagger: 0.5,
        onComplete: () => {
            let count = 0;
            let counter = setInterval(() => {
                ++count;
                if (count === 100) {
                    clearInterval(counter);
                }
                document.querySelector(".counterSpan").textContent = count;
            }, 20);
        },
    });
    tl.to(".loader", {
        delay: 2,
        opacity: 0,
        duration: 1.3,
        display: "none",
        onComplete:()=>{
            let window = document.body
            window.style.overflow = "initial" 
        }
    });
    tl.from(".page1", {
        // delay:-1,
        duratin: 2,
        y: 1600,
        ease: "power3.out",
    });
    tl.from(".heading-container h1, .heading-container h2, .heading-container p ", {
        y:500,
        stagger:0.5,
        duration:1,
        ease:"expo.out"
        })
    tl.from(".btn", {
            opacity:0
        });
   
}

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.hoverWithMediaCircle(".hero" /* Element to target.*/, {
    images: ["./assets/it-img-5.webp","./assets/it-img-6.webp"] /*OR*/,
    // videos: ["./0.mp4", "/1.mp4"],
  })
  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
let lendingpageHero = [
    {
        heading1: "WE EMPOWER YOUR BUSINESS",
        spanContent:"BUSINESS",
        heading2: "With Our CUTTING-EDGE IT Solutions",
        paragraph:
            "We Design & Develop Custom & Innovative Solutions For Modern Era Business",
    },
    {
        heading1: "WE BUILD POWERFUL",
        spanContent:"POWERFUL",
        heading2: "Next Level And Unique Websites.",
        paragraph:
            "With More than 15+ years of experience, We offer the best Web development services to give you exactly what you require to achieve your growth targets.",
    },
    {
        heading1: "GROW YOUR BUSINESS",
        spanContent:"BUSINESS",
        heading2: "With Our Digital Marketing Service.",
        paragraph:
            "We provide customized tailored solutions fast track your online visibility, boost brand Awareness and Increase your sales",
    },
];

let initalindex = 0;
let green = document.querySelector(".green")

let container = document.querySelector(".container");
let hero =  document.querySelector(".hero")



let updateContent = (index) => {
    let content = lendingpageHero[index];

    
    document.querySelector('.heading-container h1').textContent = content.heading1;
    document.querySelector('.heading-container h2').textContent = content.heading2;
    document.querySelector('.heading-container p').textContent = content.paragraph;

    gsap.from(".heading-container h1, .heading-container h2, .heading-container p ", {
        y:500,
        stagger:0.5,
        duration:1,
        ease:"expo.out"
        })
    gsap.from(".btn", {
        // opacity:0,
        y:500
    });
};

container.addEventListener("click", () => {
    updateContent(initalindex);
    initalindex = (initalindex + 1) % lendingpageHero.length;
    
    

});
// let changeContent = setInterval(()=>{
//     updateContent(initalindex);
//     initalindex = (initalindex + 1) % lendingpageHero.length;
    
// },10000)


      

loadingAniation();








gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    scrub: 3,
    // markers:true,
    start: "top 80%",
    end: "10%",
    duration: 1

  }
})
tl1.to(".head h1", {
  x: -100,
  duration: 0.3,
  stagger: 1

}, "anim")
tl1.to(".head h2", {
  x: 100,
  duration: 0.3,
  stagger: 1


}, "anim")

tl1.to(".page2 video", {
  width: "100%",

})




function textBreak() {

  var h3 = document.querySelector("h3");

  var h3Text = h3.textContent

  var splittedText = h3Text.split("")

  // console.log(splittedText);
  var clutter = ""

  splittedText.forEach(function (e) {
    clutter += `<span>${e}</span>`
  })


  h3.innerHTML = clutter
}
textBreak()


gsap.from("h3 span", {
  y: 100,
  x: 100,
  opacity: 0,
  duration: 0.7,
  stagger: 0.03

})

var tl2 = gsap.timeline({


  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    scrub: 3,
    start: "top 30%",
    end: "-10%",

  }

})

tl2.from(".right #img-1", {
  x: -500,
  duration: 0.8,
  scale: 1.5



})

tl2.from(".right #img-2", {
  x: 500,
  duration: 2
})


tl2.from(".side-btn h2 ", {
  scale: -1.1,
  duration: 2
})





gsap.to(".slider h2", {
  x: -500,
  repeat: -1,
  ease: "linear",
  duration: 5
})




