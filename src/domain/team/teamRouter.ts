import express from 'express';


import { createTeam, getAllTeams ,findTeam} from './controllers/teamController';

const router = express.Router();

// Rota para criar um novo professor
router.post('/', createTeam);

// Rota para buscar todos os professores
router.get('/', getAllTeams);


router.get('/:teamId', findTeam);

export default router;