import { Request, Response } from 'express';
import  {prismaClient} from '../../../database/prismaClient';



  export const markAttendance = async (req: Request, res: Response) => {
  const { teamId, attendanceDate, frequencies } = req.body;

  try {
    // Verificar se a turma existe
    const teamExists = await prismaClient.team.findUnique({
      where: { id: teamId },
    });

    if (!teamExists) {
      return res.status(404).json({ message: 'Team not found' });
    }

    // Converter a data de presença para o formato correto
    const formattedAttendanceDate = new Date(attendanceDate);

    // Criar as frequências de presença
    const attendanceData = frequencies.map((frequency: { studentId: number; present: boolean }) => ({
      studentId: frequency.studentId,
      teamId,
      attendanceDate: formattedAttendanceDate,
      present: frequency.present,
    }));

    const attendance = await prismaClient.attendance.createMany({
      data: attendanceData,
      skipDuplicates: true,
    });

    res.status(201).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to mark attendance' });
  }
};

