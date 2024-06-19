const container = document.querySelector(".container");

/*function createRow(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const square = document.createElement("div");
            square.classList.add("square");
    
            container.appendChild(square);
        };
    };
};
createRow();*/

function createRow(){
    for(let i = 0; i < 16; i++){
        const rows = document.createElement("div");
        rows.classList.add("rows");

        container.appendChild(rows);
    };
};
createRow();

function createColumn(){
    for(let j = 0; j < 16; j++){
        const columns = document.createElement("div");
        columns.classList.add("columns")

        container.appendChild(columns);
    };
};
createColumn();
