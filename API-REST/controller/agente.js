const { response } = require('express');
const Agente = require('../model/agentes');

const getAgentes = async ( req, res = response ) => {

    const agentes = await Agente.find();

    res.json({
        ok:true,
        agentes
    });

}

const crearAgente = async ( req, res = response ) => {

    const { nombre } = new Agente ( req.body );

    try {
        let existe = await Agente.findOne({ nombre });
        if(existe){
            return res.status(400).json({
                ok:false,
                msg: 'El Agente ya existe'
            });
        }

        const agente  = new Agente(req.body);
        
        const agenteGuardado = await agente.save();

        res.status(201).json({
            ok: true,
            agenteGuardado
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Fallo SOG'
        });
    }

}

const actualizarAgente = async ( req, res = response ) => {

    const agenteId = req.params.id;

    try {
        const agente = await Agente.findById( agenteId );

        if ( !agente ) {
            return res.status(404).json({
                ok: false,
                msg: 'El Agente no existe por ese id'
            });
        }

        const cambioAgente = {
            ...req.body
        }

        const agenteActualizado = await Agente.findByIdAndUpdate(agenteId, cambioAgente, { new: true});

       
        res.json({
            ok: true,
            agente: agenteActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo actualizar'
        });
    }
}

const eliminarAgente = async ( req, res = response ) => {
    const agenteId = req.params.id;

    try {
        const agente = await Agente.findById( agenteId );

        if ( !agente ) {
            return res.status(404).json({
                ok: false,
                msg: 'El agente no existe por ese id'
            });
        }

        await Agente.findByIdAndDelete( agenteId );

        res.json({
            ok: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Fallor'
        });
    }
}

module.exports= {
    getAgentes,
    crearAgente,
    actualizarAgente,
    eliminarAgente
 }