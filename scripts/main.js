window.addEventListener("DOMContentLoaded",function(){
    
    //The main product constructor
    
    function Product(n,p,c,f,k){
        this.amount=100;
        this.name=n;
        this.prots=p;
        this.carbs=c;
        this.fats=f;
        this.kkal=k;
        this.count=function(gramm){
            var gramm=gramm/100;
            this.nprots=this.prots*gramm;
            this.ncarbs=this.carbs*gramm;
            this.nfats=this.fats*gramm;
            this.nkkal=this.kkal*gramm;
        }
    }
    
    //The main array with all products. Insert here new products
    
    let products=[
        new Product("none","0","0","0", "300"),
        new Product("rice","0","78.9","0.7", "300"),
        new Product("backweat","0","54.4","3.2", "300"),
        new Product("egg","12.7","0.7","10.9", "300")
    ]
    
    //The main 
    
    function MealConstuctor(id,products){
        
        let constructor=document.getElementById(id),
            addBtn=document.querySelector(".add-btn"),
            mealItme=document.querySelector(".meal-item"),
            control=document.querySelector(".control"),
            clonedEl=mealItme.cloneNode(true);

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

        
        
        function fillInputs(products, selectvalue, elements){
            
            for(let i=0; i<products.length;i++){
                if(products[i]["name"]==selectvalue){
                    let product=products[i],prots,carbs,fats,kkal,amount;
                    elements.forEach(function(item){
                        if(item.className!==undefined && item.className.indexOf("field")>=0){
                            
                            if(item.children[0].name=="prots"){prots=item.children[0]; console.log(prots)};
                            if(item.children[0].name=="carbs"){carbs=item.children[0]};
                            if(item.children[0].name=="fats"){fats=item.children[0]};
                            if(item.children[0].name=="kkal"){kkal=item.children[0]};
                            if(item.children[0].name=="amount"){amount=item.children[0]};
                             
                            item.children[0].value=products[i][item.children[0].name];
                            
                        }
                    });
                    amount.onchange=function(){
                        
                        product.count(amount.value);
                        prots.value=product.nprots.toFixed(2);
                        carbs.value=product.ncarbs.toFixed(2);
                        fats.value=product.nfats.toFixed(2);
                        kkal.value=product.nkkal.toFixed(2);
                    }
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
        
        function addNewMealItem(){
            let removeBtn=document.createElement("div");
            removeBtn.innerHTML="-";
            removeBtn.classList.add("remove-btn");
            let newEl=clonedEl.cloneNode(true);
            newEl.append(removeBtn);
            constructor.insertBefore(newEl, control);
            removeMealItem();
            initProductSelect();
        }
        
        addBtn.addEventListener("click", addNewMealItem);
        initProductSelect();
    }
    
    

    new MealConstuctor("constructor", products);
});



