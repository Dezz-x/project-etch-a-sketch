const container = document.querySelector(".container");

function createRow(){
    for(let i = 0; i < 16; i++){
        const square = document.createElement("div");
        square.classList.add("square");
    
        container.appendChild(square);
    };
};

function createColumn(){
    for(let i = 0; i < 16; i++){
        createRow();
    };
};
createColumn();


