function createUsers(userList, conditionalCategory = 0) {
    let element = document.getElementById("userList");
    element.innerHTML = "";
    let listElement = document.createElement("ul");
    listElement.id = "userList";
    if (!conditionalCategory) {
        userList.forEach(user => {
            listElement.appendChild(createUser(user));
        })
    } else {
        tempList = [...userList];
        tempList = tempList.filter(user => {
            return user.category == `category${conditionalCategory}`;
        })
        tempList.forEach(user => {
            listElement.appendChild(createUser(user));
        })
    }

    element.appendChild(listElement);
}

function createUser(user) {
    let item = document.createElement("li");
    let avatar = document.createElement("h2");
    let name = document.createElement("h3");
    let userCategory = document.createElement("h5");

    avatar.textContent = user.fName.substring(0, 1) + user.lName.substring(0, 1);
    avatar.classList.add("avatar");
    name.textContent = `${user.fName} ${user.lName}`;
    userCategory.textContent = user.category;
    userCategory.classList.add("category-item");

    item.appendChild(avatar);
    item.appendChild(name);
    item.appendChild(userCategory);


    return item;
}