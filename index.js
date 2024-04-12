// Ask the user their name and organisation; 
// store info in a cookie


// Check cookies
function checkCookie() {
    var user = getCookie("username");

    if (user != "") {
        alert("Welcome back " + user + " from " + organization);

    } else {
        // Get user's name and organization
        user = prompt("Please enter your name:", "");
        organization = prompt("Please enter your organization:", "");

        console.log(user);
        console.log(organization);

        if (user != "" && user != null) {
            // store user's name and organization to cookie
            setCookie("username", user, "organization", organization, 3);
        }

    }
}

// Get cookies
function getCookie(){
    return document.cookie;
}

// Set cookies
function setCookie(cname, cvalue, corganization, cvalue2, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + " & " + corganization + " = " + cvalue2 + ";" + expires + ";path=/";
}

// Randomly shows one of the projects every 30 seconds
const projects = {
    1: {
        "title": "<h4>Mars Wrigley Sustainability Packathon 2020</h4>",
        "description": "<p>Designed a reverse supply chain model to recycle discarded plastic packaging of Mars Wrigley’s candies and chocolate products at minimum cost. Developed supplementary implementation plans and marketing plans. Figured out CFLP model and VRP model combined as Location-Routing This solution aligns with Mars’ Circular Packaging Plans of 2025 with an impact of potentially reducing 4.3 million tons of plastic waste, 37.47 billion kWh of energy consumption and 7.74 million tons of oil by utilizing recycled plastics.</p>",
        "image": '<img src="./images/project1.jpg" alt="project brief">'
    },

    2: {
        "title": "<h4>Commercializing Ion Accelerators from LBNL</h4>",
        "description": "<p>Self-learned the nuclear engineering knowledge and semiconductor knowledge of the patented technology. Collaborated with team members to conduct market research and interview industry experts through internal/external resources to identify market access opportunities for the technology. Discovered elemental analysis industry as a potential market and finished the analysis independently.</p>",
        "image": '<img src="./images/project2.png" alt="project image">'
    },

    3: {
        "title": "<h4>Improving Detection of Healthcare Fraud via ML</h4>",
        "description":"<p>Conducted industry research to identify bottlenecks, opportunities and key stakeholders of US healthcare insurance. Discovered 3 categories of prediction features and helped map out statistical analysis strategy. Collected and scrutinized datasets for machine learning models in R. Tested models and interpreted results to provide quality data solutions and discover potential improvements. Increased model accuracy by 7.9% and decreased FP rate to 0.3%. Improved claim review process for healthcare insurance providers cost-efficiently by saving $474 million every year. </p>",
        "image": '<img src="./images/project3.jpg" alt="Machine Learning project">'

    }

}

function displayProjects(){

    // generate a random number from 0, 1, 2
    var randomNum = Math.floor(Math.random() * 3 + 1);
    console.log(randomNum)

    document.getElementById("display-projects").innerHTML = '<div">'+projects[randomNum].title + projects[randomNum].description + '</div>'
                                                        + '<div>'+ projects[randomNum].image + '</div>';

}
