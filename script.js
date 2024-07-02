const container = document.querySelector(".container");

function createGrid(){
    for (let i = 0; i < 16; i++){
        const column = document.createElement("div");
        column.classList.add("column");
    
        container.appendChild(column);
        
        for(let j = 0; j < 16; j++){
            const row = document.createElement("div");
            row.classList.add("row");
    
            column.appendChild(row);
        };
    };
};
createGrid();

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    getInput()

    if(input < 1 || input > 100){
        alert("You must select a value between 1 and 100");
        getInput();
    }
    else{
        console.log(input);
    }
});

function getInput(){
    let input = prompt("Select a value between 1 and 100");
}