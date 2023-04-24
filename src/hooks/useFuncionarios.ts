import { useEffect, useState } from 'react';
import axios from 'axios';
import Funcionario from '../core/Funcionario';
import useTableOuForm from './useTableOrForm';

export default function useFuncionarios() {
  const { visibleTable, visibleProfile, visibleForm, showTable, showForms, showProfile } = useTableOuForm();

  const [funcionario, setFuncionario] = useState<Funcionario>(Funcionario.vazio() as Funcionario);
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  const instance = axios.create({
    baseURL: 'http://localhost:6060',
  });

  function obterTodos() {
    instance
      .get('funcionarios')
      .then((response) => {
        const newFuncionarios = response.data.funcionarios;
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
    showProfile();
  }

  function editarFuncionario(currentFuncionario: Funcionario) {
    setFuncionario(currentFuncionario);
    showForms();
  }

  async function excluirFuncionario(currentFuncionario: Funcionario) {
    await instance
      .delete(`funcionarios/${currentFuncionario.id}`)
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
      .post('/funcionarios', {
        name: currentFuncionario.name,
        clinicaId: +currentFuncionario.clinicaId,
      })
      .then(() => {
        console.log(`${currentFuncionario.name} Criado com sucesso`);
        obterTodos();
        showTable();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function atualizarFuncionario(currentFuncionario: Funcionario) {
    instance
      .put(`/funcionarios/${currentFuncionario.id}`, {
        name: currentFuncionario.name,
        clinicaId: +currentFuncionario.clinicaId,
      })
      .then(() => {
        console.log(`${currentFuncionario.name} Atualizado com sucesso`);
        obterTodos();
        showTable();
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
    visibleTable,
    visibleForm,
    visibleProfile,
    showTable,
  };
}
