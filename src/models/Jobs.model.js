export class JobsModel {
	constructor(id, CompanyName, tech, place, salary, skills, applyBy, openings) {
		this.id = id;
		this.CompanyName = CompanyName;
		this.tech = tech;
		this.place = place;
		this.salary = salary;
		this.skills = skills;
		this.applyBy = applyBy;
		this.openings = openings;
		this.applicants = []; // Initialize applicants array for each job
	}
	addApplicant(applicant) {
		this.applicants.push(applicant);
	}

	getApplicants() {
		return this.applicants;
	}

	static get() {
		return jobs;
	}

	static add(CompanyName, tech, place, salary, skills, applyBy, openings) {
		let newJob = new JobsModel(
			jobs.length + 1,
			CompanyName,
			tech,
			place,
			salary,
			skills,
			applyBy,
			openings
		)
		jobs.push(newJob);
	}
	static update(jobObj) {
		const index = jobs.findIndex((p) => p.id == jobObj.id)
		jobs[index] = jobObj;
	}

	static getById(id) {
		return jobs.find(p => p.id == id);
	}
	static delete(id) {
		const index = jobs.findIndex((p) => p.id == id)
		jobs.splice(index, 1);
	}
	static formatDateForInputDate(dateString) {
		const parts = dateString.split('-');
		const day = parts[0];
		const month = parts[1];
		const year = parts[2];
		return `${year}-${month}-${day}`;
	}

}

var jobs = [
	new JobsModel(
		1,
		'Coding Ninjas',
		'React Developer',
		'Delhi',
		'250k-300k',
		'React, HTML, CSS, JS, Problem Solving',
		"30-03-2024",
		5
	),
	new JobsModel(
		2,
		'SpaceX',
		'Angular Developer',
		'Gurugram',
		'150k-200k',
		'Angular, HTML, CSS, JS, Deployment',
		"01-04-2024",
		10
	),
	new JobsModel(
		3,
		'Devin',
		'Vue Developer',
		'Noida',
		'500k-800k',
		'Vue, HTML, CSS, JS, AWS, GCP',
		"29-03-2024",
		3
	)
]