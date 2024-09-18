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

let sheryEffects =()=>{
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
      
      Shery.imageEffect(".image-container", {
        style: 6,
        // debug: true,
        gooey: true,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":1.2030252475840044},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":14}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":16.03,"range":[0,100]}}
      });
}



let dynamicLending =()=>{
    
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
    // let green = document.querySelector(".green")
    
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
}

function smooth(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

let dynamicCard = ()=>{
    let cards = [
        {
            image: "https://clarionit.in/wp-content/uploads/2023/05/data-center-1.png",
            heading: "server storage Management",
            
        },
        {
            image: "https://clarionit.in/wp-content/uploads/2023/05/database-1.png",
            heading: "data center solution",
        },
        {
            image: "https://clarionit.in/wp-content/uploads/2023/05/network-1.png",
            heading: "Networking & surveillance",
        },
        
        {
            image: "https://clarionit.in/wp-content/uploads/2023/05/infrastructure-2.png",
            heading: "IT infrastructure projects",
        },
        {
            image: "https://clarionit.in/wp-content/uploads/2023/05/hardware.png",
            heading: "hardware sales & support",
        },
        {
            image: "https://clarionit.in/wp-content/uploads/2023/05/rk-infraa.png",
            heading: "Brand Identity Creation",
        },
        {
            image: "https://clarionit.in/wp-content/uploads/2023/05/social-media-marketing.png",
            heading: "Digital Marketing Services",
        },
        {
            image: "https://clarionit.in/wp-content/uploads/2023/05/devops.png",
            heading: "Website Based Solution",
        },

    ];
    
    let container = document.querySelector(".page3-cards-container");
    
    cards.forEach((e)=>{
        container.innerHTML += `
        <div class="page3-card">
                    <div class="card-img">
                        <img src="${e.image}" alt="">
                    </div>
                    <div class="card-content">
                        <h2>${e.heading}</h2>
                         <button>know More</button>
                   </div>
                </div>
        `
    })
    
}



dynamicCard()
sheryEffects()
dynamicLending()
smooth()
// loadingAniation();
