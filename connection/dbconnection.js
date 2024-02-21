const mongoose = require('mongoose');


mongoose.connect(process.env.BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("MongoDB Atlas connected...");
}).catch((error) => {
    console.log("Connection error", error);
});

