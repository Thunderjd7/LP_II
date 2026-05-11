function saveData()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    let user = {
        name:name,
        email:email,
        course:course
    };

    // AJAX POST Method

    let xhttp = new XMLHttpRequest();

    xhttp.open("POST","https://jsonplaceholder.typicode.com/posts",true);

    xhttp.setRequestHeader("Content-type","application/json");

    xhttp.send(JSON.stringify(user));

    // Local Storage

    localStorage.setItem("userdata",JSON.stringify(user));

    alert("Registration Successful");

    window.location="data.html";
}