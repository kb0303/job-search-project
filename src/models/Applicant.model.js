export class ApplicantModel {
	constructor(id, name, email, contactNo, resume) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.contactNo = contactNo;
		this.resume = resume;
	}

	static get() {
		return applicants;
	}

	static addApplicant(name, email, contactNo, resume) {
		const newApplicant = new ApplicantModel(applicants.length + 1, name, email, contactNo, resume)
		return applicants.push(newApplicant);
	}
}

var applicants = []
