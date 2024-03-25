import { JobsModel } from "../models/Jobs.model.js";
import UserModel from "../models/User.model.js";

export default class UserController {
	getRegister(req, res) {
		res.render('register');
	}
	postRegister(req, res) {
		const { name, email, password } = req.body;
		UserModel.add(name, email, password)
		res.render('login', {
			errorMessage: null,
		});
	}
	getLogin(req, res) {
		res.render('login', {
			errorMessage: null,
		})
	}
	postLogin(req, res) {
		const { email, password } = req.body;
		const user = UserModel.isValidUser(email, password);
		req.session.userEmail = email;

		let jobs = JobsModel.get();
		if (!user) {
			res.render('login', {
				errorMessage: 'Invalid User Credentials',
			})
		}
		res.render('jobs', {
			jobs,
			errorMessage: null,
			userEmail: req.session.userEmail
		})
	}
}