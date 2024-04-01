import { ApplicantModel } from "../models/Applicant.model.js";
import { JobsModel } from "../models/Jobs.model.js";

export default class ApplicantsController {
	getJobApplication(req, res) {
		var applicants = ApplicantModel.get();
		console.log(applicants)
		res.render('applicants', {
			applicants,
			userEmail: req.session.userEmail,
			userName: req.session.userName
		})
	}

	postJobApplication(req, res) {
		const { name, email, contactNo } = req.body;
		const resume = 'uploads/' + req.file.filename
		const id = req.body.id;

		
		const job = JobsModel.getById(id);
		if (job.id == id) {
			job.addApplicant({ name, email, contactNo, resume }); // Add applicant to the job
			ApplicantModel.addApplicant(name, email, contactNo, resume); // Add applicant
		}
		// var applicants = ApplicantModel.get();
		let jobs = JobsModel.get();
		res.render('jobs', {
			jobs,
			userEmail: req.session.userEmail,
			userName: req.session.userName
		});
	}
}
