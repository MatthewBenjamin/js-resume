var bio = {
    "name" : "Matt Benjamin",
    "role" : "Web Developer",
    "contacts" : {
        "email" : "Matt.G.Benamin@gmail.com",
        "mobile" : "82-010-2671-6699",
        "github" : "lerlalonde",
        "twitter" : "n/a",
        "location" : "Seoul, South Korea"
    },
    "bioPic" : "images/fry.jpg",
    "welcomeMessage" : "Hi, welcome to my interactive resume!",
    "skills" : [
        "html", "css", "python", "javascript"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);

    $("#topContacts").prepend(formattedLocation);
    $("#topContacts").prepend(formattedTwitter);
    $("#topContacts").prepend(formattedGit);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedMobile);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedWelcome);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // display skills at a glance
    if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(", "));
    $("#skills").append(formattedSkills);
    }
    
    var displayFooterContacts = function () {
        $("#footerContacts").append(formattedEmail)
                            .append(formattedMobile);
    }

    displayFooterContacts();
}

var projects = {
    "projects" : [
    {
        "title" : "Wiki",
        "dates" : "Aug 2014",
        "description" : "Built a wiki as the final project for Udacity's Web Development course.",
        "images" : ["http://placekitten.com/g/200/200"]
    },
    {
        "title" : "Blog",
        "dates" : "June 2014",
        "description" : "Built a blog as a cumulative project for Udacity's Web Development course.",
        "images" : ["http://placekitten.com/g/200/200"]
    },
    {
        "title" : "Portfolio",
        "dates" : "Nov 2014",
        "description" : "Portfolio site for Udacity's Intro to HTML & CSS course.",
        "images" : ["http://placekitten.com/g/200/200"]
    }
    ]
};

projects.display = function() {
    for (p in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
        $(".project-entry:last").append(formattedProjectDescription);

        for (image in projects.projects[p].images) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
}

var education = {
    "schools" : [
    {
        "name" : "UCONN",
        "location" : "Storrs, CT",
        "degree" : "BA",
        "majors" : ["Research Psychology", "Philosophy"],
        "dates" : "Dec 2008",
        "url" : "http://www.uconn.edu"
    }
    ],
    "onlineCourses" : [
        {
            "title" : "JavaScript Basics",
            "school" : "Udacity",
            "date" : "Jan 2015",
            "url" : "https://www.udacity.com/course/ud804-nd"
        },
        {
            "title" : "Intro to jQuery",
            "school" : "Udacity",
            "date" : "Jan 2015",
            "url" : "https://www.udacity.com/course/ud245-nd"
        },
        {
            "title" : "How to use Git",
            "school" : "Udacity",
            "date" : "Dec 2014",
            "url" : "https://www.udacity.com/course/ud775-nd"
        },
        {
            "title" : "Intro to HTML & CSS",
            "school" : "Udacity",
            "date" : "Dec 2014",
            "url" : "https://www.udacity.com/course/ud304-nd"
        },
        {
            "title" : "Web Development",
            "school" : "Udacity",
            "date" : "Aug 2014",
            "url" : "https://www.udacity.com/course/cs253"
        },
        {
            "title" : "Intro to Computer Science",
            "school" : "Udacity",
            "date" : "Feb 2014",
            "url" : "https://www.udacity.com/course/cs101"
        }
    ]
};

education.display = function() {

    //display formal education
    var displaySchools = function () {

        for (school in education.schools) {
            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDegree = formattedSchool + formattedDegree;        
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            
            $("#education").append(HTMLschoolStart)//;
            $(".education-entry:last").append(formattedSchoolDegree.replace("#", education.schools[school].url));
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);

            for(major in education.schools[school].majors) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }

    //display online courses
    var displayOnlineCourses = function () {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineContainer);

        for (course in education.onlineCourses) {
            //$("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

            $(".online").append(HTMLonlineStart);
            $(".online-entry:last").append(formattedTitleSchool);
            $(".online-entry:last").append(formattedDate);
            $(".online-entry:last").append(formattedURL);

            //$(".education-entry:last").append("<hr>"); TODO - make this the same length as the URL (or set pixels)
            //consider if adding this somewhere else (CSS?) is more appropriate, OR develop another CSS class for online
            //classes that will help separate the online classes (and personalize the resume) (slightly different color
            // from background to have each div pop out?)
        }
    }

    displaySchools();
    displayOnlineCourses();
}

var work = {
    "jobs" : [ 
    {
        "title" : "ESL Instructor",
        "employer" : "Chungdahm Learning Institute",
        "dates" : "2010-2012",
        "location" : "Seoul, South Korea",
        "description" : "Taught English to elementary and middle school students."
    },
    {
        "title" : "ESL Instructor",
        "employer" : "ChildU",
        "dates" : "2012-2013",
        "location" : "Gwangmyeong, South Korea",
        "description" : "Taught English to elementary and middle school students."
    }
    ]
};

work.display = function(){
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedCity = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedCity);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}

//skills chart
var skillsChart = {
    //node and link data
    chartData : {
        nodes: [
            { name: "PYTHON", type: "skill"},
            { name: "HTML", type: "skill"},
            { name: "CSS", type: "skill"},
            { name: "JAVASCRIPT", type: "skill"},
            { name: "WIKI", type: "project"},
            { name: "BLOG", type: "project"},
            { name: "PORTFOLIO", type: "project"},
            { name: "INTERACTIVE RESUME", type: "project"}
        ],

        edges: [
            { source: 0, target: 4, test: "test0" },
            { source: 0, target: 5, test: "test1" },
            { source: 1, target: 6, test: "test2" },
            { source: 1, target: 7, test: "test3" },
            { source: 2, target: 6, test: "test4" },
            { source: 2, target: 7, test: "test5" },
            { source: 3, target: 7, test: "test6" }
        ]
    }
}

skillsChart.display = function () {
    //svg dimensions
    var width = 800;
    var height = 600;

    //force chart parameters
    var distance = 400;
    var charge = -200;

    //assign class according to node type
    var nodeClass = function (d) {
        var type = d.type;
        if (type === "skill") {
            return "skill node"
        } else {
            return "project node"
        }
    }

    //mouseover animation
    var nodeMouseover = function () {
        d3.select(this)
            .transition()
            .duration(1000)
            .attr("r", 50);
    }

    //on mouseout, return to normal
    var nodeMouseout = function () {
        d3.select(this)
            .transition()
            .duration(1000)
            .attr("r", 40);
    }

    //when node is clicked, display node info and linked nodes in side div
    //NOTE, HTML variables (e.g. HTMLchartNodeType, etc.), are located in helper.js
    var nodeClick = function(d)  {
        //header
        var chartDescTop = function (d) {
            var formattedNode = HTMLchartNode.replace("%type%", d.type);
            formattedNode = formattedNode.replace("%node%", d.name);
            $("#nodeDescription").empty()
                                 .append(formattedNode);
        }

        //helper funcions for finding linked nodes
        var findTestType = function (d) {
            if (d.type === "skill") {
                return "source";
            } else {
                return "target";
            }
        }

        var findPrintType = function (d) {
            if (d.type === "skill") {
                return "target";
            } else {
                return "source";
            }
        }

        var testType = findTestType(d);
        var printType = findPrintType(d);

        //find linked nodes, display their info
        var displayInfo = function (link, printType) {
            var currentType = skillsChart.chartData.edges[link][printType].type;
            var currentName = skillsChart.chartData.edges[link][printType].name;
            var formattedLink = HTMLchartLinks.replace("%type%", currentType)
            formattedLink = formattedLink.replace("%node%", currentName);
            $("#chartContent").append(formattedLink);
        }
        var chartDescContent = function(d, testType, printType) {
            $("#nodeDescription").append(HTMLchartLinksStart);

            for (var link in skillsChart.chartData.edges) {
                var testNode = skillsChart.chartData.edges[link][testType];
                if (testNode == d) {
                    displayInfo(link, printType);
                }                     
            }
        }

        chartDescTop(d);
        chartDescContent(d, testType, printType);
    }

    //initialize chart divs
    var divSetup = function () {
        $("#skillsChart").append(HTMLchartContainer);
        $("#chartContainer").append(HTMLchartSvg);
        $("#chartContainer").append(HTMLchartDescStart);
    }

    divSetup();

    //create force chart object
    var force = d3.layout.force()
                         .nodes(skillsChart.chartData.nodes)
                         .links(skillsChart.chartData.edges)
                         .size([width, height])
                         .linkDistance([distance])
                         .charge([charge])
                         .start();

    //create svg object
    var svg = d3.select("#chartSvg")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    //create link objects
    var edges = svg.selectAll("line")
                   .data(skillsChart.chartData.edges)
                   .enter()
                   .append("line")
                   .attr("class", "line");

    //TODO use g tag and append circles to that in order to add labels?
    //create node objects
    var nodes = svg.selectAll("circle")
                    .data(skillsChart.chartData.nodes)
                    .enter()
                    .append("circle")
                    .attr("r", 40)
                    .attr("class", function (d) {
                        return nodeClass(d);
                    })
                    .on("mouseover", nodeMouseover)
                    .on("mouseout", nodeMouseout)
                    .on("click", function (d) {
                        nodeClick(d);
                    })
                   .call(force.drag);

    //assign x,y coordinates to chart elements
    force.on("tick", function () {
        edges.attr("x1", function(d) { return d.source.x; })
             .attr("y1", function(d) { return d.source.y; })
             .attr("x2", function(d) { return d.target.x; })
             .attr("y2", function(d) { return d.target.y; });

        nodes.attr("cx", function(d) { return d.x; })
             .attr("cy", function(d) { return d.y; });
    });
}

//call display functions
bio.display();
work.display();
projects.display();
education.display();
skillsChart.display();

//append Google Map to page
$("#mapDiv").append(googleMap);