var members = [
    "0.jpg", 
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
    "My Family-Book", 
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

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 10) {
    
    count = 0;

    }

    }