import express from 'express';


import { createStudent,getAllStudents,findStudent, getStudentsByTeam} from './controllers/studentController';

const router = express.Router();

// Rota para criar um novo professor
router.post('/', createStudent);

// Rota para buscar todos os professores
router.get('/', getAllStudents);


router.get('/:studentId', findStudent);

router.get('/byteam/:teamId', getStudentsByTeam);

export default router;