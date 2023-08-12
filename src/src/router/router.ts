import {Router} from "express";
import TeacherRouter from "./teacherRouter";
import UserRouter from "./userRouter";

const router = Router();
router.use('/teachers', TeacherRouter)
router.use('/', UserRouter)
export default router;
