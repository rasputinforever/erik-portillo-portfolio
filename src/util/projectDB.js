const projects = [
    {
        name: 'Columbia Laboratories Sample Submission',
        employmentType: 'Professional',
        deployed: 'https://submissions.us.tentamus.com/cannabis/',
        image: '/images/ecoc.PNG',
        description: 'Client submission form for Columbia Laboratories for new testing requests. Includes usable chain of custody and admin components for importing directly to LIMS.',
        type: 'public',
        components: ['React', 'NodeJS', 'Material UI', 'MySQL', 'ClickUp']
    },    
    {
        name: 'AirExpert',
        employmentType: 'Professional',
        deployed: 'https://www.airexpert.net/',
        image: '/images/airexpert.PNG',
        description: 'Platform for airline maintenance controllers to request and manage events with crews local to the location of the aircraft.',
        type: 'private',       
        components: ['NodeJS', 'Vue2', 'Bootstrap', 'Jira']
    },
    {
        name: 'Castaway: Flight of the Phoenix',
        employmentType: 'Personal',
        git: 'https://github.com/Team-CYOA/CYOA',
        type: 'public',
        image: '/images/castaway.JPG',
        description: 'A simple choose your own adventure game.',        
        components: ['NodeJS', 'Vue2', 'Bootstrap', 'mysql', 'Sequelize']
    },
    {
        name: 'Auto Compli-Mentor',
        employmentType: 'Personal',
        deployed: 'https://main.d3l3xweb6e8q2c.amplifyapp.com/',
        git: 'https://github.com/rasputinforever/auto-complimentor',
        image: '/images/mentors.JPG',
        description: 'An on-demand service providing customized bits of wisdom, advice, and compliments.',
        type: 'public',
        components: ['React', 'NodeJS', 'Bootstrap', '3rd Party API']
    },
    {
        name: 'Columbia Laboratories Workflow Management',
        employmentType: 'Professional',
        image: '/images/columbia.JPG',
        git: 'https://github.com/rasputinforever/cl-react',
        description: 'Workflow management system tying LIMS SQL database with Excel Document workflow tool. Provides additional business information analytics and other forms for day to day lab uses.',
        type: 'private',
        components: ['React', 'NodeJS', 'Material UI', 'mysql', 'excelJS']
    },
    {
        name: 'Columbia Laboratories VBA & XML Tracker',
        employmentType: 'Professional',
        image: '/images/columbia.JPG',
        git: 'https://github.com/rasputinforever/cl-vba-manager',
        description: 'A series of scripts that extracts Excel VBA and XML source data into a repository as an alternative source control tool for controlled documents.',
        type: 'private',
        components: ['NodeJS', 'ExcelJS', 'VBA']
    },
    {
        name: 'Employee Manager',
        employmentType: 'Personal',
        git: 'https://github.com/rasputinforever/Employee-Manager',
        image: '/images/employee.JPG',
        description: 'Terminal application which manages database of employees allowing editing, creation, and deletion of individuals within an organization.',
        type: 'public',
        components: ['mysql', 'NodeJS', 'inquirer']
    },
    {
        name: 'Auto ReadMe',
        employmentType: 'Personal',
        git: 'https://github.com/rasputinforever/Auto-ReadMe',
        image: '/images/readme.PNG',
        description: 'Terminal application which takes in a series of inputs and renders a usable ReadMe.MD file.',
        type: 'public',
        components: ['NodeJS', 'inquirer']
    },
    {
        name: 'My Weather Dashboard',
        employmentType: 'Personal',
        deployed: 'https://rasputinforever.github.io/My-Weather-Dashboard/',
        git: 'https://github.com/rasputinforever/My-Weather-Dashboard',
        image: '/images/weather.JPG',
        description: 'Website utilizing 3rd party APIs to generate a weather report for your area. Local storage used to store user history.',
        type: 'public',
        components: ['HTML', 'CSS', 'JavaScript', '3rd Party API', 'pure.css']
    },
    {
        name: 'Quiz Game',
        employmentType: 'Personal',
        deployed: 'https://rasputinforever.github.io/Quiz-Game/',
        git: 'https://github.com/rasputinforever/Quiz-Game',
        image: '/images/quiz.JPG',
        description: 'Simple Laboratory Quiz Game.',
        type: 'public',
        components: ['JavaScript', 'LocalStorage', 'HTML', 'CSS', 'Set-Timeout']
    },
    {
        name: 'Portfolio',
        employmentType: 'Personal',
        deployed: 'https://erikjustinportillo.com/',
        git: 'https://github.com/rasputinforever/erik-portillo-portfolio',
        image: '/images/portfolio.PNG',
        description: 'Codebase for the page you are looking at right now.',
        type: 'public',
        components: ['React', 'Semantic UI']
    }
    
]

export default projects
