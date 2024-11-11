const siteData = {

    home: {

        knownTechIcons: [
            { iconClass: "fab fa-react", iconName: "React" },
            { iconClass: "fab fa-node-js", iconName: "Node JS" },
            { iconClass: "devicon-spring-plain", iconName: "Spring Boot" },

            { iconClass: "fab fa-html5", iconName: "HTML" },
            { iconClass: "fab fa-css3", iconName: "CSS" },
            { iconClass: "fab fa-js-square", iconName: "JavaScript" },

            { iconClass: "fab fa-git-alt", iconName: "Git" },
            { iconClass: "devicon-figma-plain", iconName: "Figma" },
            { iconClass: "devicon-illustrator-plain", iconName: "Adobe Illustrator" },

            { iconClass: "fab fa-java", iconName: "Java" },
            { iconClass: "devicon-nginx-original", iconName: "Nginx" },
            { iconClass: "fab fa-linux", iconName: "Linux" },


            { iconClass: "fab fa-angular", iconName: "Angular" },
            { iconClass: "devicon-raspberrypi-line", iconName: "Raspberry Pi" },
            { iconClass: "devicon-mongodb-plain", iconName: "Mongo DB" },

            { iconClass: "devicon-csharp-plain", iconName: "C#" },
            { iconClass: "devicon-php-plain", iconName: "PHP" },
            { iconClass: "fab fa-python", iconName: "Python" },




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
    projects: [
        {
            "title": "Quant Freelance",
            "projectType": "A Freelance Webstore",
            "description": {
                what: "<p>Quant Freelance is a webstore for freelancers to sell their services such as digital art and copy editing. Users are able to sign up as a customer or seller and can find any service they desire through searching or filtering. Sellers are able to customize their product pages however they like with the use of a built in website builder. This allows them to brand their product however they like while keeping the benefit of  a centralized webstore.</p><p>Quant Freelance was built as my Capstone project at Neumont College of Computer Science.</p>",
                technical: "<p>Quant was split into two main parts: the front-end and the back-end. The front-end was created in React using hooks, while the backend was a simple Node Express server. The front-end was responsible for serving up the webpages to the user. The back-end kept track of user's sessions and controlled data access to the Mongo database. These two servers were hosted on a virtual private server behind an Nginx reverse proxy.</p>",
                takeaways: "<p>I did not see much value in a webstore that only ran locally, so the first thing I did was learn how to get this project on the internet. I learned how to purchase my own domain, and VPS. I then learned how to set up Nginx on the VPS and connect my domain to it.</p><p>After setting up my environment, I had to learn the new way of React with hooks and class components. I used this new knowledge to create my webpages and develop a mini website builder.</p>"
            },
            "images": ["service-page-example.png", "logo-small.png", "categories.png"],
            "imageLayout": "layout3a",
            "coverImage": "cover-image.png",
            "githubLink": "https://github.com/RUnroe/QuantFreelanceWebStore",
            "liveSiteLink": "https://quant.ryanunroe.com/",
            "primaryLanguage": "React",
            "languageColor": ["#ffffff", "#524E66"]
        },


        {
            "title": "RSnip",
            "projectType": "A react code snippet library",
            "description": {
                what: "<p>RSnip is an online tool that allows users to create and share small snippets of code built in React. Common web solutions shouldn't be hard to code. You've already done it once, why do it again? With RSnip, you can save your React code as a snippet to view and use later.</p>",
                technical: "<p>RSnip was built in a team of four for a projects class at Neumont College of Computer Science. The frontend was built in React and is served up through AWS Amplify. The backend of the website is built with AWS services. We use Amplify to host the site, Lambda's and a Rest API to serve data, and DynamoDB as the database.</p>",
                takeaways: "<p>This was the first time that any of the four of us had worked with AWS.This was a big learning curve, but we were able to utilize it how we needed in the time limit we had. I also learned how to render React code on the browser in an isolated container. I needed to make sure that any code written by users did not affect any other parts of the website.</p>"
            },
            "images": ["app.png", "landing.png"],
            "imageLayout": "layout2a",
            "coverImage": "cover-image.png",
            "githubLink": "https://github.com/DRoberts919/Rsnip",
            "liveSiteLink": "https://rsnip.ryanunroe.com/",
            "primaryLanguage": "React",
            "languageColor": ["#ffffff", "#34506e"]
        },
        {
            "title": "Janell Rogers",
            "projectType": "A Portfolio Site",
            "description": {
                what: "<p>A portfolio website for Janell Rogers, an Actor, Director, and Stage Manager. As Janell finished up college, she was in need of a lively and interactive way of sharing her work with the world. This portfolio features her works, resume, and ways to get in contact.</p>",
                technical: "<p>This portfolio was built in React, with Framer Motion for animations. As I was developing this site, I wanted to find an easy way for Janell to modify content on her own. This inspired my next project \"React Simple CMS\", which is a React library that offers an easy way for Janell to keep her portfolio fresh.</p>",
                takeaways: "<p>When developing this portfolio, I wanted to make sure the elements were lively to reflect the creative field Janell is in. I learned how to use Framer Motion to create text, page-transition, and on-scroll animations.</p>"
            },
            "images": ["home-page.png", "contact.png"],
            "imageLayout": "layout2b",
            "coverImage": "cover-image.png",
            "githubLink": "https://github.com/RUnroe/janell-portfolio",
            "liveSiteLink": "https://janellrogers.com/",
            "primaryLanguage": "React",
            "languageColor": [
                "#ffffff",
                "#ec5c86"
            ]
        },
        {
            "title": "Bifrost",
            "projectType": "A Discord Clone",
            "description": {
                what: "<p>Bifrost is a lightweight clone of Discord. It runs on the internet and allows users to chat in real-time. Users can create different accounts, servers (guilds), and channels. Users also have control over their profile image and guild image.</p><p>Bifrost was created in a team of 3 for a project class at Neumont College of Computer Science.</p>",
                technical: "<p>Both the front-end and the back-end of Bifrost is served up through a Node Express server. This Node server is running on a virtual private server behind an Nginx reverse proxy. The front-end uses pug to render the pages. A Cassandra database and snowflake identifiers are used to mimic Discord's back-end.</p>",
                takeaways: "<p>This was my first real web-based project in a group, so learning how to split up the work was a bit challenging. Thanks to good planning and following the scrum methodology, we were able to work well together. We all had a simple understanding of the technology we used, but this project allowed us to expand upon our knowledge even more. We also learned how to incorporate web sockets to allow messages to appear in real-time.</p>"
            },
            "images": ["landing.png", "app.png"],
            "imageLayout": "layout2a",
            "coverImage": "cover-image-2.png",
            "githubLink": "https://github.com/josephreed2600/bifrost",
            "liveSiteLink": "",
            "primaryLanguage": "JavaScript",
            "languageColor": ["#ffffff", "#49494A"]
        },



        {
            "title": "RasPi Getting Started",
            "projectType": "A Raspberry Pi Setup Guide",
            "description": {
                what: "<p>This single page application is a guide to help people get started with a Raspberry Pi. It contains multiple sections and graphics to help users follow along. This guide takes users through an introduction and shows how to set up their own Raspberry Pi. This guide also proposes potential next steps for the users to take if they wish.</p>",
                technical: "<p>This Raspberry Pi Getting Started guide was created as a SPA (single page application) in Angular. The pages were styled with custom SCSS and all of the images were taken/created and edited by me. </p>",
                takeaways: "<p>Throughout this project, I learned how to make a simple Angular application. With this, I learned how to load different content into a SPA. I also learned how to code in TypeScript.</p><p>I also took this opportunity to reinforce and gain more knowledge about Raspberry Pis. </p>"
            },
            "images": ["app-2.png", "sections.png"],
            "imageLayout": "layout2b",
            "coverImage": "cover-image.png",
            "githubLink": "https://github.com/RUnroe/RasPiGettingStarted",
            "liveSiteLink": "https://raspi.ryanunroe.com/page-1",
            "primaryLanguage": "Angular",
            "languageColor": ["#ffffff", "#DD0031"]
        },



        {
            "title": "Bello",
            "projectType": "A project management board",
            "description": {
                what: "<p>Bello is a lightweight clone of Trello, a project management board tool. Bello helps keep track of project tasks and how far along they are in the project. Bello is account based and supports multiple boards per user. Users can create lists within the boards and can drag their tasks from one list to the next.</p><p>Bello was originally created by other students. My teammate and I used this as an opportunity to learn how to work in existing code.</p>",
                technical: "<p>Originally this website only had a front-end and was built on a simple Node Express server with Pug. My teammate and I took this chance to recreate the front-end in React while also setting up a back-end and Mongo database. We then added more features such as accounts, multiple boards per user, data persistence, and full board customization.</p>",
                takeaways: "<p>From working on this project, I learned how to work in existing code. Learning how to read and understand someone else's code was not easy, but it helped me understand the different ways of looking at a problem. I also learned how to break up tasks into sizable chunks and create accurate time estimates.</p>"
            },
            "images": ["boards.png", "app.png"],
            "imageLayout": "layout2a",
            "coverImage": "cover-image.png",
            "githubLink": "https://github.com/RUnroe/Bello",
            "liveSiteLink": "",
            "primaryLanguage": "React",
            "languageColor": ["#ffffff", "#419fd9"]
        }
    ],

}

export default siteData;