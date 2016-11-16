//Creating the project objects for modal.
var projects = {
    1: {
        title: "Single Screen App",
        text: "This was my first project for Android Basics NanoDegree, The Single Screen App. " +
              "Super simple but a great starting place in learning the fundumentals of XML.",
		
        imageSrc: "Images/single_screen_app.png",
        codeLink: false,
        pageLink: false
    },
    2: {
        title: "Court Counter App",
        text: "This was my second project for Udacity's Android Basics NanoDegree, The Court Counter. " +
		"Again, super simple but adding some very basic Java code for functionality. " +
		"A good example for learning the fundumentals of XML, Java and their integration.",
		
        imageSrc: "Images/court_counter_app.png",
        codeLink: "https://github.com/go-0100-it/Count-Counter_App",
        pageLink: false
    },
    3: {
        title: "Quiz App",
        text: "This was my third project for the Udacity's Android Basics NanoDegree, The Quiz App. " +
		"This app was still fairly basic but for the core functionality, it was necessary to expand on the fundamentals of Java. (eg. using methods and conditionals) " +
		"The notion of multiple activities hadn't been introduced at this point in the program but this app simulated it very well and gave the multi-screen feel by reusing only one view.",
		
        imageSrc: "Images/quiz_app.png",
        codeLink: "https://github.com/go-0100-it/Quiz-App",
        pageLink: false
    },
    4: {
        title: "Musical Structure App",
        text: "This was my fourth project for Udacity's Android Basics NanoDegree, The Musical Structure App. " +
		"The intent of this project was to demonstrate the technics learned for creating multi screen/activity applications. " +
		"The focus was entirely on the struncture of the UI and the navigation functions, no other functionality was created.",
		
        imageSrc: "Images/music_player_app.png",
        codeLink: "https://github.com/go-0100-it/Musical-Structure-App",
        pageLink: false
    },
    5: {
        title: "Report Card",
        text: "This was my fifth project for Udacity's Android Basics NanoDegree, The Report Card App. " +
		"This project has no associated UI, it is entirely Java code.  " +
		"The code created for this project is a Custom Java Class representing a report card object.",
		
        imageSrc: false,
        codeLink: "https://github.com/go-0100-it/Report-Card-Class",
        pageLink: false
    },
    6: {
        title: "Tour Guide App",
        text: "This was my sixth project for Udacity's Android Basics NanoDegree, The Tour Guide App. " +
		"This app listed all the current attactions in Toronto Ontario, and linked you to those events' web pages.",
		
        imageSrc: "Images/tour_guide_app.png",
        codeLink: "https://github.com/go-0100-it/Tour-Guide-App",
        pageLink: false
    },
    7: {
        title: "Book Listing App",
        text: "This was my seventh project for Udacity's Android Basics NanoDegree, The Book Listing App. " +
		"This section of the NanoDegree introduced basic networking for android applications including APIs, " +
		"creating and handling Http requests, and parsing JSON.  With my newly acquired knowledge and skills I was able " +
		"to create a book listing app that searches google books by keyword and returns a list of books.",
		
        imageSrc: "Images/book_listing_app.png",
        codeLink: "https://github.com/go-0100-it/Book-Listing-App",
        pageLink: false
    },
    8: {
        title: "News App",
        text: "This was my eighth project for Udacity's Android Basics NanoDegree, The News App. " +
		"With this app I showcase my understanding of, and the difference between, Async Tasks and Loaders. " +
		"As well as, demonstrating the ability to parse larger slightly more complex JSON data. " +
		"This app uses preset values to query The Guardian's APIs then parses the returned JSON data and presents to the user via a custom listview.",
		
        imageSrc: "Images/news_app.png",
        codeLink: "https://github.com/go-0100-it/News-App",
        pageLink: false
    },
    9: {
        title: "Habit Tracker App",
        text: "This was my ninth project for Udacity's Android Basics NanoDegree, The Habit Tracker App. " +
		"This project did not require a UI.  The code I created demonstrates how to impement a SQLite Database for Android applications. ",
		
        imageSrc: false,
        codeLink: "https://github.com/go-0100-it/Habit-Tracker",
        pageLink: false
    },
    10: {
        title: "Inventory App",
        text: "This was my tenth project for Udacity's Android Basics NanoDegree, The Inventory App. " +
		"The main focus of this project was to demonstrate my acquired knowledge for creating and using SQlite databases. " +
		"As this was the last project of the program, I incorporated all the concepts, tools, and technics covered throughout the NanoDegree",
		
        imageSrc: "Images/inventory_app.png",
        codeLink: "https://github.com/go-0100-it/Inventory-App",
        pageLink: false
    },
    11: {
        title: "Web Page",
        text: "This was my first project for Udacity's Intro to Programming NanoDegree, Getting Started with HTML. " +
		"After the first lesson of the NanoDegree I was able to create this very basic web page.",
		
        imageSrc: false,
        codeLink: false,
        pageLink: "HTML/Stage_0.html"
    },
    12: {
        title: "Styled Web Page",
        text: "This was my second project for Udacity's Intro to Programming NanoDegree, Make a Web Page. " +
		"I went a little above and beyond with this project and created this webpage that you are currently viewing. " +
		"I've added some basic functionality with javascript and even incorporated an SVG file inline within my HTML." +
		"This page should scale to almost any size display and still look good...I hope! :)",
		
        imageSrc: false,
        codeLink: false,
        pageLink: false
    }
}


// Get the modal
var _modal = document.getElementById('myModal');
// Get the elements of the modal for reference
var modelTitle = document.getElementById("modal_title");
var modalText = document.getElementById("modal_text");
var modalImage = document.getElementById("project_example_image");
var modalCodeLink = document.getElementById("code_link");
var modalPageLink = document.getElementById("page_link");
var modalCodeLinkContainer = document.getElementById("code_link_container");
var modalPageLinkContainer = document.getElementById("page_link_container");

//A function to invoke pointer related function statements
function pointer(func, element, evt) {
    if (element) {
        func(element);
    } else if (evt) {
        func(evt);
    }
}

//A function to invoke modal related function statements
function modal(func, projectNum) {
    if (projectNum) {
        func(projectNum);
    } else {
        func(clear);
    }
}

// On pointer hover set white close image.
var hover = function(element) {
    element.setAttribute('src', 'Images/close_button_white.png');
}

// When pointer is no long hovering set grey close image.
var unhover = function(element) {
    element.setAttribute('src', 'Images/close_button_grey.png');
}

// When pointer is no long hovering reduce ball radius and return to original opacity.
var makeOpaque = function(evt) {
    evt.target.setAttributeNS(null, "opacity", "1");
    evt.target.setAttributeNS(null, "ry", "110");
    evt.target.setAttributeNS(null, "rx", "110");
}

// On pointer hover increase ball radius and reduce opacity.
var makeTransparent = function(evt) {
    evt.target.setAttributeNS(null, "opacity", "0.15");
    evt.target.setAttributeNS(null, "ry", "130");
    evt.target.setAttributeNS(null, "rx", "130");
}

// A function statement to be passed to the modal function when the user clicks the button.
// The modal function will invoke this function to show the modal.
// Also selecting the project object and extracting the corresponding project values.
var show = function(projectNum) {

    modelTitle.textContent = projects[projectNum].title;
    modalText.textContent = projects[projectNum].text;

    //Setting the project image to the modal if one exists else, hiding the img container.
    if (projects[projectNum].imageSrc) {
        modalImage.style.display = "block";
        modalImage.src = projects[projectNum].imageSrc;
    } else {
        modalImage.style.display = "none";
    }

    //Setting the code link Url of the selected project if one exists else, hiding the element.
    if (projects[projectNum].codeLink) {
        modalCodeLinkContainer.style.display = "block";
        modalCodeLink.href = projects[projectNum].codeLink;
    } else {
        modalCodeLinkContainer.style.display = "none";
    }

    //Setting the page link Url of the selected project if one exists else, hiding the element.
    if (projects[projectNum].pageLink) {
        modalPageLinkContainer.style.display = "block";
        modalPageLink.href = projects[projectNum].pageLink;
    } else {
        modalPageLinkContainer.style.display = "none";
    }

    //Displaying the modal.
    _modal.style.display = "block";
}

// A function statement to be passed to the modal function, to hide the modal.
var close_modal = function(func) {
    this.clear();
    _modal.style.display = "none";
}

// A function statement to be passed to the modal function, to clear all previously set element values.
var clear = function() {
    modelTitle.textContent = "";
    modalText.textContent = "";
    modalImage.src = "";
}