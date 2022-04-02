function Course(number, name, section, instructor, day, time, waitlist, maxEnroll, location) {
    this.number = number;
    this.name = name;
    this.section = section;
    this.instructor = instructor;
    this.day = day;
    this.time = time;
    this.waitlist = waitlist;
    this.maxEnroll = maxEnroll;
    this.location = location;
}

var courses = [new Course("05430","Progamming Usable Interfaces", "A", "Hudson", "M", "10:10AM - 11:30AM", 0, 3, "PH 226A"),
               new Course("05430","Progamming Usable Interfaces", "B", "Hudson", "W", "10:10AM - 11:30AM", 0, 3, "WEH 5415")];

function onLoad() {

    var selected = JSON.parse(localStorage.getItem('mySelected'));
    if (selected === null) {
        selected = [];
    }
    document.getElementsByClassName("cart_page")[0].textContent =
            "My Courses (" + selected.length + ")";
    document.getElementById("list_title").textContent =
            'Selected List(' + selected.length + ')' ;

    for (let i = 0; i < selected.length; i++) {
        var tab = document.getElementById("course_list");
        tab.insertRow().innerHTML = "<td class='course_label' id=" + 
                                    i +" colspan='2'>" +
                                    selected[i].number + "<br>" +
                                    selected[i].name + "<br>" +
                                    "Section " + selected[i].section + "<br>" +
                                    "</td>";
        tab.insertRow().innerHTML = "<td class='operation' id='" + 
                                    i +"'>Sections</td> \
                                     <td class='operation' id='" + 
                                    i +"'>Drop</td>";    
        //create new labels for registered courses
        var newNode1 = document.createElement("div");
        newNode1.setAttribute("class", selected[i].number);
        newNode1.setAttribute("id", 'PUI1');
        newNode1.innerHTML = selected[i].number + '<br />' +
                               selected[i].name + '<br />' +
                               'Section ' + selected[i].section;
        var newNode2 = document.createElement("div");
        newNode2.setAttribute("class", selected[i].number);
        newNode2.setAttribute("id", 'PUI2');
        newNode2.innerHTML = selected[i].number + '<br />' +
                               selected[i].name + '<br />' +
                               'Section ' + selected[i].section;
        var newNode3 = document.createElement("div");
        newNode3.setAttribute("class", selected[i].number);
        newNode3.setAttribute("id", 'PUI3');
        newNode3.innerHTML = selected[i].number + '<br />' +
                               selected[i].name + '<br />' +
                               'Section ' + selected[i].section;
        var timeTab = document.getElementsByClassName("time_schedule")[0];
        console.log(timeTab);
        timeTab.appendChild(newNode1);
        timeTab.appendChild(newNode2);
        timeTab.appendChild(newNode3);
        

    }

    var operationButtons = document.getElementsByClassName("operation");
    for (const button of operationButtons) {
        button.addEventListener("click", function() {
            if (button.textContent == 'Drop') {

                if (confirm("Do you want to drop " + selected[button.id].name + " ?") == true) {
                    
                    //remove relevant elements
                    document.getElementsByClassName(selected[button.id].number)[0].remove();
                    document.getElementsByClassName(selected[button.id].number)[0].remove();
                    document.getElementsByClassName(selected[button.id].number)[0].remove();
                    selected.splice(button.id, 1);
                    localStorage.setItem("mySelected", JSON.stringify(selected));
                    document.getElementById("list_title").textContent = 
                            'Selected List(' + selected.length + ')' ;
                    document.getElementById(button.id).remove();
                    document.getElementById(button.id).remove();    
                    document.getElementById(button.id).remove();
                    

                }
                document.getElementsByClassName("cart_page")[0].textContent =
                    "My Courses (" + selected.length + ")";
            }
            else {
                window.location.href="details.html";
            }
        })
    }

    

    
    
}