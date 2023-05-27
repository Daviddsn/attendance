import express from 'express';


import { createTeacher, getAllTeachers ,findTeacher} from './controllers/teacherController';

const router = express.Router();

// Rota para criar um novo professor
router.post('/', createTeacher);

// Rota para buscar todos os professores
router.get('/', getAllTeachers);


router.get('/:teacherId', findTeacher);

export default router;