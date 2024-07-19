import React from 'react';

const Modal = ({ isOpen, onClose, onContinue }) => {
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-4 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
        >
          &times;
        </button>
        <h1 className="text-xl font-semibold text-center mb-4">Política de Privacidade</h1>
        <div className="text-sm text-gray-700 space-y-4">
          <h2 className="font-bold">1. OBJETIVO</h2>
          <p>Este documento tem como objetivo reforçar os cuidados e compromisso com à privacidade e a proteção de dados pessoais, estabelecendo de forma objetiva e clara as regras sobre o Tratamento de Dados Pessoais dos Usuários do Portal de Carreiras da AeC. Assim, será possível compreender como as informações são coletadas, por qual motivo são coletadas e como são compartilhadas.</p>
          
          <h2 className="font-bold">2. CAMPO DE APLICAÇÃO</h2>
          <p>Este documento se aplica a todos aqueles que desejam integram os quadros da AeC e descreve o compromisso da AeC em como utilizará e tratará os dados pessoais dos candidatos.</p>
          
          <h2 className="font-bold">3. DEFINIÇÕES</h2>
          <p><strong>Dados Pessoais:</strong> Qualquer informação relativa a uma pessoa física identificada ou identificável; é considerada identificável uma pessoa física que possa ser identificada, direta ou indiretamente, em especial por referência a uma informação, como - por exemplo - um nome, um número de identificação, dados de localização, identificadores por via eletrônica ou a um ou mais elementos específicos da identidade física, fisiológica, genética, mental, econômica, cultural ou social dessa pessoa física.</p>
          <p><strong>Encarregado pelo tratamento de dados pessoais:</strong> Termo que designa o Encarregado pelo Tratamento de Dados Pessoais da AeC, isto é, a pessoa indicada para atuar como canal de comunicação entre a AeC, o colaborador e a Autoridade Nacional de Proteção de Dados (ANPD).</p>
          <p><strong>Tratamento:</strong> Coleta, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, atualização, comunicação, transferência, compartilhamento e extração de dados pessoais.</p>
          
          <h2 className="font-bold">4. DADOS DOS USUÁRIO COLETADOS PELA AeC</h2>
          <p>O acesso a todas as funcionalidades do Portal de Carreiras AeC, inclusive cadastro de currículo e candidatura a vagas anunciadas, depende do compartilhamento de informações pessoais e da realização de cadastro pelo candidato.</p>
          <p><strong>Os dados pessoais coletados e como será coletado são:</strong></p>
          <p>- Seus dados pessoais detalhados são fornecidos diretamente por você em pré cadastro e em alguns casos sua imagem, entrevistas, currículos, cartas, redações, testes ou outros materiais;</p>
          <p>- Dados coletados por analistas de recrutamento, com base em nossas interações com você, sejam presencialmente, por telefone, aplicativos de conversa ou online e também através de suas informações públicas disponíveis na Internet;</p>
          <p>- Dados do seu emprego anterior;</p>
          <p>- Formação acadêmica, certificações e treinamentos recebidos;</p>
          <p>- Quando aplicável, histórico de crédito, registros criminais ou outros dados divulgados durante o processo de recrutamento;</p>
          <p>- Dados sobre sua deficiência quando for relevante para a sua capacidade ou disponibilidade para trabalhar ou para uma acomodação em local de trabalho.</p>

          <h2 className="font-bold">5. COMO OS DADOS PESSOAIS SERÃO OBTIDOS?</h2>
          <p>Segue abaixo lista das fontes de onde a AeC obterá os seus dados pessoais:</p>
          <p>- Através de formulários, questionários, testes em processos online ou presenciais fornecidos diretamente de você, e em alguns casos em integrações com redes sociais digitais;</p>
          <p>- Em conversas com analistas de recrutamento e entrevistas com gestores e outros funcionários ou representantes da AeC;</p>
          <p>- Em buscas na Internet, redes e sociais que você tenha disponibilizado como públicos;</p>
          <p>- De seus empregadores anteriores;</p>
          <p>- De instituições de ensino e formação que você tenha tido relações.</p>

          <h2 className="font-bold">6. NECESSIDADE E FINALIDADE DE OBTENÇÃO DOS DADOS PESSOAIS</h2>
          <p>Com o propósito de realçar a privacidade do candidato todo e qualquer tratamento de dados pessoais deve ser limitado ao mínimo necessário, pertinente, proporcional e não excessivo para viabilizar a finalidade pretendida.</p>
          <p>Os dados pessoais do candidato são tratados apenas para as finalidades descritas neste documento, para os propósitos informados ao mesmo no momento da coleta das informações e para outras finalidades que sejam compatíveis e complementares com aquelas apresentadas no momento da coleta.</p>
          <p><strong>Abaixo estão listadas as principais razões pelas quais é necessária a obtenção dos dados pessoais:</strong></p>
          <p>- Analisar a aplicabilidade do seu perfil para o cargo no qual você está se candidatando e também para futuras oportunidades de emprego na AeC;</p>
          <p>- Gerenciar a sua candidatura e a comunicação com você;</p>
          <p>- Podemos armazenar suas entrevistas e testes online para análise por recrutadores, gestores e recursos computacionais cognitivos e de automação de processos;</p>
          <p>- Para responder a solicitações legais obrigatórias e processos jurídicos;</p>
          <p>- Para dar início ao processo de contratação em caso de aprovação de sua aprovação no processo seletivo;</p>
          <p>- Pré cadastro para candidatura em oportunidades de emprego;</p>
          <p>Nestes casos, o tratamento somente ocorrerá se for estritamente necessário para o alcance dessas finalidades.</p>

          <h2 className="font-bold">7. PRAZO DE ARMAZENAMENTO DAS INFORMAÇÕES</h2>
          <p>Ao ser selecionado e caso você aceite o emprego na AeC, seus dados pessoais coletados durante o período de recrutamento seleção se tornarão parte de seus dados na AeC e sua retenção seguirá as Políticas internas da AeC e suas necessidades legais.</p>
          <p>Caso você não seja contratado pela AeC, poderemos continuar a reter e utilizar seus dados pessoais coletados durante o processo de recrutamento e seleção para considerá-lo em novas vagas, pelo período máximo de 18 (dezoito) meses.</p>
          <p>Poderão ser mantidos, após este prazo, apenas os dados necessários para atendimento, por parte da AeC de suas obrigações legais e regulatórias.</p>
          <p>Por fim, tão logo o objetivo que motivou a coleta dos dados seja atingido e, portanto, não sejam mais necessários nem para o cumprimento de obrigações legais e/ou contratuais, nem para o resguardo de direitos, a AeC se compromete a eliminá-los de forma segura e permanente.</p>

          <h2 className="font-bold">8. COMPARTILHAMENTO DE DADOS PESSOAIS</h2>
          <p>É possível que a AeC realize o uso compartilhado dos dados pessoais do candidato com Parceiros, caso em que estará restrito ao mínimo adequado e necessário para o cumprimento de alguma das finalidades específicas listadas no item 6.</p>

          <h2 className="font-bold">9. EXERCÍCIO DOS DIREITOS DO CANDIDATO</h2>
          <p>O candidato AeC tem assegurado todos os direitos legais relativos aos dados pessoais, incluindo, mas não se limitando a:</p>
          <p>- saber quais dados pessoais são tratados pela AeC;</p>
          <p>- saber com quem os seus dados são compartilhados;</p>
          <p>- corrigir, atualizar e/ou completar os dados;</p>
          <p>- requerer a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados de forma ilícita; e</p>
          <p>- revogar o seu consentimento, quando os dados pessoais são tratados sob essa hipótese.</p>
          <p>Para os itens descritos acima, a fim de exercer quaisquer outros direitos, o candidato deverá acessar o site da AeC www.aec.com.br e, no menu Privacidade, acionar a opção “Atendimento aos direitos dos Titulares”.</p>
          <p>Em casos específicos, é possível que alguma requisição não seja atendida. Nestes casos, será explicado o motivo que justifica o não atendimento.</p>

          <h2 className="font-bold">10. PROTEÇÃO DOS DADOS PESSOAIS</h2>
          <p>Ao se tornar um candidato da AeC, diversas informações são coletadas a seu respeito. Entende-se que isso é uma grande responsabilidade e, por isso, a empresa se compromete em garantir a segurança dessas informações e da sua privacidade.</p>
          <p>A AeC detém normas e protocolos internos que determinam a tratativa de todos os dados pessoais dentro da organização. Essas normas têm como objetivo garantir o tratamento adequado e lícito dos dados.</p>
          <p><strong>Como exemplo de algumas medidas tomadas, estão:</strong></p>
          <p>- Controle estrito do tratamento de dados pessoais, incluindo limitação de acesso, e acesso protegido por senha;</p>
          <p>- Mecanismos de autenticação de acesso, que asseguram a individualização dos registros;</p>
          <p>- Soluções de gestão dos registros por meio de armazenamento de logs de acesso, sem prejuízo da adoção de outros padrões técnicos posteriormente estipulados pelas autoridades competentes;</p>
          <p>- Acesso aos Dados Pessoais, proporcionalidade e relevância: Internamente, os Dados Pessoais coletados serão restritos para minimizar o número de pessoas na AeC que precisam deles para as finalidades definidas nesta declaração de privacidade, sendo eles: seus possíveis futuros gestores, recrutadores do RH, TI, Compliance, Jurídico e Auditoria Interna, além do compromisso de confidencialidade e preservação da sua privacidade nos termos desta Política.</p>

          <h2 className="font-bold">11. TRANSFERÊNCIA INTERNACIONAL DE DADOS PESSOAIS</h2>
          <p>Caso seja necessária a transferência internacional de dados pessoais para o cumprimento das finalidades especificadas nesta Política, a AeC compromete-se a informar os titulares através da atualização desta Política.</p>
          <p>Adicionalmente, todas as medidas técnicas e organizacionais necessárias para garantir a confidencialidade, integridade e disponibilidade dos dados pessoais serão tomadas de acordo com o Art. 33º da LGPD.</p>

          <h2 className="font-bold">12. ESCLARECIMENTOS OU REPORTES</h2>
          <p><strong>Alteração do teor e atualização:</strong> o candidato reconhece que a AeC tem o direito de alterar o teor dessa Política a qualquer tempo, conforme finalidade ou necessidade, sendo o mesmo informado caso esta alteração reflita nas finalidades de tratamento.</p>
          <p><strong>Canais de atendimento:</strong> Em caso de dúvidas relacionadas à privacidade ou proteção de dados, ou para situações em que se tenha sido identificada ou haja suspeita de violação às práticas descritas neste documento, o candidato poderá entrar em contato com o setor responsável, por meio do endereço eletrônico AeCDepartamentoPrivacidade@aec.com.br.</p>
          <p><strong>Encarregado de Dados Pessoais (DPO Responsável):</strong> Roberto Toscani</p>

          <h2 className="font-bold">13. DISPOSIÇÕES FINAIS</h2>
          <p>Qualquer necessidade de ação em desacordo com as regras estabelecidas na Política Geral de Privacidade e Manuseio de Dados Pessoais e documentações complementares devem ser direcionados à equipe de Privacidade, através do e-mail aecdepartamentoprivacidade@aec.com.br, para análise do risco, seu registro, e envio para a apreciação pela alçada competente e/ou Comitê de Segurança da Informação e Privacidade (CSIP).</p>
          <p>O colaborador que fizer uso indevido ou não autorizado dos recursos da AeC, violar controle de segurança, ou de qualquer modo agir em desacordo com os termos dessa política, fica sujeito à aplicação de medidas disciplinares legalmente previstas, podendo haver responsabilização penal, civil e/ou administrativa, na forma da legislação em vigor.</p>
          <p>É responsabilidade da equipe de Privacidade a análise e apuração das denúncias de violação à Política Geral de Privacidade e Manuseio de Dados Pessoais e documentos complementares, devendo recomendar o plano de ação de melhorias, e quando necessário apoiar na aplicação de medidas disciplinares.</p>
          <p>A equipe de Privacidade deve divulgar este documento, visando garantir a sua eficácia.</p>
          <p>A Política Geral de Privacidade e Manuseio de Dados Pessoais e todos os documentos que compõem o Sistema de Gestão de Privacidade da Informação, devem ser revistos periodicamente, de acordo com período máximo de temporalidade vigente, estabelecido na REG 007 – Controle de Documentos.</p>
        </div>

        
        <button
                    onClick={onClose}

          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
        >
          Continuar
        </button>

      </div>
    </div>
  );
};

export default Modal;
