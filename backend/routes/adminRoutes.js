import express from "express";
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.json({ message: "Admin dashboard data working" });
});

export default router;
