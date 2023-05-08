import { useEffect, useState } from 'react';
import axios from 'axios';
import Funcionario from '../core/Funcionario';

export default function useFuncionarios(clinicId: number) {
  const [visible, setVisible] = useState<'form' | ''>('');
  useEffect(() => {}, [visible]);

  const showForms = () => {
    setVisible('form');
  };

  const hideForms = () => {
    setVisible('');
  };

  const [funcionario, setFuncionario] = useState<Funcionario>(Funcionario.vazio() as Funcionario);
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  const instance = axios.create({
    baseURL: 'http://localhost:6060',
  });

  function obterTodos() {
    instance
      .get(`employees?clinicId=${clinicId}`)
      .then((response) => {
        const newFuncionarios = response.data.employees;
        if (JSON.stringify(newFuncionarios) !== JSON.stringify(funcionarios)) {
          setFuncionarios(newFuncionarios);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(obterTodos, [funcionarios, instance]);

  function visualizarFuncionario(currentFuncionario: Funcionario) {
    setFuncionario(currentFuncionario);
  }

  function editarFuncionario(currentFuncionario: Funcionario) {
    setFuncionario(currentFuncionario);
  }

  async function excluirFuncionario(currentFuncionario: Funcionario) {
    await instance
      .delete(`employees/${currentFuncionario.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    obterTodos();
  }

  async function criarFuncionario(currentFuncionario: Funcionario) {
    instance
      .post('/employees', {
        name: currentFuncionario.name,
        clinicId: +currentFuncionario.clinicId,
      })
      .then(() => {
        console.log(`${currentFuncionario.name} Criado com sucesso`);
        obterTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function atualizarFuncionario(currentFuncionario: Funcionario) {
    instance
      .put(`/employees/${currentFuncionario.id}`, {
        name: currentFuncionario.name,
        clinicId: +currentFuncionario.clinicId,
      })
      .then(() => {
        console.log(`${currentFuncionario.name} Atualizado com sucesso`);
        obterTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function novoFuncionario() {
    setFuncionario(Funcionario.vazio());
    showForms();
  }

  function salvarFuncionario(currentFuncionario: Funcionario) {
    if (currentFuncionario.id === 0) criarFuncionario(currentFuncionario);
    if (currentFuncionario.id !== 0) atualizarFuncionario(currentFuncionario);
  }

  return {
    funcionario,
    funcionarios,
    novoFuncionario,
    salvarFuncionario,
    excluirFuncionario,
    editarFuncionario,
    visualizarFuncionario,
    obterTodos,
    showForms,
    hideForms,
    visible,
  };
}
