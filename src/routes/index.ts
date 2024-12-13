import { Router } from "express";
import { HomeController, appKeyValidator } from "@/components/home";
import { sanitizer } from "@/helpers";
import { UserController } from "@/components/user/controller";

const router = Router();

router.get("/", sanitizer(appKeyValidator), HomeController.getAppInfo);
router.get("/users", UserController.getUsers); // 새로운 라우트 추가
router.get("/users/:id", UserController.getUserById); // ID로 사용자 조회 라우트 추가

export default router;
