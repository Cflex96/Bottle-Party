Name = document.getElementById("Lname")
Fname = document.getElementById("Fname")
Bottle = document.getElementById("bottle")
let x = 1

function inputForm(i) {
    let tablecell = document.createElement("input")
    tablecell.classList.add("tablecell")
    tablecell.type = "text"
    tablecell.setAttribute("readonly" , "true")
    row.cells[i].appendChild(tablecell)
}

function Input() {
    if (Name.value === "" || Fname.value === "" || Bottle.value ==="") {
        window.alert("Bitte füllen sie alle Eingabefelder aus!")
    } else {
        let table = document.getElementById("tbl")
        window.row = table.insertRow()
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)
        cell4.className = "btn-container"

        inputForm(0)
        inputForm(1)
        inputForm(2)

        cell1.firstChild.value = Name.value
        cell2.firstChild.value = Fname.value
        cell3.firstChild.value = Bottle.value
        Name.value = ""
        Fname.value = ""
        Bottle.value = ""

        let btn = document.createElement("input")
        btn.value = "Edit"

        counter = x++
        idMerge = `edit${counter}`
        btn.id = idMerge
        console.log(btn.id)
        btn.classList.add("button1" , "edit")

        btn.type = "button"
        btn.addEventListener("click", edit)
        cell4.appendChild(btn)
        
    } 
}

function edit() {
    let editButtonIndex = this.id
    let editIndex = editButtonIndex.substr(4)
    console.log(editIndex)
    let isEditModeOn = document.getElementById(editButtonIndex).hasAttribute("data-editmode")
    let currentEditMode = []
    for (let y = 0; y < 3; y++) {
        currentEditMode[y] = document.getElementById("tbl").rows[editIndex].cells[y].firstChild
    }
    console.log(currentEditMode)
        if (!isEditModeOn) {
            for (let i = 0; i < 3; i++) {
                console.log(i)
                currentEditMode[i].removeAttribute("readonly")  
            }
            document.getElementById(editButtonIndex).value = "Bestätigen"
            document.getElementById(editButtonIndex).setAttribute("data-editmode" , "true")
        }
        else {
            for (let i = 0; i < 3; i++) {
                currentEditMode[i].setAttribute("readonly" , "true")
            }
            document.getElementById(editButtonIndex).value = "Edit"
            document.getElementById(editButtonIndex).removeAttribute("data-editmode")
        }
}