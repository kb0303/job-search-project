import { JobsModel } from "../models/Jobs.model.js"

export default class JobsController {
	getJobs(req, res) {
		let jobs = JobsModel.get();
		res.render('Jobs')
	}
}