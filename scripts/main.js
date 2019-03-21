window.addEventListener("DOMContentLoaded",function(){
    console.log("loaded")
    function Product(n,p,c,f){
        this.amount=100;
        this.n=n;
        this.prots=p;
        this.carbs=c;
        this.fats=f;
        this.count=function(gramm){
            var gramm=gramm/100;
            this.nprots=this.prots*gramm;
            this.ncarbs=this.carbs*gramm;
            this.nfats=this.fats*gramm;
        }
    }
    let products=[
        new Product("rice","0","78.9","0.7"),
        new Product("backweat","0","54.4","3.2"),
        new Product("egg","12.7","0.7","10.9")
    ]

        function MealConstuctor(id,products){
        let constructor=document.getElementById(id),
            addBtn=document.querySelector(".add-btn"),
            mealItme=document.querySelector(".meal-item"),
            control=document.querySelector(".control");

        function addNewMealItem(){
            let newEl=mealItme.cloneNode(true);
            constructor.insertBefore(newEl, control);

        }
        addBtn.addEventListener("click",addNewMealItem);
        }

        new MealConstuctor("constructor");
});



