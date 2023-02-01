/* 绑定左右箭头、slider、images、buttom */
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let sliderNum = 1;
const length = images.length

/* 用js创建div标签，并绑定事件*/
for (let i = 0; i < length; i++){
    const div = document.createElement("div")
    div.className = "button"
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white"

/* 重置所有button背景颜色*/
const resetButtonBGC = () =>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent"    
    })
}
/* 给每个button添加事件, i为button编号 */
buttons.forEach((button, i)=>{
    button.addEventListener("click",()=>{
        resetButtonBGC()
        slider.style.transform = `translateX(-${i * 800}px)`;
        sliderNum = i + 1;
        button.style.backgroundColor = "white";
    })
})

/* 切换下一张slide（根据slideNum控制绝对位置）*/
const nextSlide = () =>{
    slider.style.transform = `translateX(-${sliderNum * 800}px)`
    sliderNum++
};
/* 切换上一张slide（根据slideNum控制绝对位置）*/
const prevSlide = () =>{
    slider.style.transform = `translateX(-${(sliderNum - 2) * 800}px)`
    sliderNum--
};

const getFirstSlide = () =>{
    slider.style.transform = `translateX(-0px)`
    sliderNum = 1;
}

const getLastSlide = () =>{
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`
    sliderNum = length;
}

/* 切换button颜色（先重置所有button颜色为透明，然后将当前button颜色设置为白色）*/
const changeBtnColor = ()=>{
    resetButtonBGC()
    buttons[sliderNum-1].style.backgroundColor = "white";
}
/* 当点击右箭头时触发切换图片以及改变button颜色*/
right.addEventListener("click",()=>{
    sliderNum < length ? nextSlide() : getFirstSlide();
    changeBtnColor()
});
/* 当点击左箭头时触发切换图片以及改变button颜色*/
left.addEventListener("click",()=>{
    sliderNum > 1 ? prevSlide() : getLastSlide();
    changeBtnColor()
});

