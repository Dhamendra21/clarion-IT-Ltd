function loadingAniation() {
    let tl = gsap.timeline();
    tl.from(".loading, .loader-img-div img", {
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
                // console.log(count)
            }, 20);
        },
    });
    tl.to(".loader", {
        delay: 2,
        opacity: 0,
        duration: 1.3,
        display: "none",
    });
    tl.from(".page1", {
        // delay:-1,
        duratin: 2,
        y: 1600,
        ease: "power3.out",
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
    
};

container.addEventListener("click", () => {
    updateContent(initalindex);
    initalindex = (initalindex + 1) % lendingpageHero.length;
    let changeContent = setInterval(()=>{
        updateContent(initalindex);
        initalindex = (initalindex + 1) % lendingpageHero.length;
        
    },10000)
    changeContent()

});

    




      

loadingAniation();


