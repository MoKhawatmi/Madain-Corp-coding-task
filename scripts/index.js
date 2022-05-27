fetch("https://filltext.com/?rows=20&pretty=true&fName={firstName}&lName={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]")
    .then(response => {
        response.json().then(data => {
            window.userList=data;
            createCategories(3);
            createUsers(data);
        })
    }).catch(err => {
        console.log(err);
        alert("an Error has occured")
    })

