function createCategory(categoryNum) {
    let label = document.createElement("label")
    let textElement = document.createElement("h5");
    let checkElement = document.createElement("input");
    checkElement.setAttribute("type", "checkbox");
    checkElement.classList.add("check-element");
    textElement.innerHTML = `category ${categoryNum}`;
    textElement.classList.add("category-item");
    checkElement.addEventListener("change", (e) => {
        if (e.target.checked) {
            let checkBoxes = document.querySelectorAll(".check-element");
            for (let i = 0; i < checkBoxes.length; i++) {
                if (checkBoxes[i].checked && checkBoxes[i] != e.target) {
                    checkBoxes[i].checked = false;
                }
            }
            filterUsers(categoryNum);
        } else {
            filterUsers(0);
        }
    });
    label.appendChild(checkElement)
    label.appendChild(textElement)
    return label;
}

function createCategories(categoriesNum) {
    let categoriesDiv = document.getElementById("categories");
    for (let i = 1; i <= categoriesNum; i++) {
        categoriesDiv.appendChild(createCategory(i));
    }
}

function filterUsers(categoryNum) {
    createUsers(window.userList, categoryNum);
}