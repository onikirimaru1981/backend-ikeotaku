const mysql = require("mysql");
const SQL = require("sql-template-strings");
const utils = require('../utils/index')



module.exports = {
    getAllUsuarios: async () => {
        //obtener usuarios
        const query = 'SELECT * FROM usuarios;'
        return await utils.executeQuery(query);
    },

    getUsuario: async function (id) {
        //obtener un usuario
        const query = SQL `SELECT * FROM usuarios WHERE id = ${id}`;

        return await utils.executeQuery(query);
    },

    addUser: async function (usuario) {
        //añadir usuario
        const {
            users,
            emails,
            passwords
        } = usuario;
        const query =
            SQL `INSERT INTO usuarios(users,emails,passwords)
        VALUES(${users},${emails},${passwords});`;
        return await utils.executeQuery(query);

    },

    updateUser: async function (id, usuario) {
        //actualizar usuario
        const {
            emails,
            passwords
        } = usuario;
        const query = SQL `UPDATE usuarios
        SET emails=${emails},passwords=${passwords}
        WHERE id=${id};`;
        return await utils.executeQuery(query);
    },

    deleteUser: async function (id) {
        //borrar usuario
        const query = SQL `DELETE FROM  usuarios WHERE id=${id}`;
        return await utils.executeQuery(query);
    },
};