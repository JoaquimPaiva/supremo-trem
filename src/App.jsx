import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Condicional from './components/basicos/Condicional';
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/super'

export default (props) => (
    <div className="App">
        
        <Card titulo="#08 - Communicação Indireta" color="#000">
            <Super></Super>
        </Card>

        <Card titulo="#07 - Communicação Direta" color="#4298B5">
            <Pai sobrenome="Freitas"></Pai>
        </Card>

        <Card titulo="#06 - Condicional v2" color="#FA6900">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1" color="#E94C6F">
            <Condicional numero={11}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição" color="#008BBA">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente Com Filhos" color="#D96459">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componentes Com Parametro" color="#FF85CB">
            <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#92B06A">
            <Primeiro />
        </Card>
    </div>

);