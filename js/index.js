/*const persona = "juana";

const div = document.createElement("div")
div.innerText = "Lorem Ipsum "+persona+" is simply dummy text of the "+persona+" printing and typesetting industry. Lorem "+persona+" Ipsum has been the industry's standard dummy text ever since the 1500s, "+persona+" when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
document.body.append(div)*/
const initialList = [];
const deletedList = [];
initialList.push("camila", "sierri", "alesia", "carmen", "beatriz");
console.log(initialList);

function removeElementFromList() {
    const length = initialList.length;
    const elementToDelete = (Math.random() * length);
    const deleted = initialList.splice(elementToDelete, 1);
    deletedList.unshift(deleted[0])
    console.log(initialList)
    console.log(deletedList)
    console.log("-------------------------------------------------")
}




list1 = document.getElementById("initialList");

