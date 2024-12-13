import { Request, Response } from "express";

export const UserController = {
  getUsers: (_req: Request, res: Response) => {
    // 사용자 목록을 반환하는 로직을 여기에 작성합니다.
    console.log("Get all users");
    res.json({ message: "Get all users" });
  },
  getUserById: (req: Request, res: Response) => {
    const userId = req.params.id;
    console.log(`Get user with ID: ${userId}`);
    // 특정 사용자를 반환하는 로직을 여기에 작성합니다.
    res.json({ message: `Get user with ID: ${userId}` });
  },
};
