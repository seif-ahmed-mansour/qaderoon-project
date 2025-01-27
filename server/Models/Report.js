const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    reportTitle: {
        type: String,
        required: true,
    },
    reportDesc: {
        type: String,
        required: true,
    },
    reportImg: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    });

const Income = mongoose.model('Report', ReportSchema);
module.exports = Income;
