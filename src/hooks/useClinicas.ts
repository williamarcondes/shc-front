import { useEffect, useState } from 'react';
import axios from 'axios';
import Clinica from '../core/Clinica';
import useTableOuForm from './useTableOrForm';

export default function useClinicas() {
  const { tableVisivel, exibirTable, exibirFormulario } = useTableOuForm();

  const [clinica, setClinica] = useState<Clinica>(Clinica.vazio());
  const [clinicas] = useState<Clinica[]>([]);

  function obterTodos() {
    console.log('aa');
  }

  useEffect(obterTodos, []);

  function selecionarClinica() {
    setClinica(clinica);
    exibirFormulario();
  }

  async function excluirClinica() {
    console.log('Não implementado');
  }

  function novoClinica() {
    setClinica(Clinica.vazio());
    exibirFormulario();
  }

  async function salvarClinica() {
    axios
      .post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    clinica,
    clinicas,
    novoClinica,
    salvarClinica,
    excluirClinica,
    selecionarClinica,
    obterTodos,
    tableVisivel,
    exibirTable,
  };
}
