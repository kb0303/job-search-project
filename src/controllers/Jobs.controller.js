import { JobsModel } from "../models/Jobs.model.js"

export default class JobsController {
	getJobs(req, res) {
		let jobs = JobsModel.get();
		res.render("jobs", { jobs, userName: req.session.userName })
	}

	getJobDetail(req, res) {
		const id = req.params.id;
		const jobFound = JobsModel.getById(id);
		const formattedApplyBy = JobsModel.formatDateForInputDate(jobFound.applyBy);
		// Retrieve userEmail from session or wherever it's stored
		const userEmail = req.session.userEmail;
		if (jobFound) {
			res.render("jobDetails", { jobs: jobFound, applicants: jobFound.getApplicants(),  userEmail: req.session.userEmail, userName: req.session.userName, formattedApplyBy: formattedApplyBy })
		} else {
			res.status(401).send("Job not found");
		}
	}

	getAddJob(req, res) {
		res.render('add_job', { userEmail: req.session.userEmail, userName: req.session.userName })
	}

	postAddJob(req, res) {
		const { CompanyName, tech, place, salary, skills, applyBy, openings } = req.body;
		JobsModel.add(CompanyName, tech, place, salary, skills, applyBy, openings)
		let jobs = JobsModel.get();
		res.render("jobs", { jobs, userEmail: req.session.userEmail, userName: req.session.userName })
	}

	updateJob(req, res) {
		const id = req.params.id;
		const jobFound = JobsModel.getById(id);
		const formattedApplyBy = JobsModel.formatDateForInputDate(jobFound.applyBy);
		// console.log(jobFound);
		if (jobFound) {
			res.render("update_job", { jobs: jobFound, userEmail: req.session.userEmail, userName: req.session.userName, errorMessage: null, formattedApplyBy: formattedApplyBy })
		} else {
			res.status(401).send("Job not found, can't be updated")
		}
	}

	postUpdateJob(req, res) {
		const updatedJob = req.body;
		JobsModel.update(updatedJob); // Update the job
		const formattedApplyBy = JobsModel.formatDateForInputDate(updatedJob.applyBy);
		res.render('jobDetails', { jobs: updatedJob, userEmail: req.session.userEmail, userName: req.session.userName, formattedApplyBy: formattedApplyBy });
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
			userEmail: req.session.userEmail,
			userName: req.session.userName
		})
	}
}