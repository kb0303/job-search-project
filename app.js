import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import HomePageController from './src/controllers/HomePage.controller.js';
import UserController from './src/controllers/User.controller.js';
import JobsController from './src/controllers/Jobs.controller.js';

const server = express();

//Parse form data
server.use(express.urlencoded({ extended: true }))

//Set up view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'Views'));

server.use(expressEjsLayouts);

const homePageController = new HomePageController()
const userController = new UserController() 
const jobsController = new JobsController()

server.get('/', homePageController.getHomePage);
server.post('/register', userController.postRegister);
server.get('/login', userController.getLogin)
server.get('/jobs', jobsController.getJobs)

server.use(express.static('public'));
server.use(express.static('src/Views'));


server.listen(5000, () => {
	console.log("Server is listening on port 5000")
});