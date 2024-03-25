import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import HomePageController from './src/controllers/HomePage.controller.js';
import UserController from './src/controllers/User.controller.js';
import JobsController from './src/controllers/Jobs.controller.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { auth } from './src/middleware/auth.middleware.js';

const server = express();

//Parse form data
server.use(express.urlencoded({ extended: true }))

//Set up view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'Views'));

server.use(expressEjsLayouts);
server.use(session({
	secret: 'SECRET',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
}));
server.use(cookieParser());

const homePageController = new HomePageController()
const userController = new UserController()
const jobsController = new JobsController()

// Home Page Routes
server.get('/', homePageController.getHomePage);

// Register Routes
server.get('/register', userController.getRegister);
server.post('/register', userController.postRegister);

// Login Routes
server.get('/login', userController.getLogin);
server.post('/login', userController.postLogin);

// Job and Job-detail Routes
server.get('/jobs', jobsController.getJobs);
server.get('/job/:id', jobsController.getJobDetail);

// Update Routes
server.get('/update_job/:id', auth, jobsController.updateJob);
server.post('/update_job', jobsController.postUpdateJob)
server.post('/delete_job/:id', auth, jobsController.deleteJob);

server.use(express.static('public'));
server.use(express.static('src/Views'));


server.listen(5000, () => {
	console.log("Server is listening on port 5000")
});