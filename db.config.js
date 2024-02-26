const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://rickkcir18:d4EsltvEHrXL2HkK@cluster0.ksk4xyv.mongodb.net/study_tracker"
        );
        console.log("CONNECTED TO DB!!");
    } catch (err) {
        console.log(err);
    }
})();
