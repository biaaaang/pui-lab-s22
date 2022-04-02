
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
               new Course("05430","Progamming Usable Interfaces", "B", "Hudson", "W", "10:10AM - 11:30AM", 0, 3, "WEH 5415")]



function onLoad() {
    
    // check if there is local storage
    var selected = JSON.parse(localStorage.getItem('mySelected'));
    if (selected === null) {
        selected = [];
    }
    
    document.getElementsByClassName("cart_page")[0].textContent =
            "My Courses (" + selected.length + ")";

    // add rows into the table
    for (let i = 0; i < courses.length; i++) {
        var tab = document.getElementById("section_table");
        var newRow = tab.insertRow();
        allContent = "<td>"+courses[i].section+"</td><td>"
                           +courses[i].section+"</td><td>"
                           +courses[i].instructor+"</td><td>"
                           +courses[i].time+"</td><td>"
                           +courses[i].waitlist+"</td><td>"
                           +courses[i].maxEnroll+"</td><td>"
                           +courses[i].location+"</td>";
        
        // check if course[i] is in selected
        let isIn = false;
        
        for (let j=0; j < selected.length; j++){
            if (courses[i].number == selected[j].number && 
                courses[i].section == selected[j].section) {
                    isIn = true;            
                } 
        }

        if (isIn == false && selected.length > 0) {
            allContent = allContent + '<td>Available</td> \
            <td class="operation switch" id="'+ i + '">Switch</td>';
        }
        else if(isIn == false && selected.length ==0){
            allContent = allContent + '<td>Available</td> \
                        <td class="operation register" id="'+ i + '">Register</a></td>';
        }
        else {
            allContent = allContent + '<td>Available</td> \
                        <td class="operation drop" id="'+ i + '">Drop</a></td>';
        }
        
        newRow.innerHTML = allContent;  
    }

    var linkRow = tab.insertRow();
    linkRow.innerHTML = '<td colspan="2"><a id="schedule_link" href="cart.html"> \
                         My course schedule(' + selected.length + ')</td>';
    
    // add course into selected by clicking register
    var operations = document.getElementsByClassName("operation");
    for (const operation of operations) {
        operation.addEventListener("click", function() {
            let index = operation.id;

            // if click Register
            if (operation.textContent === "Register") {
                selected.push(courses[index]);
                localStorage.setItem("mySelected", JSON.stringify(selected));
                for (const operation2 of operations) {

                    // turn the button into "drop"
                    if (operation2.id === operation.id) {
                        console.log(operation2.id);
                        operation2.textContent = "Drop";
                    }

                    // turn other buttons into "switch"
                    else {
                        operation2.textContent = "Switch";
                    }
                }
                window.alert("Section " + courses[index].section + " registered successfully!");    
            }

            // if click Drop
            else if (operation.textContent === "Drop") {
                if (confirm("Do you want to drop Section " + courses[index].section + " ?") == true) {
                    selected.pop();
                    localStorage.setItem("mySelected", JSON.stringify(selected));

                    // turn all buttons into "register"
                    for (const operation2 of operations) {
                        operation2.textContent = "Register";
                        }
                    }
                }

            // if click Switch
            else if (operation.textContent === "Switch") {
                if (confirm("Do you want to switch to Section " + courses[index].section + " ?") == true) {
                    selected.pop();
                    selected.push(courses[index]);
                    localStorage.setItem("mySelected", JSON.stringify(selected));
                    for (const operation2 of operations) {
                        if (operation2.id === operation.id) {
                            operation2.textContent = "Drop";
                        }
                        else {
                            operation2.textContent = "Switch";
                        }
                    }
                }    
            }
            document.getElementById("schedule_link").textContent
                        = "My course schedule(" + selected.length + ")";
            document.getElementsByClassName("cart_page")[0].textContent =
            "My Courses (" + selected.length + ")";
           
        });
    }
    
}


           