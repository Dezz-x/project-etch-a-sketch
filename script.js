const container = document.querySelector(".container");
const defaultGrid = createGrid();

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


const btn = document.querySelector(".btn");

btn.addEventListener("click", (getUserInput));

function getUserInput(){
    let userInput = prompt("Select a value between 1 and 100");

    if(userInput < 0 || userInput > 100){
        alert("You must select a value between 1 and 100");
        getUserInput();
    }
    else if(userInput == 0){
        return;
    }
    else{
        console.log(userInput);
    }

    for(let i = 0; i < userInput; i++){
        const userColumn = document.createElement("div");
        userColumn.classList.add("column");

        container.appendChild(userColumn);

        for(j = 0; j < userInput; j++){
            const userRow = document.createElement("div");
            userRow.classList.add("row");

            userColumn.appendChild(userRow);
        }
    }
};

