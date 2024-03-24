export class JobsModel {
	constructor(id, CompanyName, tech, place, salary, skills) {
		this.id = id;
		this.CompanyName = CompanyName;
		this.tech = tech;
		this.place = place;
		this.salary = salary;
		this.skills = skills;
	}

	static get() {
		return jobs;
	}

	static add(CompanyName, tech, place, salary, skills) {
		let newJob = new ProductModel(
			jobs.length + 1,
			CompanyName,
			tech,
			place,
			salary,
			skills
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
		const index = jobs.findIndex((p)=>p.id == id)
		jobs.splice(index, 1);
	}

	
}

var jobs = [
	new JobsModel(
		1,
		'Coding Ninjas',
		'React Developer',
		'Delhi',
		'250k-300k',
		'React, HTML, CSS, JS, Problem Solving'
	),
	new JobsModel(
		2,
		'SpaceX',
		'Angular Developer',
		'Gurugram',
		'150k-200k',
		'Angular, HTML, CSS, JS, Deployment'
	),
	new JobsModel(
		3,
		'Devin',
		'Vue Developer',
		'Noida',
		'500k-800k',
		'Vue, HTML, CSS, JS, AWS, GCP'
	)
]