import { useEffect, useState } from 'react';
import axios from 'axios';
import Clinica from '../core/Clinica';
import useTableOuForm from './useTableOrForm';

export default function useClinicas() {
  const { visibleTable, showTable, showForms } = useTableOuForm();

  const [clinica, setClinica] = useState<Clinica>(Clinica.vazio() as Clinica);
  const [clinicas, setClinicas] = useState<Clinica[]>([]);

  const instance = axios.create({
    baseURL: 'http://localhost:6060',
  });

  function obterTodos() {
    instance
      .get('clinics')
      .then((response) => {
        const newClinicas = response.data.clinics;
        if (JSON.stringify(newClinicas) !== JSON.stringify(clinicas)) {
          setClinicas(newClinicas);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(obterTodos, [clinicas, instance]);

  function selecionarClinica(selectedClinica: Clinica) {
    setClinica(selectedClinica);
    showForms();
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
    showForms();
  }

  async function salvarClinica(currentClinica: Clinica) {
    instance
      .post('/clinics', {
        name: currentClinica.name,
        city: currentClinica.city,
        street: currentClinica.street,
        number: +currentClinica.number,
        uf: currentClinica.uf,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(currentClinica);
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
    visibleTable,
    showTable,
  };
}
