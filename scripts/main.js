window.addEventListener("DOMContentLoaded",function(){
    
    //The main product constructor
    
    function Product(n,p,c,f){
        this.amount=100;
        this.name=n;
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
    
    //The main array with all products. Insert here new products
    
    let products=[
        new Product("rice","0","78.9","0.7"),
        new Product("backweat","0","54.4","3.2"),
        new Product("egg","12.7","0.7","10.9")
    ]
    
    //The main 
    
    function MealConstuctor(id,products){
        
        let constructor=document.getElementById(id),
            addBtn=document.querySelector(".add-btn"),
            mealItme=document.querySelector(".meal-item"),
            control=document.querySelector(".control");

        function removeMealItem(){
            let bttns=document.querySelectorAll(".remove-btn");
            bttns.forEach(function(item){
                item.onclick=function(e){
                    let el=e.target.parentNode;
                    if(el.className=="meal-item"){
                        constructor.removeChild(el);
                    }
                };
            })
        }

        function addNewMealItem(){
            let removeBtn=document.createElement("div");
            removeBtn.innerHTML="-";
            removeBtn.classList.add("remove-btn");
            let newEl=mealItme.cloneNode(true);
            newEl.append(removeBtn);
            constructor.insertBefore(newEl, control);
            removeMealItem();
            initProductSelect();
        }
        
        function fillInputs(products, secetvalue, elements){
            for(let i=0; i<products.length;i++){
                if(products[i]["name"]==secetvalue){
                    elements.forEach(function(item){
                        if(item.className!==undefined && item.className.indexOf("field")>=0){
                            item.children[0].value=products[i][item.children[0].name];
                        }
                    });
                }
            }
        }
        
        function initProductSelect(){
            let selects=document.getElementsByName("meal");
            selects.forEach(function(item){
                item.onchange=function(e){
                    let selectValue=e.target.value,
                        elements=e.target.parentNode.childNodes;
                    fillInputs(products, selectValue, elements);
                };
            });
        }
        
        addBtn.addEventListener("click", addNewMealItem);
        initProductSelect();
    }
    
    

    new MealConstuctor("constructor", products);
});



