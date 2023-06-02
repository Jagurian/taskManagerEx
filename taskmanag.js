const prompt = require('prompt-sync')({ sigint: true });

let tasks = ['hello']


const getOption = prompt("Press 1 to see all Task. Press 2 to add Task. Press 3 to delete a task. Press 4 to mark a task as done. Press 5 to Exit the task manager ");

if (getOption === '1'){
        console.log(tasks);

}else if (getOption === '2'){
    const newTask = prompt('enter new task name ');
    tasks.push(newTask);
    console.log(new task added.... ${newTask});

}else if (getOption === '3'){
    const toDelete = prompt('Enter task name to delete ');
    tasks.forEach(myFunction);
    function myFunction(value, index, array) {
        if (value === toDelete){
            tasks.pop(value);
        } 
      }
    console.log(tasks);

}else if(getOption === '4'){
    const taskDone = prompt('enter task name to mark done ');
    tasks.forEach(myFunction);
    function myFunction(value) {
        if (value === taskDone){
            tasks[value] = ${taskDone} Done;
            console.log('marked...');
            console.log(tasks);

        }
    }

}else{
    getOption === '5'
    console.log('End');
    return; 
}