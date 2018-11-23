// let todo = {
//     id: 1,
//     title: 'string',
//     description: 'description',
//     wypisz: function() {
//         console.log(this);
//         console.log(this.title);

//     }
// }

// todo.wypisz();


// function nazwafunkcji (/* atrybuty */) {
//     /* function body */
// }
// nazwafunkcji(1,2);

// let zmienna = function () { // funkcja anonimowa
//     /* function body */
// };

// zmienna(/*parametry*/);

let id = 0;
let newTitleInput = document.querySelector("#title");
let newDescriptionInput = document.querySelector("#description");
let addNewToDo = document.querySelector("#addtodo");
let todolist = document.querySelector("#todolist");
let delAll = document.querySelector("#delall");
let toDos;

toDos = JSON.parse(localStorage.getItem("toDos"));

if(!toDos){
    toDos = [];
}

let toDosLastIndex = toDos.length - 1 

if(toDos.length > 0){
    id = toDos[toDosLastIndex].id + 1;
}
render();

delall.addEventListener("click",
    function () {
        localStorage.clear();
        toDos = [];
        render();
    }
)

addNewToDo.addEventListener("click",
    function () {
        let title = newTitleInput.value;
        let description = newDescriptionInput.value;
        addToDo(title, description);
        render();
    }
);

function removeToDo(id) {
    toDos = toDos.filter(function (todo){
        return todo.id !== id;
    });
    render();
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function addToDo (title, description){
    let NewToDo = {
        id: id,
        title: title,
        description: description,
    };
    id++;
    toDos.push(NewToDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function render (){
    let todoListText = "";
    for(let i = 0; i < toDos.length; i++){
        // todoListText = todoListText + 'nowyText'; === todoListText += 'nowyText'
        todoListText +=  "<br><span> <h1 class=\"whiteText\">Id:</h1> " + toDos[i].id +
        " <br> <h1 class=\"whiteText\">Title:</h1> " + 
        toDos[i].title + 
        " <br> <h1 class=\"whiteText\">Description:</h1> " + 
        toDos[i].description +
        "<p>  </p><button onClick=\"removeToDo("+ toDos[i].id +")\">X</button><br>____________________________</span><br>";    
    }
    todolist.innerHTML = todoListText;
}

/*`<br>
<span> 
<h1 class="whiteText">Id:</h1> 
${toDos[i].id}
<br> 
<h1 class="whiteText">Title:</h1>`*/