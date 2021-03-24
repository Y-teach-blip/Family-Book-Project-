var images 
[
     "Grandfather.jpg",
     "Grandmother.jpg",
     "Uncle.jpg",
     "Father.jpg",
     "Aunty.jpg",
     "Sunita.jpg",
     "Sister.jpg",
     "Daughter.jpg",
     "Small Brother",
     "Big Brother",
     
];
  var names 
  [
       "Rajendra Prasad Sharma", "Gayatri Devi", "Vishnu Kumar Sharma", "Arun Kumar Sharma", "Gunjan Sharma",
       "Sunita Sharma", "Aarika Sharma", "Yoshi Sharma", "Akshat Sharma", "Aryan Sharma" 
  ];

  function nextslide() {
       if(i == 10)
       {
            i = 0;
       }
  }

  document.getElementById("album").src = names[i];

  i++;