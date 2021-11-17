const dataFilms = require('../utils/films')

const findFilms = async (req, res) => {
    const data = await dataFilms.getfilms(req.body.title) //parametro recogido por el formulario
    res.render('films', {films:data})
}

