How to compile and run Program:
	Please see information listed in ./code/README1.txt
	There are no runnable files except for the data collection scripts
	More information on data collection script mentioned in ./data/README.txt

File Descriptions:
./doc/Group 3 Report 1.pdf
	Original Submission of our full first report
./doc/Group 3 Report 2.pdf
	Original Submission of our full second report
./doc/Group 3 Report 3.pdf
	Original Submission of our full third report
./doc/technical_documentation.pdf
	Documentation that describes how the backend endpoints functions, including inputs and outputs
./doc/user_documentation.pdf
	Documentation that describes how the user can utilize the frontend of our application to meet their requirements
./doc/presentation_slides1.pdf
	Presentation slides for Demo 1
./doc/presentation_slides2.pdf
	Presentation slides for Demo 2
./doc/brochure.pdf
	Brochure that describes our application in an appealing way for the user
./doc/individual_contributions.pdf
	Document that describes how the group functioned throughout the semester and the breakdown of each member's contribution

./design/UC##.png
	There are 11 UC photo files. These files describe the interaction diagram for each use case.
	The use case number corresponds to the use case number listed in our reports
./design/System.png
	Diagram that describes how use cases relate to the different actors within our application
./design/MVC.png
	Diagram that describes the type of architecture our system uses and the overall flow of information
./design/DataModel.png
	Diagram that describes the format of our database for the application
./design/ClassDiagram.png
	Diagram that shows the different classes and their corresponding variables and functions.
	Also depicts how classes relate to one another

./data/data_collection.txt
	README file for data collection. Tells the user exactly where and how to run our data collection scripts.
	Data scripts are necessary for proper function of the application

./tests/README3.txt
	Text file that describes the tests and how to run them
./tests/frontend
	Link to the folder with frontend tests
./tests/league
	Link to the folder with league tests
./tests/stock
	Link to the folder with stock tests
	


	
./code/README1.txt
	README file for compiling and running the code


./code/app/services/ai/algorithms/candlesticks.py
	Python runnable that will use candlesticks algorithm to update our AI players
./code/app/services/ai/algorithms/meanReversion.py
	Python runnable that will use mean reversion algorithm to update our AI players
./code/app/services/ai/algorithms/momentum.py
	Python runnable that will use momentum trading algorithm to update our AI players
	
./code/app/services/ai/controllers/indicators/candlestickGraph.py
	Python runnable that will grab candlesticks data from yahoo finance for plotting
./code/app/services/ai/controllers/indicators/meanGraph.py
	Python runnable that will grab mean reversion data from yahoo finance for plotting
./code/app/services/ai/controllers/indicators/candlestickGraph.py
	Python runnable that will grab momentum data from yahoo finance for plotting
	
./code/app/services/ai/controllers/aiController.js
	Javascript file that contains all of the functions that call the python scripts and handle actions related to AI endpoints
./code/app/services/ai/routes/aiRoutes.js
	Javascript file that contains all of the routes of the AI endpoints and links them to the controller
./code/app/services/ai/tasks/aiTask.js
	Javascript file that handles the task of periodically updating our AI players during trading hours

./code/app/services/ai/index.js
	Javascript file that establishes the aiTask and binds the port for our endpoints to be called
./code/app/services/ai/server.js
	Javascript file for defining AI server configuration
./code/app/services/ai/package-lock.json
	JSON file that describes the exact packages that are installed by NPM
./code/app/services/ai/package.json
	JSON file that describes the exact packages that should be installed by NPM


./code/app/services/stock/controllers/equityController.js
    Javascript file to handle actions related to equity endpoints
./code/app/services/stock/controllers/newsController.js
    Javascript file to handle actions related to news endpoints

./code/app/services/stock/models/equityModel.js
    Javascript file to define how equities are stored in the database
./code/app/services/stock/models/newsModel.js
    Javascript file to define how news is stored in the database

./code/app/services/stock/routes/equityRoutes.js
    Javascript file to define equity endpoints
./code/app/services/stock/routes/newsRoutes.js
    Javascript file to define news endpoints

./code/app/services/stock/scripts/populateTickers.js
    Javascript file to populate database with valid populateTickers. This file is a data collection script.
./code/app/services/stock/tests/equity.test.js
    Javascript file to handle tests for equities
./code/app/services/stock/tests/news.test.js
    Javascript file to handle tests for news

./code/app/services/stock/.eslintrc.json
    JSON configuration for the linter
./code/app/services/stock/index.js
    Root javascript file for running the stock service
./code/app/services/stock/package-lock.json
    JSON file for defining exact package configuration
./code/app/services/stock/package.json
    JSON file for defining project variables and configuration
./code/app/services/stock/server.js
    Javascript file for defining server configuration
	
	
./code/app/services/league/config/jwtConfig.js
	Javascript file to configure json web token for user authentication
./code/app/services/league/config/passportConfig.js
	Javascript file to configure passport authentication strategy for our tokens

./code/app/services/league/controllers/leagueController.js
	Javascript file that represents the controller for league related functions and handles actions related to league endpoints
./code/app/services/league/controllers/tooltipController.js
	Javascript file that represents the controller for tooltip related functions and handles actions related to tooltip endpoints
./code/app/services/league/controllers/tradeController.js
	Javascript file that represents the controller for trade related functions and handles actions related to trade endpoints
./code/app/services/league/controllers/userController.js
	Javascript file that represents the controller for user related functions and handles actions related to user endpoints

./code/app/services/league/middleware/auth.js
	Middleware function to authorize requests through the JWT tokens
./code/app/services/league/middleware/validate.js
	Contains functions whose purpose is to validate requests made to the backend league service

./code/app/services/league/models/leagueModel.js
	Javascript file that defines the league schema
./code/app/services/league/models/portfolioModel.js
	Javascript file that defines the portfolio schema
./code/app/services/league/models/tooltipModel.js
	Javascript file that defines the tooltip schema
./code/app/services/league/models/userModel.js
	Javascript file that defines the user schema

./code/app/services/league/routes/leagueRoutes.js
	Javascript file that specifies all league related routes
./code/app/services/league/routes/tooltipRoutes.js
	Javascript file that specifies all tooltip related routes
./code/app/services/league/routes/tradeRoutes.js
	Javascript file that specifies all trade related routes
./code/app/services/league/routes/userRoutes.js
	Javascript file that specifies all user related routes

./code/app/services/league/tasks/netWorthTask.js
	Task to calculate portfolio worth at the end of each trading day
./code/app/services/league/tasks/orderTask.js
	Task to check for outstanding orders and fulfill them

./code/app/services/league/utils/newsUtils.js
	Javascript function to retrieve curated news
./code/app/services/league/utils/scrape.js
	Javascript function to scrape tooltip definitions from Investopedia
./code/app/services/league/utils/stockUtils.js
	Javascript functions to get various individual stock data

./code/app/services/league/index.js
	Javascript file that connects to the database and runs cronjobs for checking orders and calculating networth
./code/app/services/league/server.js
	Javascript file that represents the express server, which aggreggates all the already defined routes
	

./code/frontend/src/styles/Ai/Ai.scss
    SCSS file for defining styles in the AI page
./code/frontend/src/styles/CentralizedLeague/CentralizedLeague.scss
    SCSS file for defining styles in the Centralized League page
./code/frontend/src/styles/CreateLeague/CreateLeague.scss
    SCSS file for defining styles in the Create League page
./code/frontend/src/styles/CurrentLeagues/CurrentLeagues.scss
    SCSS file for defining styles in the Current Leagues page
./code/frontend/src/styles/Header/Header.scss
    SCSS file for defining styles in the Header page
./code/frontend/src/styles/Home/Home.scss
    SCSS file for defining styles in the Home page
./code/frontend/src/styles/IndividualStock/IndividualStock.scss
    SCSS file for defining styles in the Individual Stock page
./code/frontend/src/styles/JoinLeague/JoinLeague.scss
    SCSS file for defining styles in the Join League page
./code/frontend/src/styles/LeagueManagement/LeagueManagement.scss
    SCSS file for defining styles in the League Management page
./code/frontend/src/styles/Login/Login.scss
    SCSS file for defining styles in the Login page
./code/frontend/src/styles/NavigationBar/NavigationBar.scss
    SCSS file for defining styles in the Navigation Bar
./code/frontend/src/styles/News/News.scss
    SCSS file for defining styles in the News page
./code/frontend/src/styles/Portfolio/Portfolio.scss
    SCSS file for defining styles in the Portfolio page
./code/frontend/src/styles/Registration/Registration.scss
    SCSS file for defining styles in the Registration page
./code/frontend/src/styles/Summary/Summary.scss
    SCSS file for defining styles in the Summary page
./code/frontend/src/styles/SymbolLookup/SymbolLookup.scss
    SCSS file for defining styles in the Symbol Lookup page
./code/frontend/src/styles/Trade/Trade.scss
    SCSS file for defining styles in the Trade page
./code/frontend/src/styles/Welcome/Welcome.scss
    SCSS file for defining styles in the Welcome page
./code/frontend/src/styles/Button.scss
    SCSS file for defining the style of the Button component
./code/frontend/src/styles/global.scss
    SCSS file for defining the global SCSS styles
./code/frontend/src/styles/root.scss
    Root SCSS file for defining the style of the application
	
./code/frontend/src/components/Ai/Ai.js
	AI Page
./code/frontend/src/components/CentralizedLeague.js
	Centralized League Page
./code/frontend/src/components/CreateLeague/CreateLeague.js
	Create League Page
./code/frontend/src/components/CurrentLeagues/CurrentLeagues.js
	Current Leagues Page
./code/frontend/src/components/Header/Header.js
	Header Component containing logo and title
./code/frontend/src/components/Home/Home.js
	Home Page
./code/frontend/src/components/Home/Sections/PerformanceChart.js
	Chart component that is displayed on the Home Page
./code/frontend/src/components/IndividualStock.js
	Individual Stock Page
./code/frontend/src/components/Home/Sections/StockGraph.js
	Individual Stock Graph Component for Individual Stock Page
./code/frontend/src/components/Home/Sections/StockStatistics.js
	Individual Stock Statistics Component for Individual Stock Page
./code/frontend/src/components/JoinLeague/JoinLeague.js
	Join League Page
./code/frontend/src/components/LeagueManagement/LeagueManagement.js
	League Management Page
./code/frontend/src/components/Login/Login.js
	Login Page
./code/frontend/src/components/NavigationBar/NavigationBar.js
	Nav Bar Component
./code/frontend/src/components/News/News.js
	News Page
./code/frontend/src/components/News/Sections/Articles.js
	Articles Component for News Page
./code/frontend/src/components/Portfolio/Portfolio.js
	Portfolio Page
./code/frontend/src/components/Portfolio/Sections/PortfolioGraph.js
	Portfolio Graph Component for Portfolio Page
./code/frontend/src/components/Portfolio/Sections/PortfolioHistory.js
	Portfolio History Component for Portfolio Page
./code/frontend/src/components/Portfolio/Sections/Positions.js
	Positions Component for Portfolio Page
./code/frontend/src/components/Summary.js
	Summary Page
./code/frontend/src/components/Sections/SummaryGraph.js
	Summary Graph Component for Summary Page
./code/frontend/src/components/Sections/SummaryMetrics.js
	Summary Metrics Component for Summary Page
./code/frontend/src/components/SymbolLookup/SymbolLookup.js
	Symbol Lookup Page
./code/frontend/src/components/Trade/Trade.js
	Trade Page
./code/frontend/src/components/Welcome/Welcome.js
	Welcome Page
./code/frontend/src/components/Pages.js
	Aggregates all page components into one jsx file