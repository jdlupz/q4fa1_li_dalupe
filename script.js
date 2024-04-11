//name functions: for checking
function nameBlur()
{
    var x = document.getElementById("name").value;
    if (x == "")
    {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name").style.background = "white";
    }
    else
    {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("name").style.background = "white";
    }  
}
function nameFocus()
{
    var x = document.getElementById("name").style.background = "lightgray";
}

//username functions: for checking
function userNameBlur()
{
    var x = document.getElementById("userName").value;
    if (x == "")
    {
        document.getElementById("userName").style.borderColor = "red";
        document.getElementById("userName").style.background = "white";
    }
    else
    {
        document.getElementById("userName").style.borderColor = "green";
        document.getElementById("userName").style.background = "white";
    }
}
function userNameFocus()
{
    var x = document.getElementById("userName").style.background = "lightgray";
}

//password functions: for checking
function pwordBlur()
{
    var x = document.getElementById("pword").value;
    if (x == "")
    {
        document.getElementById("pword").style.borderColor = "red";
        document.getElementById("pword").style.background = "white";
    }
    else
    {
        document.getElementById("pword").style.borderColor = "green";
        document.getElementById("pword").style.background = "white";
    }
}
function pwordFocus()
{
    var x = document.getElementById("pword").style.background = "lightgray";
}

//email functions: for checking
function emailBlur()
{
    var x = document.getElementById("email").value;
    if (x == "")
    {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.background = "white";
    }
    else
    {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("email").style.background = "white";
    }
}
function emailFocus()
{
    var x = document.getElementById("email").style.background = "lightgray";
}

//address functions: for checking
function addressBlur()
{
    var x = document.getElementById("address").value;
    if (x == "")
    {
        document.getElementById("address").style.borderColor = "red";
        document.getElementById("address").style.background = "white";
    }
    else
    {
        document.getElementById("address").style.borderColor = "green";
        document.getElementById("address").style.background = "white";
    }
}
function adressFocus()
{
    var x = document.getElementById("address").style.background = "lightgray";
}

//age functions: for checking
function ageBlur()
{
    var x = document.getElementById("age").value;
    if (x == "")
    {
        document.getElementById("age").style.borderColor = "red";
        document.getElementById("age").style.background = "white";
    }
    else
    {
        document.getElementById("age").style.borderColor = "green";
        document.getElementById("age").style.background = "white";
    }
}
function ageFocus()
{
    var x = document.getElementById("age").style.background = "lightgray";
}

//bday functions: for checking
function bdayBlur()
{
    var x = document.getElementById("bday").value;
    if (x == "")
    {
        document.getElementById("bday").style.borderColor = "red";
        document.getElementById("bday").style.background = "white";
    }
    else
    {
        document.getElementById("bday").style.borderColor = "green";
        document.getElementById("bday").style.background = "white";
    }
}
function bdayFocus()
{
    var x = document.getElementById("bday").style.background = "lightgray";
}

//gender functions: for checking
function genderBlur()
{
    var x = document.getElementById("gen").value;
    if (x == "Select")
    {
        document.getElementById("gen").style.borderColor = "red";
        document.getElementById("gen").style.background = "white";
    }
    else
    {
        document.getElementById("gen").style.borderColor = "green";
        document.getElementById("gen").style.background = "white";
    }
}
function genderFocus()
{
    var x = document.getElementById("gender").style.background = "lightgray";
}

//interests functions: for checking
function interestsBlur()
{
    var x = document.getElementById("interests").value;
    if (x == "")
    {
        document.getElementById("interests").style.borderColor = "red";
        document.getElementById("interests").style.background = "white";
    }
    else
    {
        document.getElementById("interests").style.borderColor = "green";
        document.getElementById("interests").style.background = "white";
    }
}
function interestsFocus()
{
    var x = document.getElementById("interests").style.background = "lightgray";
}

//details output
function information()
{
    var name = document.getElementById("name").value;
    var username = document.getElementById("userName").value;
    var password = document.getElementById("pword").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var age = document.getElementById("age").value;
    var bday = document.getElementById("bday").value;
    var gender = document.getElementById("gen").value;
    var interests = document.getElementById("interests").value;

    document.getElementById("display").innerHTML = "Name: " + name + "<br><br>" + "Username: " + username + "<br><br>" + "Password: " + password + "<br><br>" + "Email: " + email + "<br><br>" + "Address: " + address + "<br><br>" + "Age: " + age + "<br><br>" + "Birthdate: " + bday + "<br><br>" + "Gender: " + gender + "<br><br>" + "Interests: " + interests + "<br><br>";

    return false;
}

//reset function
function again()
{
    document.getElementById("name").style.borderColor = "black";
    document.getElementById("name").style.background = "white";

    document.getElementById("userName").style.borderColor = "black";
    document.getElementById("userName").style.background = "white";

    document.getElementById("pword").style.borderColor = "black";
    document.getElementById("pword").style.background = "white";

    document.getElementById("email").style.borderColor = "black";
    document.getElementById("email").style.background = "white";

    document.getElementById("address").style.borderColor = "black";
    document.getElementById("address").style.background = "white";

    document.getElementById("age").style.borderColor = "black";
    document.getElementById("age").style.background = "white";

    document.getElementById("bday").style.borderColor = "black";
    document.getElementById("bday").style.background = "white";

    document.getElementById("gen").style.borderColor = "black";
    document.getElementById("gen").style.background = "white";

    document.getElementById("interests").style.borderColor = "black";
    document.getElementById("interests").style.background = "white";

    document.getElementById("display").innerHTML="";
}