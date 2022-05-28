const { Schema, model } = require('mongoose');


const habilidadesSchema = new Schema(
                    {
                                 Q: String ,
                                 E: String ,
                                 C: String ,  
                                 X: String
                    });

const AgenteSchema = Schema ({

    nombre:{
        type: String,
        unique: true
        
    },

    nacionalidad:{
        type: String
        
    },
    
    rol:{
        type: String
    
    },

    habilidades:[habilidadesSchema]
});

module.exports = model('Agente', AgenteSchema);
