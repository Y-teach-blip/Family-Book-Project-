var members = [
    "1.jpg", 
    "2.jpg", 
    "3.jpg", 
    "4.jpg", 
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
    ];

    var names = [
    "Rajendra Prasad Sharma", 
    "Gayatri Devi", 
    "Vishnu Sharma", 
    "Arun Sharma", 
    "Gunjan Sharma",
    "Sunita Sharma",
    "Aarika Sharma",
    "Akshat Sharma",
    "Aryan Sharma",
    "Yoshi Sharma"
    ];

    var i = 0;

    function nextslide() {

    document.getElementById("members").src = members[i];

    document.getElementById("names").innerHTML = names[i];
    
    i++;

    if (i == 9) {
    
    i = 0;

    }

    }