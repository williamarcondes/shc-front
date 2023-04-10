import { useState } from "react";

export default function useTableOrForm() {
    const [visivel, setVisivel] = useState<'table' | 'form'>('table')

    const exibirTable = () => setVisivel('table')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tableVisivel: visivel === 'table',
        exibirTable,
        exibirFormulario,
    }
}