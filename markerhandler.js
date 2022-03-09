AFRAME.registercomponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",() =>{
            this.markerhandlerFound()
        })
        this.el.addEventListener("makerLost",()=>{
            this.markerhandlerLost()
        })
    },

    markerhandlerFound: function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display="flex"
        var ratingbutton = document.getElementById("rating-button")
        var orderbutton = document.getElementById("order-button")
        ratingbutton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"Rate the Dish",
                text:"work in progress..."
            })
        })
        orderbutton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for placing the order :)",
                text:"Food is being prepared..."
            })
        })
    },

    markerhandlerLost: function(){
        var lostbutton = document.getElementById("button-div")
        lostbutton.style.display="none"
    }
})