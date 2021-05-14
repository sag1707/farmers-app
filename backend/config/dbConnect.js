const mongoose = require('mongoose');

const dbConnect = () =>{
//connect DB
mongoose.connect(process.env.MONGODB_URL, {
    useFindAndModify :true,
    useCreateIndex : true,
    useUnifiedTopology:true,
    useNewUrlParser: true
}).then(() => console.log('DB CONNECTED'))
.catch(err => console.log(err));
};

module.exports = dbConnect;