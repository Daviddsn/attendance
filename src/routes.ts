// routes.js
import express from 'express';
const router = express.Router();
import  verifyToken from './middlewares/verifyToken';

import teacherRouter from './teacher/teacherRouter';
import teamRouter from './domain/team/teamRouter';
import studentRouter from './domain/student/studentRouter';




router.use('/teachers',teacherRouter )
router.use('/teams',teamRouter )
router.use('/students',studentRouter )

export default router;