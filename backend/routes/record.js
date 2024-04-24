import express from "express";
import db from "../db/connection.js"; // 确保数据库连接已正确设置

// router是express的一个实例，用于定义路由。
const router = express.Router();

// GET endpoint to retrieve all records
// GET endpoint to retrieve all records
router.get("/", async (req, res) => {
    try {
        const recordsCollection = db.collection("records");
        const results = await recordsCollection.find({}).toArray(); // Convert MongoDB cursor to array
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching records: ", error);
        res.status(500).send("Error fetching records");
    }
});

// 这一节帮助你创建一个新记录。
router.post("/", async (req, res) => {
    try {
      // 使用正确的集合名称 "records"
      const records = db.collection("records");
  
      const record = req.body; // 从前端接收的记录
      const result = await records.insertOne(record);
      res.status(201).send(result); // 201表示创建成功
    } catch (error) {
      console.error(error);
      res.status(500).send("Error posting record"); // 发送错误响应
    }
});

export default router;


