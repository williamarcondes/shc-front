import { useEffect, useState } from "react"
import Clinica from "../core/Clinica"
import ClinicaRepositorio from "../core/ClinicaRepositorio"
import useTableOuForm from "./useTableOrForm"
const axios = require('axios');

export default function useClinicas() {
    const { tableVisivel, exibirTable, exibirFormulario } = useTableOuForm()

    const [clinica, setClinica] = useState<Clinica>(Clinica.vazio())
    const [clinicas, setClinicas] = useState<Clinica[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
      axios.get();
    }

    function selecionarClinica(clinica: Clinica) {
        setClinica(clinica)
        exibirFormulario()
    }

    async function excluirClinica(clinica: Clinica) {
        console.log('Não implementado');
    }
        

    function novoClinica() {
        setClinica(Clinica.vazio())
        exibirFormulario()
    }

    async function salvarClinica(clinica: Clinica) {
        console.log('Não implementado');
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
        exibirTable
    }
}