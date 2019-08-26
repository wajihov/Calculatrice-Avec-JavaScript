console.log("Hello Project of calculator");
let tableHistory=[];
function myLoad(){
    document.getElementById("historyList").style.display="none";
}

function verify(entrance){
    let onlyThis ="0123456789-+*/."; 
    for (var item of onlyThis)
     if (onlyThis.indexOf(entrance.charAt(item))<0) 
        return false;    
    else
        return true;
}

function addChar(character){
    console.log("la valeur est : ", window.document.calculator.affiche.value + character);
    window.document.calculator.affiche.value=
    window.document.calculator.affiche.value + character;
}

function result(){
    let x=0;
    let op=[];
    let j=0;
    if(verify(window.document.calculator.affiche.value)){
        console.log(window.document.calculator.affiche.value);
        
        str=window.document.calculator.affiche.value;        
        
        let table=str.split(/[-+*/]/);
        
        let op=str.split(/\d+/);

        console.log(table);
        console.log("l'operator : ", op);
        // op=op.splice(op.length-1,1); // pr supprimer un element 
        // op=op.splice(0,1)
        
        for(let i =0 ; i<table.length; i++){
            console.log(table[i]);            
        }
        console.log("***************************");
        for(let i =1 ; i<op.length-1; i++){
            console.log(op[i]);            
        }
        console.log("***************************");
        tableHistory.push(str);
        console.log("- - - - - Foreach - - - - - - -")
        tableHistory.forEach(element => {
            console.log(element);
        });
        removeTable();
        insertTable();        
        x = eval(window.document.calculator.affiche.value)
        console.log("le x: ", x);
    }
    window.document.calculator.affiche.value=x;
}

function insertTable(){
    if(tableHistory==null){
        document.getElementById("historyList").style.display="none";
    }
    else{
        document.getElementById("historyList").style.display="block";
        for(let i=0;i<tableHistory.length; i++){
            let table =document.getElementById("historyList");
            let row = table.insertRow(table.length);
            let cell1=row.insertCell(0);
            cell1.innerHTML =  `<a href="#" class="MaCellule" onClick="onSelect(${tableHistory[i]})">${tableHistory[i]}</a>`;        
        }
    }    
}

function onSelect(td){
     window.document.calculator.affiche.value=td; 
}

function removeTable(){
    let tableHeaderRowCount = 0;
    let table = document.getElementById('historyList');
    let rowCount = table.rows.length;
    for (let i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
    }
}