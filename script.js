let li_items = document.querySelectorAll(".sidebar ul li");
let hamburger = document.querySelector(".hamburger");
let wrapper = document.querySelector(".wrapper")

li_items.forEach((li_item) =>{
    li_item.addEventListener("mouseenter", () =>{
       if(wrapper.classList.contains("click_collapse")){
        return;
       }
       else{
        li_item.closest(".wrapper").classList.remove("hover_collapse")
       }
    })
})

li_items.forEach((li_item)=>{
    li_item.addEventListener("mouseleave", () =>{
        if(wrapper.classList.contains("click_collapse")){
            return;
           }
           else{
            li_item.closest(".wrapper").classList.add("hover_collapse")
           }
      
        
    })
})

hamburger.addEventListener("click", ()=>{
    hamburger.closest(".wrapper").classList.toggle("click_collapse")
    hamburger.closest(".wrapper").classList.toggle("hover_collapse")
})