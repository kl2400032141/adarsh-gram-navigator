import express from "express";
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.json({ message: "User dashboard data working" });
});

export default router;
