import express from "express";
import userRepo from "../repository/user.repo";

const router = express.Router();

router.get(`/users`, async (req, res) => {
  res.send(userRepo.users);
});

export default router;
