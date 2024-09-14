



let tl = gsap.timeline();
    tl.from(".loading, .loader-img-div img", {
        y:500,
        duration:1.3,
        stagger:0.5,
        onComplete:()=>{

            let count = 0
            let counterSpan 
            let counter = setInterval(()=>{
                ++count
                if (count === 100) {
                    clearInterval(counter)
                }
                document.querySelector('.counterSpan').textContent = count
                // console.log(count)
            },20)
            
        }
    })
    tl.to(".loader",{
        delay:2,
        opacity:0,
        duration :1.3,
        display:"none"
    })
    tl.from(".page1",{
        // delay:-1,
        duratin:2,
        y:1600,
        ease: "power3.out"
    })


    // Shery.imageEffect(".back",{style:6, });

// Shery.imageEffect(".back",{style:6,
//     config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.082236837977518},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":1},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":15,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":1},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.94,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
//     gooey:true,
//     // debug:true
// })\

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });