$(document).ready(function() {
        // main function all these sub-functions will happened in the main function 
    // add function for button add event which click on my button 
    $("#addTask").on('click',function() {
        // Event delegation : the .on('click') method is used to habndle the event 


        // get the task from input  then add as an item to the list 

        // read the input and the task
        const taskText = $("#taskInput").val().trim();

        // if taskText exists and not empty 
        if(taskText){
            // add to the ul as item as <li>
            //create element li in jQuery 
           // in JavaScript  document.createElement()
           // taskItem.innerText = 
           // <li>text of the task input </li>
            const taskItem = $("<li>").text(taskText);
            // add Delete Button 
            //instead of create element I can append html code to the form to the list to the other element 
            // I assi=ociated the button to the taskItem 
            // if i remove taskItem by default I will remove all the association 
            taskItem.append(' <button class="delete">Delete</button>');
            // add or append to the ul 
            $("#taskList").append(taskItem);

            // reset or clear the input and the task 
            $("#taskInput").val('');
        }
    })

     // make the delete button work
     // remove the task from the list when we click on the button
     // we have two job to do remove the text and remove the delete button 

     $("#taskList").on('click','.delete',function() {
        // it means please remove the delete button and the item from the parent which in the list 
        // this refere to the item in the list (taskItem in the list )
        // we add we append the delete button to the taskItem 
        // if i remove the taskItem i will remove the delete button in the same time 
        // parent refers to taskItem (<li>) and button is a child for this taskItem 
        // if parent goes the child will follow 
        $(this).parent().remove();
     })
});
