const sidebarLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");
const menuLink = document.querySelectorAll("nav li");

// Get the last visited section from localStorage
let lastVisitedSectionId = localStorage.getItem("lastVisitedSection");

// Set the default section on initial entry or based on localStorage
if (lastVisitedSectionId) {
  document.getElementById(lastVisitedSectionId).style.display = "block";
} else {
  // Choose a default section (the first section)
  sections[0].style.display = "block";
  sidebarLinks[0].style.borderLeft = "5px solid #212529";
  sidebarLinks[0].style.backgroundColor = "#f8f9fa";
}

// Find the currently active link (based on lastVisitedSection)
const activeLink = document.querySelector(
  `nav a[href="#${lastVisitedSectionId}"]`
);
if (activeLink) {
    // Remove active styling from all links
    sidebarLinks.forEach((link) => {
      link.style.backgroundColor = ""; // Reset background color
      link.style.borderLeft = ""; // Reset border
    });
  
    // Set active styling to the default active link
    activeLink.style.backgroundColor = "#f8f9fa";
    activeLink.style.borderLeft = "5px solid #212529";
  
    // Update localStorage with the visited section ID
    localStorage.setItem("lastVisitedSection", activeLink.getAttribute('href').substring(1));
  }

sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Remove active styling from all links
    sidebarLinks.forEach((link) => {
      link.style.backgroundColor = ""; // Reset background color
      link.style.borderLeft = "";
    });

    // sidebarLinks.forEach((link) => {
    //     link.style.borderLeft = ""; // Reset background color
    //   });

    // Hide all sections
    sections.forEach((section) => {
      section.style.display = "none";
    });

    // Get the target section ID
    const targetSectionId = this.hash.substring(1);

    // Show the clicked section
    const targetSection = document.getElementById(targetSectionId);
    targetSection.style.display = "block";

    // Add active styling to the clicked link
    this.style.backgroundColor = "#f8f9fa";
    this.style.borderLeft = "5px solid #212529" 

    // Update localStorage with the visited section ID
    localStorage.setItem("lastVisitedSection", targetSectionId);
  });
});

function toggleMenu() {
  var sidebar = document.getElementById("sidebar");

  console.log(sidebar);

  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
  //     // Toggle the 'active' class to show/hide the menu
  //     menu.classList.toggle('active');

  //     // Add event listener to close menu when clicking outside of it
  //     function closeMenu(event) {
  //         var target = event.target;
  //         var isClickInsideMenu = menu.contains(target);

  //         // If the click is outside the menu, close it
  //         if (!isClickInsideMenu) {
  //             menu.classList.remove('active');
  //             document.removeEventListener('click', closeMenu); // Remove the event listener
  //         }
  //     }

  //     // Add or remove event listener based on menu visibility
  //     if (menu.classList.contains('active')) {
  //         document.addEventListener('click', closeMenu);
  //     } else {
  //         document.removeEventListener('click', closeMenu);
  //     }
}
