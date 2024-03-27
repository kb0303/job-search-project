import { JobsModel } from "../models/Jobs.model.js";
import UserModel from "../models/User.model.js";

export default class UserController {
	getRegister(req, res) {
		res.render('register', {userName: null});
	}
	postRegister(req, res) {
		const { name, email, password } = req.body;
		UserModel.add(name, email, password)
		req.session.userName = name;
		res.render('login', {
			errorMessage: null,
			userName: name
		});
	}
	getLogin(req, res) {
		res.render('login', {
			errorMessage: null,
			userName: req.session.userName
		})
	}
	postLogin(req, res) {
		const { email, password } = req.body;
		const user = UserModel.isValidUser(email, password);
		req.session.userEmail = email;

		let jobs = JobsModel.get();
		if (user) {
			res.render('jobs', {
				jobs,
				errorMessage: null,
				userEmail: req.session.userEmail,
				userName: req.session.userName
			})
		} else {
			res.render('login', {
				errorMessage: 'Invalid User Credentials',
			})
		}

	}

}