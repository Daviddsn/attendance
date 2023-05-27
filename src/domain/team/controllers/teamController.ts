import { Request, Response } from 'express';
import  {prismaClient} from '../../../database/prismaClient';
 

// Função para criar um novo professor
export const createTeam = async (req: Request, res: Response) => {
  try {
    const  {name}  = req.body;

   
    const team = await prismaClient.team.create({
      data: {
        name,     
      },
    });

    res.status(201).json({ team });
  } catch (error) {
    console.error('Erro ao criar o Equipe:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao criar Equipe.' });
  }
};

// Função para ler todos os professores
export const getAllTeams = async (req: Request, res: Response) => {
  try {
    const teams = await prismaClient.team.findMany();

    res.status(200).json({ teams });
  } catch (error) {
    console.error('Erro ao buscar as equipes:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar as equipes.' });
  }
};

// Função para ler um unico  professore
export const findTeam = async (req: Request, res: Response) => {
 

  try {
    const { teamId } = req.params;

    const team = await prismaClient.team.findUnique({
      where: {
        id: Number(teamId),
      }
    })

    res.status(201).json({ team });
  } catch (error) {
    console.error('Erro ao buscar o equipe:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar a equipe.' });
  }
};
