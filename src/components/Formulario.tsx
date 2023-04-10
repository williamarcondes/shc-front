import { useState } from "react";
import Clinica from "../core/Clinica";
import Button from "./Button";
import Entrada from "./Entrada";

interface FormularioProps {
    clinica: Clinica
    clinicaMudou?: (clinica: Clinica) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.clinica?.id
    const [nome, setNome] = useState(props.clinica?.nome ?? '')
    const [cidade, setCidade] = useState(props.clinica?.cidade ?? '')

    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entrada 
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada
                texto="Idade"
                tipo="number"
                valor={cidade}
                valorMudou={setCidade}
            />
            <div className="flex justify-end mt-7">
                <Button cor="blue" className="mr-2"
                    onClick={() => props.clinicaMudou?.(new Clinica(id, nome, cidade, cidade))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancelado}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}