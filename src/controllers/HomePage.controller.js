export default class HomePageController {
	getHomePage(req, res) {
		res.render('HomePage', {userName: req.session.userName});
	}
}