import { JobsModel } from "../models/Jobs.model.js";
import UserModel from "../models/User.model.js";

export default class UserController {
	postRegister(req, res) {
		const {name, email, password} = req.body;
		UserModel.add(name, email, password)
		res.render('login');
	}
	getLogin(req, res) {
		res.render('login')
	}
	postLogin(req, res) {
		let jobs = JobsModel.get();
		res.render('jobs', jobs)
	}
}