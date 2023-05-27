import { Request, Response } from 'express';
import  {prismaClient} from '../../database/prismaClient';
import {hash} from 'bcryptjs';
 

// Função para criar um novo professor
export const createTeacher = async (req: Request, res: Response) => {
  try {
    const { name, email, password, active, teamId } = req.body;

    const passwordHash = await hash(password,8)
    const teacher = await prismaClient.teacher.create({
      data: {
        name,
        email,
        password: passwordHash,
        active,
        teamId,
      },
    });

    res.status(201).json({ teacher });
  } catch (error) {
    console.error('Erro ao criar o professor:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao criar o professor.' });
  }
};

// Função para ler todos os professores
export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await prismaClient.teacher.findMany();

    res.status(200).json({ teachers });
  } catch (error) {
    console.error('Erro ao buscar os professores:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar os professores.' });
  }
};

// Função para ler um unico  professore
export const findTeacher = async (req: Request, res: Response) => {
 

  try {
    const { teacherId } = req.params;

    const teacher = await prismaClient.teacher.findUnique({
      where: {
        id: Number(teacherId),
      }
    })

    res.status(201).json({ teacher });
  } catch (error) {
    console.error('Erro ao buscar o professor:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar o professor.' });
  }
};
