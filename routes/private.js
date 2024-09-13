import express from 'express'
import { PrismaClient } from '@prisma/client'
import auth from '../middlewares/auth.js'  // Importando o middleware de autenticação

const router = express.Router()
const prisma = new PrismaClient()

// Listar todas as tarefas do usuário autenticado
router.get('/tarefas', auth, async (req, res) => {
  try {
    const tarefas = await prisma.task.findMany({
      where: {
        userId: req.userId
      }
    })
    res.status(200).json(tarefas)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Erro ao listar tarefas' })
  }
})

// Adicionar nova tarefa
router.post('/tarefas', auth, async (req, res) => {
  const { title, description, createdAt } = req.body; // Recebe o campo `createdAt` com data e hora completos
  
  // Validação de campos obrigatórios
  if (!title || !description) {
    return res.status(400).json({ message: 'Título e descrição são obrigatórios' });
  }

  try {
    console.log(req.body); // Loga os dados recebidos antes de enviar a resposta

    const novaTarefa = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.userId, // Garante que o ID do usuário logado seja utilizado
        createdAt: createdAt || new Date(),  // Usa a data enviada ou a data atual
      },
    });

    res.status(201).json(novaTarefa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao adicionar tarefa', error: err.message });
  }
});


// Marcar tarefa como concluída
router.patch('/tarefas/:id/completar', auth, async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body; // Recebe o novo valor de "completed" no corpo da requisição
  try {
    const tarefaAtualizada = await prisma.task.updateMany({
      where: { id: id, userId: req.userId },
      data: { completed }
    });
    if (tarefaAtualizada.count === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada ou não pertence ao usuário' });
    }
    res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar tarefa' });
  }
})


// Editar título, descrição e data de criação de uma tarefa
router.put('/tarefas/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { title, description, createdAt } = req.body;

  try {
    const tarefaAtualizada = await prisma.task.update({
      where: {
        id: id,
        userId: req.userId
      },
      data: {
        title,
        description,
        createdAt: createdAt ? new Date(createdAt) : undefined,
      }
    });

    if (!tarefaAtualizada) {
      return res.status(404).json({ message: 'Tarefa não encontrada ou não pertence ao usuário' });
    }

    res.status(200).json(tarefaAtualizada); // Retorna a tarefa atualizada
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao editar tarefa' });
  }
});


// Excluir uma tarefa
router.delete('/tarefas/:id', auth, async (req, res) => {
  const { id } = req.params
  try {
    const tarefaDeletada = await prisma.task.deleteMany({
      where: {
        id: id,
        userId: req.userId  // Garante que o usuário só pode deletar suas próprias tarefas
      }
    })
    if (tarefaDeletada.count === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada ou não pertence ao usuário' })
    }
    res.status(204).json({ message: 'tarefa excluída com sucesso' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Erro ao excluir tarefa' })
  }
})

export default router