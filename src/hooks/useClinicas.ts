import { useEffect, useState } from 'react';
import axios from 'axios';
import Clinica from '../core/Clinica';
import useTableOuForm from './useTableOrForm';

export default function useClinicas() {
  const { tableVisivel, exibirTable, exibirFormulario } = useTableOuForm();

  const [clinica, setClinica] = useState<Clinica>(Clinica.vazio());
  const [clinicas, setClinicas] = useState<Clinica[]>([]);

  const instance = axios.create({
    baseURL: 'http://localhost:6060',
  });

  function obterTodos() {
    instance
      .get('clinics/1')
      .then((response) => {
        setClinicas([response.data.clinic]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(obterTodos, [instance]);

  function selecionarClinica(selectedClinica: Clinica) {
    setClinica(selectedClinica);
    exibirFormulario();
  }

  async function excluirClinica(selectedClinica: Clinica) {
    await instance
      .delete(`clinics/${selectedClinica.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    obterTodos();
  }

  function novoClinica() {
    setClinica(Clinica.vazio());
    exibirFormulario();
  }

  async function salvarClinica() {
    console.log('_____.>>>>', clinica);
    instance
      .post('/clinics', {
        name: 'Moebao',
        city: 'Poços de Caldas',
        street: 'Street Assis',
        number: 56,
        uf: 'MG',
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
