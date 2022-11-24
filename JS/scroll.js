// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".square", {
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger:".square2",
//         // start: "top top"
//     },
// });

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger);

gsap.to(".b", {
    scrollTrigger: {
        trigger: ".c",
        toggleActions: "restart pause reverse pause"
    },
    x: 500,
    rotation: 360,
    // ease: "none",
    duration: 3
});


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
        //跟設定css 一樣  如果畫面不小於 768px 執行
        gsap.to(".box", {
            x: 300,
            duration: 3,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box", //觸發得物件
                start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
                end: "+=1000", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
                pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
                scrub: true, // 物件動畫根據卷軸捲動程度跑
                toggleClass: "active", //  class名稱 須為字串
                markers: true // 顯示標記
            }
        });
    }
});
