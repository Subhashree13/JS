console.log("index.js")
//using DOM API for page manipulation

let box  = document.querySelector('.alert-info')
let hideBtn = document.querySelector('.btn-danger')
let showBtn = document.querySelector('.btn-success')
let nextBtn = document.querySelector('.btn-primary')
hideBtn.addEventListener('click',e=>{
    box.style.display='none'
})

showBtn.addEventListener('click',e=>{
    box.style.display=''
})
nextBtn.addEventListener('click',e=>{
    box.style.display='will have a small break'
})

let catEle = document.getElementById('catEle');
// let idx = 1;
// let interval = setInterval(()=>{
//     let imgPath = `images/${idx}.jpg`
//     if(idx!=2)
//     pandaEle.src = imgPath
//     idx++;
//     if (idx > 5)
//         idx = 1;
// }, 1000);
    

let interval;
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
startBtn.addEventListener('click',e=>{
    stopBtn.disabled = false;
    startBtn.disabled = true;
    let idx = 1;
    interval =setInterval(()=>{
        let imgPath = `images/cat${idx}.jpg`
        if(idx!=2)
        catEle.src = imgPath
        idx++;
        if (idx > 3)
            idx = 1;
    }, 1000);
    
});
stopBtn.addEventListener('click',e=>{
    stopBtn.disabled = true;
    startBtn.disabled = false;
    
    
});
clearInterval(interval);
//Using DOM and API


let todoBtn = document.getElementById('todosBtn');
todoBtn.addEventListener('click', e=>{
    loadTodos(5);
})
let selectBtn = document.getElementById('pageCount');
selectBtn.addEventListener('change',e=>{
    loadTodos(e.target.value);
})

function loadTodos (limit)
{
    let xhr = new XMLHttpRequest();
    let apiURL = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`;
    xhr.open('GET',apiURL);
    xhr.send();
    xhr.onreadystatechange = function(){
    if(xhr.readyState===4)
    {
        let json = xhr.responseText;
        let todos = JSON.parse(json);
        console.log(todos);
        //to display in the UI
        let liItem = todos.map((todo,idx)=>{
            return`
            <li class="list-group-item">
            <span class="badge badge-dark">${todo.id}</span>
            <span>${todo.tittle}</span>
            <span>${todo.completed}</span>
            </li>`
        })
        document.getElementById('todos').innerHTML = liItem.join(" ");
    }
    }
}
