"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividadesController = void 0;
const database_1 = require("../database");
class ActividadesController {
    getAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hoy = new Date();
            hoy.setDate(hoy.getDate());
            const diaStr = hoy.toISOString().slice(0, 10);
            //const result=await pool.query('SELECT * FROM vis_act WHERE fecha >= ?;',diaStr)
            const result = yield database_1.pool.query('select `a`.`idAct` AS `idAct`,`a`.`fecha` AS `fecha`,`a`.`nomAct` AS `nomAct`,`u`.`usr` AS `usr`,`u`.`idUsr` AS `idUsr`,`l`.`nomLug` AS `nomLug`,`l`.`idLug` AS `idLug`,`l`.`latitud` AS `latitud`,`l`.`longitud` AS `longitud`,`a`.`descripcion` AS `descripcion`,`a`.`cuota` AS `cuota` from ((`controlactiv2`.`actividades` `a` join `controlactiv2`.`usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `controlactiv2`.`lugares` `l` on(`l`.`idLug` = `a`.`idLug`)) where `a`.`fecha` >=? order by `a`.`fecha`;', diaStr);
            res.json(result[0]);
        });
    }
    getActEnded(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(1);
            const hoy = new Date();
            hoy.setDate(hoy.getDate());
            const diaStr = hoy.toISOString().slice(0, 10);
            console.log(0);
            //const result=await pool.query('SELECT * FROM vis_act WHERE fecha <= ?',[diaStr])
            const result = yield database_1.pool.query('select `a`.`idAct` AS `idAct`,`a`.`fecha` AS `fecha`,`a`.`nomAct` AS `nomAct`,`u`.`usr` AS `usr`,`u`.`idUsr` AS `idUsr`,`l`.`nomLug` AS `nomLug`,`l`.`idLug` AS `idLug`,`l`.`latitud` AS `latitud`,`l`.`longitud` AS `longitud`,`a`.`descripcion` AS `descripcion`,`a`.`cuota` AS `cuota` from ((`controlactiv2`.`actividades` `a` join `controlactiv2`.`usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `controlactiv2`.`lugares` `l` on(`l`.`idLug` = `a`.`idLug`))  WHERE `a`.`fecha` <= ? order by `a`.`fecha`', [diaStr]);
            res.json(result[0]);
        });
    }
    getByIdAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAct } = req.params;
            //const result=await pool.query('SELECT * From vis_act where idAct= ?',[idAct]);
            const result = yield database_1.pool.query('select `a`.`idAct` AS `idAct`,`a`.`fecha` AS `fecha`,`a`.`nomAct` AS `nomAct`,`u`.`usr` AS `usr`,`u`.`idUsr` AS `idUsr`,`l`.`nomLug` AS `nomLug`,`l`.`idLug` AS `idLug`,`l`.`latitud` AS `latitud`,`l`.`longitud` AS `longitud`,`a`.`descripcion` AS `descripcion`,`a`.`cuota` AS `cuota` from ((`controlactiv2`.`actividades` `a` join `controlactiv2`.`usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `controlactiv2`.`lugares` `l` on(`l`.`idLug` = `a`.`idLug`)) where `a`.`idAct`= ? order by `a`.`fecha` ', [idAct]);
            res.json(result[0]);
        });
    }
    getByUsrAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsr } = req.params;
            //const result=await pool.query('SELECT * FROM vis_act where idUsr= ?',[idUsr]);
            const result = yield database_1.pool.query('select `a`.`idAct` AS `idAct`,`a`.`fecha` AS `fecha`,`a`.`nomAct` AS `nomAct`,`u`.`usr` AS `usr`,`u`.`idUsr` AS `idUsr`,`l`.`nomLug` AS `nomLug`,`l`.`idLug` AS `idLug`,`l`.`latitud` AS `latitud`,`l`.`longitud` AS `longitud`,`a`.`descripcion` AS `descripcion`,`a`.`cuota` AS `cuota` from ((`controlactiv2`.`actividades` `a` join `controlactiv2`.`usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `controlactiv2`.`lugares` `l` on(`l`.`idLug` = `a`.`idLug`)) where `u`.`idUsr`=?  order by `a`.`fecha`', [idUsr]);
            res.json(result[0]);
        });
    }
    insertAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO Actividades SET ?', [req.body]);
            res.json({ Message: 'Se inserto correctamente' });
        });
    }
    updateAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAct } = req.params;
            yield database_1.pool.query('UPDATE Actividades SET ? WHERE idAct=?', [req.body, idAct]);
            res.json({ mesagge: 'Se ha actualizado con exito' });
        });
    }
    deleteAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAct } = req.params;
            yield database_1.pool.query('DELETE FROM Actividades WHERE idAct=?', [idAct]);
            res.json({ Message: 'Se ha eliminado correctamente' });
        });
    }
}
exports.actividadesController = new ActividadesController;
