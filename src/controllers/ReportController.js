const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        // Encontrar todos usuários que tem email que termina com @gmail
        // Desses usuários eu quero buscar todos que moram no "Recanto das Emas"
        // Desses usuários eu quero buscar as tecnologicas que começam com jQuery

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [{
                    association: 'addresses',
                    where: {
                        street: 'Teste'
                    }
                }, //endereços
                {
                    association: 'techs',
                    required: false, // busca o que satisfaz a tecnologia
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }, //tecnologias
            ]
        });

        return res.json(users);
    }
};
