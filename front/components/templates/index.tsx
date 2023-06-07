export interface TemplateProps {
    children: any
}

export default function Template(props:TemplateProps) {

    return (
    <div id="container">
        {/* <!-- CABEÇALHO --> */}
        <header id="header">
            <h1>Votação de animes de 2022 - Curso de Férias - Sistemas de Informação</h1>
        </header>
        {/* <!-- CABEÇALHO [FIM] --> */}

        {/* <!-- CONTEUDO PRINCIPAL --> */}
        <div id="main">
            {props.children}
        </div>
        {/* <!-- CONTEUDO FIM --> */}

    </div>
    )
}