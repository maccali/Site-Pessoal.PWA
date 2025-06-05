import React from 'react'

import styles from './projects.module.css'

function ProjectsContent() {
  return (
    <>
      <section id="projects">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="row">
              <div className="col-xs">
                <h1>Progressive Web Apps: Uma Introdução</h1>
                <p>
                  Os Progressive Web Apps (PWA) são uma nova forma de criar
                  aplicativos da web que oferecem uma experiência mais rica e
                  nativa aos usuários. Eles combinam o melhor da web e dos
                  aplicativos nativos para entregar uma experiencia do usuário
                  única e de alta qualidade.
                </p>
                <h2>Como os PWAs funcionam</h2>
                <p>
                  Os PWAs funcionam como uma página da web normal, mas com
                  algumas melhorias adicionais. Eles usam tecnologias da web
                  avançadas, como Service Workers e Web App Manifests, para
                  fornecer funcionalidades adicionais, como notificações push,
                  offline, e armazenamento local.
                  <h3>Service Workers</h3>
                  <p>
                    Os Service Workers são scripts JavaScript que rodam em
                    segundo plano no navegador do usuário, permitindo que o PWA
                    funcione mesmo sem conexão à Internet. Eles permitem que o
                    PWA cacheie recursos estáticos, como imagens e estilos, para
                    melhorar o desempenho do aplicativo offline.
                  </p>
                  <h3>Web App Manifests</h3>
                  <p>
                    O Web App Manifest é um arquivo JSON que fornece informações
                    sobre o aplicativo, como o nome, a descrição, a cor de fundo
                    e as imagens de ícone. Ele também permite que o aplicativo
                    seja instalado na tela inicial do dispositivo do usuário.
                  </p>
                  <h3>Notificações Push</h3>
                  <p>
                    Os PWAs podem enviar notificações push para o usuário, mesmo
                    quando o aplicativo não está em execução. Isso permite que o
                    usuário fique informado sobre atualizações importantes,
                    mesmo quando não está usando o aplicativo.
                  </p>
                  <h3>Modo Offline</h3>
                  <p>
                    Com o uso de Service Workers, PWAs podem funcionar mesmo sem
                    conexão com a Internet. Isso significa que o usuário pode
                    acessar o conteúdo do aplicativo mesmo sem conexão, o que é
                    uma vantagem em situações onde o acesso à Internet é
                    limitado ou indisponível.
                  </p>
                  <h3>Armazenamento Local</h3>
                  <p>
                    Os PWAs podem armazenar dados localmente no dispositivo do
                    usuário, o que permite que o aplicativo funcione sempre que
                    precisar, mesmo sem conexão à Internet. Isso também
                    significa que o usuário pode acessar seus dados mesmo quando
                    estiver offline.
                  </p>
                </p>
                <h2>Por que usar PWAs</h2>
                <p>
                  Existem várias razões pelas quais as empresas e
                  desenvolvedores devem considerar o uso de PWAs ao invés de
                  aplicativos nativos ou aplicativos híbridos. Aqui estão
                  algumas dessas razões:
                </p>
                <ul>
                  <li>
                    Facilidade de desenvolvimento: PWAs podem ser desenvolvidos
                    usando tecnologias da web que já são conhecidas pelos
                    desenvolvedores, como HTML, CSS e JavaScript.
                  </li>
                  <li>
                    Alcance global: PWAs podem ser acessados por qualquer pessoa
                    com acesso à internet, sem a necessidade de serem baixados
                    em uma loja de aplicativos.
                  </li>
                  <li>
                    Menor custo de desenvolvimento: Como PWAs não precisam ser
                    publicados em lojas de aplicativos, os custos de
                    desenvolvimento são geralmente menores do que os de
                    aplicativos nativos ou híbridos.
                  </li>
                  <li>
                    Atualizações instantâneas: PWAs podem ser atualizados
                    instantaneamentesem a necessidade de aprovação ou ação do
                    usuário, o que torna o processo de atualização muito mais
                    rápido e eficiente.
                  </li>
                  <li>
                    Experiência do usuário: PWAs oferecem uma experiência de
                    usuário mais rica e fluida, pois eles podem aproveitar as
                    funcionalidades do dispositivo, como notificações push e
                    armazenamento local.
                  </li>
                </ul>
                <h2>Como adotar PWAs na sua empresa</h2>
                <p>
                  Se você está interessado em adotar PWAs na sua empresa,
                  existem coisas que você pode fazer para começar. Aqui estão
                  algumas dicas:
                </p>
                <ul>
                  <li>
                    Pesquise sobre PWAs: Aprenda mais sobre PWAs, suas vantagens
                    e desvantagens, e como eles podem ser usados em sua empresa.
                  </li>
                  <li>
                    Fale com um especialista: Converse com especialistas em PWAs
                    para obter aconselhamento e ajuda para planejar sua adoção
                    de PWAs.
                  </li>
                  <li>
                    Comece pequeno: Comece com um pequeno projeto PWA para
                    experimentar as tecnologias e avaliar se elas são uma boa
                    opção para sua empresa.
                  </li>
                  <li>
                    Implemente gradualmente: Uma vez que você tenha uma
                    compreensão mais clara de como PWAs funcionam, implemente-os
                    gradualmente em sua empresa, começando com projetos menores
                    e mais simples.
                  </li>
                </ul>
                <h2>Conclusão</h2>
                <p>
                  Os Progressive Web Apps são uma nova forma de criar
                  aplicativos da web que oferecem uma experiência mais rica e
                  nativa aos usuários. Eles combinam o melhor da web e dos
                  aplicativos nativos para entregar uma experiencia do usuário
                  única e de alta qualidade. Se você está interessado em adotar
                  PWAs na sua empresa, comece pesquisando e falando com um
                  especialista, e implemente-os gradualmente em seus projetos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsContent
