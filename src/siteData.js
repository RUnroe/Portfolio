const siteData = {

    home: {

        knownTechIcons: [
            "fab fa-html5",
            "fab fa-css3",
            "fab fa-js-square",
            "fab fa-node-js",
            "fab fa-react",
            "fab fa-angular",
            "devicon-spring-plain",
            "fab fa-git-alt",
            "devicon-csharp-plain",
            "fab fa-java",
            "devicon-php-plain",
            "fab fa-python",
            "devicon-nginx-original",
            "devicon-raspberrypi-line",
            "fab fa-linux",
            "devicon-mongodb-plain",
            "devicon-illustrator-plain",
            "devicon-figma-plain",
        ]
    },
    socials: [
        {
            title: "Linkedin", //Use this with title to make image alt e.g. (Linkedin - ryanunroe)
            username: "ryanunroe",
            iconComponent: <i className="fab fa-linkedin-in"></i>,
            url: "https://www.linkedin.com/in/ryanunroe/",
            ariaLabel: "Navigate to Ryan's LinkedIn",
            isContactSocial: true,
        },
        {
            title: "GitHub", 
            username: "RUnroe",
            iconComponent: <i className="fab fa-github"></i>,
            url: "https://www.linkedin.com/in/ryanunroe/",
            ariaLabel: "Navigate to Ryan's Github",
            isContactSocial: false,
        },
        {
            title: "Gmail", 
            username: "ryanunroe@gmail.com",
            iconComponent: <i className="fas fa-envelope"></i>,
            url: "mailto:ryanunroe@gmail.com",
            ariaLabel: "Send Ryan an email",
            isContactSocial: true,
        },
    ],
    projects: {

    },

}

export default siteData;