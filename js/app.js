const chk =document.getElementById("chk")
const ball = document.getElementById("changeBTN")
const prost = document.getElementById("btnProst")

// cheking checkbox

chk.addEventListener("change", () => {
    document.body.style.transition = "background 0.2s linear"
    document.body.classList.toggle("dark")

})

// position check



    if ($("#chk").is(":checked")) {
        
        document.body.classList.add("dark")
    }
