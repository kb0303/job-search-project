import { JobsModel } from "../models/Jobs.model.js"

export default class JobsController {
	getJobs(req, res) {
		let jobs = JobsModel.get();
		res.render("jobs", { jobs })
	}
	getJobDetail(req, res) {
		const id = req.params.id;
		const jobFound = JobsModel.getById(id);
		if (jobFound) {
			res.render("jobDetails", { jobs: jobFound })
		} else {
			res.status(401).send("Job not found")
		}
	}

	updateJob(req, res) {
		const id = req.params.id;
		const jobFound = JobsModel.getById(id);
		if (jobFound) {
			res.render("update_job", { jobs: jobFound })
		} else {
			res.status(401).send("Job not found, can't be updated")
		}
	}

	postUpdateJob(req, res) {
		const id = req.params.id;
		const jobFound = JobsModel.getById(id);
		JobsModel.update(req.body);
		res.render('jobDetails', { jobs: jobFound })
	}

	deleteJob(req, res) {
		const id = req.params.id;
		const jobFound = JobsModel.getById(id)
		if (!jobFound) {
			return res.status(401).send("Job Not Found");
		}
		JobsModel.delete(id)
		var jobs = JobsModel.get()
		console.log(jobs)
		res.render('jobs', {
			jobs,
			userEmail: req.session.userEmail
		})
	}
}