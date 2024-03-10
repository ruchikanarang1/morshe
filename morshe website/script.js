gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    delay:2,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#fff",
    
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#nav h4, #page1 h5, #page1 h1",{
    y:-100,
    opacity:0,
    stagger:0.3,
})


gsap.from("#about-us, #about-us img, #aboutusin",{
    y:-100,
    opacity:0,
    duration:0.3,

    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 90%",
        end:"top 10%",
        //markers:true,
        scrub:2,
        stagger:1
        
    }
    

})