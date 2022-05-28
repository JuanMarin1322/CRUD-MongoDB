const mongoose = require('mongoose');
const DBURL = 'mongodb+srv://ServiciosTelematicos:FojUwYdMIJal8Irv@cluster0.rw3ts.mongodb.net/API-Rest';
const dbConnection = () => {

    try {
        
        mongoose.connect(DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });

        console.log('DB ONLINE');

    } catch (error) {
        console.log(error);
        throw new Error('Error en el momento de iniciar la BD');
    }

}

module.exports = {
    dbConnection
}