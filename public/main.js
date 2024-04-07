function deleteProduct(id) {
	const result = confirm("Are you sure you want to delete this product ?");
	if (result) {
		fetch('/delete_job/' + id, {
			method: 'POST',
		}).then((res) => {
			if (res.ok) {
				location.replace('/jobs');
			}
		})
	}
}
function formatDateForInputDate(dateString) {
	const parts = dateString.split('-'); // Split the date string into parts
	const day = parts[0];
	const month = parts[1];
	const year = parts[2];
	return `${year}-${month}-${day}`; // Rearrange the parts to match YYYY-MM-DD format
}	