import { Request, Response } from 'express';

import  {prismaClient} from '../../../database/prismaClient';

export const createStudent  = async (req: Request, res: Response) => {
    const { name, dateOfBirth, registration, cpf, teamId } = req.body;

    // Validar a string de data de nascimento
  const dateParts = dateOfBirth.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return res.status(400).json({ message: 'Invalid date of birth' });
  }
      

  const formattedDateOfBirth = new Date(year, month - 1, day);
  
    try {
      const student = await prismaClient.student.create({
        data: {
          name,
          dateOfBirth: formattedDateOfBirth,
          registration,
          cpf,
          teamId: parseInt(teamId),
        },
      });

    return res.status(201).json(student);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to create student' });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
    try {
      const student = await prismaClient.student.findMany();
  
      res.status(200).json({ student });
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
      res.status(500).json({ error: 'Ocorreu um erro ao buscar os alunos.' });
    }
  };


  export const findStudent = async (req: Request, res: Response) => {

    try {
      const { studentId } = req.params;
  
      const student = await prismaClient.student.findUnique({
        where: {
          id: Number(studentId),
        }
      })
  
      res.status(201).json({ student });
    } catch (error) {
      console.error('Erro ao buscar o equipe:', error);
      res.status(500).json({ error: 'Ocorreu um erro ao buscar a equipe.' });
    }
  };

  export const getStudentsByTeam = async (req: Request, res: Response) => {
    const { teamId } = req.params;
    try {

        const students = await prismaClient.student.findMany({
            where: {
            teamId: parseInt(teamId),
            },
        });    
  
      res.status(201).json({ students });
    } catch (error) {
      console.error('Erro ao buscar o equipe:', error);
      res.status(500).json({ error: 'Ocorreu um erro ao buscar a equipe.' });
    }
  };
  
  


