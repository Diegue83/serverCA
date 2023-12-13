import {Request,Response} from 'express';
import {pool} from "../database";

class ActividadesController{
    async getAct(req:Request,res:Response){
        const hoy = new Date();
        hoy.setDate(hoy.getDate());
        const diaStr = hoy.toISOString().slice(0, 10);
        //const result=await pool.query('SELECT * FROM vis_act WHERE fecha >= ?;',diaStr)
        const result=await pool.query('select `a`.`idAct` AS `idAct`,`a`.`fecha` AS `fecha`,`a`.`nomAct` AS `nomAct`,`u`.`usr` AS `usr`,`u`.`idUsr` AS `idUsr`,`l`.`nomLug` AS `nomLug`,`l`.`idLug` AS `idLug`,`l`.`latitud` AS `latitud`,`l`.`longitud` AS `longitud`,`a`.`descripcion` AS `descripcion`,`a`.`cuota` AS `cuota` from ((`controlactiv2`.`actividades` `a` join `controlactiv2`.`usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `controlactiv2`.`lugares` `l` on(`l`.`idLug` = `a`.`idLug`)) where `a`.`fecha` >=? order by `a`.`fecha`;',diaStr)
        res.json(result[0]);
        
    }
    async getActEnded(req:Request,res:Response){
        console.log(1)
        const hoy = new Date();
        hoy.setDate(hoy.getDate());
        const diaStr = hoy.toISOString().slice(0, 10);
        console.log(0)
        //const result=await pool.query('SELECT * FROM vis_act WHERE fecha <= ?',[diaStr])
        const result=await pool.query('select `a`.`idAct` AS `idAct`,`a`.`fecha` AS `fecha`,`a`.`nomAct` AS `nomAct`,`u`.`usr` AS `usr`,`u`.`idUsr` AS `idUsr`,`l`.`nomLug` AS `nomLug`,`l`.`idLug` AS `idLug`,`l`.`latitud` AS `latitud`,`l`.`longitud` AS `longitud`,`a`.`descripcion` AS `descripcion`,`a`.`cuota` AS `cuota` from ((`controlactiv2`.`actividades` `a` join `controlactiv2`.`usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `controlactiv2`.`lugares` `l` on(`l`.`idLug` = `a`.`idLug`))  WHERE `a`.`fecha` <= ? order by `a`.`fecha`',[diaStr])
        res.json(result[0]);
    }
    async getByIdAct(req:Request,res:Response){
        const {idAct}=req.params;
        //const result=await pool.query('SELECT * From vis_act where idAct= ?',[idAct]);
        const result=await pool.query('select `a`.`idAct` AS `idAct`,`a`.`fecha` AS `fecha`,`a`.`nomAct` AS `nomAct`,`u`.`usr` AS `usr`,`u`.`idUsr` AS `idUsr`,`l`.`nomLug` AS `nomLug`,`l`.`idLug` AS `idLug`,`l`.`latitud` AS `latitud`,`l`.`longitud` AS `longitud`,`a`.`descripcion` AS `descripcion`,`a`.`cuota` AS `cuota` from ((`controlactiv2`.`actividades` `a` join `controlactiv2`.`usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `controlactiv2`.`lugares` `l` on(`l`.`idLug` = `a`.`idLug`)) where `a`.`idAct`= ? order by `a`.`fecha` ',[idAct]);
        res.json(result[0]);
    }
    async getByUsrAct(req: Request, res:Response){
        const {idUsr}=req.params
        //const result=await pool.query('SELECT * FROM vis_act where idUsr= ?',[idUsr]);
        const result=await pool.query('select `a`.`idAct` AS `idAct`,`a`.`fecha` AS `fecha`,`a`.`nomAct` AS `nomAct`,`u`.`usr` AS `usr`,`u`.`idUsr` AS `idUsr`,`l`.`nomLug` AS `nomLug`,`l`.`idLug` AS `idLug`,`l`.`latitud` AS `latitud`,`l`.`longitud` AS `longitud`,`a`.`descripcion` AS `descripcion`,`a`.`cuota` AS `cuota` from ((`controlactiv2`.`actividades` `a` join `controlactiv2`.`usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `controlactiv2`.`lugares` `l` on(`l`.`idLug` = `a`.`idLug`)) where `u`.`idUsr`=?  order by `a`.`fecha`',[idUsr]);
        res.json(result[0]);
    }

    async insertAct(req:Request,res:Response){
        await pool.query('INSERT INTO Actividades SET ?',[req.body]);
        res.json({Message:'Se inserto correctamente'});
    }
    async updateAct(req:Request,res:Response){
        const {idAct}=req.params;
        await pool.query('UPDATE Actividades SET ? WHERE idAct=?',[req.body,idAct]);
        res.json({mesagge:'Se ha actualizado con exito'});
    }
    async deleteAct(req:Request,res:Response){
        const {idAct}=req.params;
        await pool.query('DELETE FROM Actividades WHERE idAct=?',[idAct]);
        res.json({Message:'Se ha eliminado correctamente'});
    }
    
}

export const actividadesController= new ActividadesController;