import express from "express";
import cors from "cors";
import multer from "multer";
import records from "./routes/record.js";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5050;

// Resolve directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置multer，设置文件存储
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads')) // 确保这个目录已经存在，否则你需要创建它
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix +  path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });


app.use(cors());
app.use(express.json());
app.use("/record", records);
// Serve files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create an upload route
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    // Assuming file upload was successful
    const fileUrl = `https://7b92-72-33-2-161.ngrok-free.app/uploads/${req.file.filename}`;;
    console.log(`File uploaded successfully: in server!!!!!!!!!!!!${fileUrl}`);
    res.status(201).json({
        message: "File uploaded successfully",
        url: fileUrl
    });
});

// start the Express server

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
