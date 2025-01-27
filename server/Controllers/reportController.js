const Report = require('../Models/Report');
const upload = require('../Config/Multer');
const fs = require('fs');
const path = require('path');

exports.addReport = async (req, res) => {
    upload.single('reportImg')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        try {
            const { title, description } = req.body;
            if (!title || !description || !req.file) {
                return res.status(400).json({ message: "All fields are required." });
            }

            const newReport = new Report({
                title,
                description,
                reportImg: req.file.filename
            });

            await newReport.save();
            res.status(201).json({ message: "Report added successfully", data: newReport });
        } catch (error) {
            res.status(500).json({ message: "An error occurred while adding the report", error: error.message });
        }
    });
};

exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json({ data: reports });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching reports", error: error.message });
    }
};

exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ message: "Report not found" });
        }
        res.status(200).json({ data: report });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching the report", error: error.message });
    }
};

exports.updateReport = async (req, res) => {
    upload.single('reportImg')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        try {
            const { id } = req.params;
            const { title, description } = req.body;
            const report = await Report.findById(id);

            if (!report) {
                return res.status(404).json({ message: "Report not found" });
            }

            if (req.file) {
                const oldFilePath = path.join(__dirname, '../../Public/imgs', report.reportImg);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
                report.reportImg = req.file.filename;
            }

            report.title = title || report.title;
            report.description = description || report.description;

            await report.save();
            res.status(200).json({ message: "Report updated successfully", data: report });
        } catch (error) {
            res.status(500).json({ message: "An error occurred while updating the report", error: error.message });
        }
    });
};

exports.deleteReport = async (req, res) => {
    try {
        const { id } = req.params;
        const report = await Report.findByIdAndDelete(id);
        if (!report) {
            return res.status(404).json({ message: "Report not found" });
        }
        const filePath = path.join(__dirname, '../../Public/imgs', report.reportImg);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        res.status(200).json({ message: "Report deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while deleting the report", error: error.message });
    }
};