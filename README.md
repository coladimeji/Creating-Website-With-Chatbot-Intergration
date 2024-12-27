yarn init -y
yarn add -D live-server eslint prettier
yarn add -D @babel/core @babel/cli @babel/preset-env
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader
yarn add -D eslint
yarn start
yarn add react-router-dom
yarn add dotenv
open 2 terminals, 
1 cd to server then node server.js
2 yarn start
													
							project/
							│
							├── public/ # Publicly accessible assets and static files
							│ ├── index.html # Main entry point for the app
							│ ├── images/ # Images used across the site
							│ │ ├── MCA_LOGO.jpg
							│ │ ├── services1.jpg
							│ │ ├── aboutus1.jpg
							│ │ └── (other images)
							│ ├── assets/ # Static assets
							│ │ ├── images/ # Images used in the app
							│ │ │ ├── example.jpg # Placeholder image
							│ │ │ └── (additional images)
							│ │ ├── css/ # Static CSS styles
							│ │ │ ├── services.css
							│ │ │ ├── about-us.css
							│ │ │ ├── chatbot.css # Chatbot-specific styles
							│ │ │ ├── main.css # Global styles
							│ │ │ └── (other styles)
							│ │ └── js/ # JavaScript files
							│ │ ├── chatbot.js # JavaScript for the chatbot UI
							│ │ ├── main.js # Main JavaScript for site interactions
							│ │ └── (other scripts)
							│ └── index/ # HTML pages for the website
							│ ├── index.html # Home page
							│ ├── services.html # Services page
							│ ├── about-us.html # About Us page
							│ ├── contact-us.html # Contact Us page
							│ ├── our-team.html # Our Team page
							│ └── ai-chatbot.html # Standalone chatbot page (optional)
							│
							├── src/ # Source directory for the app logic
							│ ├── components/ # UI components
							│ │ ├── AboutUs.js # About Us page component
							│ │ ├── Services.js # Services page component
							│ │ ├── OurTeam.js # Our Team page component
							│ │ ├── ContactUs.js # Contact Us page component
							│ │ ├── Home.js # Home page component
							│ │ └── Chatbot.js # Chatbot UI component
							│ ├── styles/ # CSS specific to components
							│ │ ├── services.css # Services page styles
							│ │ ├── about-us.css # About Us page styles
							│ │ ├── chatbot.css # Chatbot component styles
							│ │ ├── main.css # Global styles
							│ │ └── (other styles)
							│ ├── api/ # API integrations
							│ │ └── openai.js # Integration with OpenAI API
							│ ├── data/ # Data files
							│ │ └── mca-stories.csv # JSON file for chatbot knowledge base
							│ ├── .env # Environment variables
							│ ├── .env.example # Example environment variables
							│ ├── index.js # App entry point
							│ └── App.js # Main app logic
							│
							├── server/ # Server setup
							│ ├── server.js # Main server script
							│ ├── routes/ # API routes
							│ │ └── ai.js # Route for AI chatbot processing
							│ ├── middlewares/ # Middleware for handling requests
							│ │ ├── logger.js # Request logger
							│ │ └── errorHandler.js # Error handling middleware
							│ ├── logs/ # Log files
							│ │ └── chatbot_interactions.log # Log for chatbot interactions
							│ ├── .env # Environment variables
							│ ├── .env.example # Example environment variables
							│
							├── package.json # Project dependencies and scripts
							├── README.md # Documentation for the project
							└── yarn.lock # Dependency lock file![image](https://github.com/user-attachments/assets/9542f6e9-1ce5-4797-a100-99b4acfeaf8c)
