export const resumeValidation = (req, res, next) => {
	// validate data
	console.log(req.body)
	const { name, email, contactNo, resume } = req.body;
	let errors = [];
	if (!name || name.trim() == '') {
		errors.push('Name is required');
	}
	if (!email || email.trim() == '') {
		errors.push(
			'Email is required'
		);
	}
	if (!contactNo || contactNo.trim() == '') {
		errors.push(
			'Contact Number is required'
		);
	}
	if (!req.file) {
		errors.push(
			'Resume is required'
		);
	}

	if (errors.length > 0) {
		return res.render('jobDetails', {
			errorMessage: errors.join(', '),
		});
	}
	next();
}