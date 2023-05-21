const Course = require('../models/course');

class SiteController {
    // [GET] /
    async index(req, res) {

        try {
            const courses = await Course.find({});
            res.json(courses);
        } 
        
        catch (error) {
            res.json('error');
        };
        
        

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
