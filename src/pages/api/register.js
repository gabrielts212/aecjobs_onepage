export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { name, cpf, email, phone, state, radioOption } = req.body;

  console.log('Dados recebidos no servidor:', { name, cpf, email, phone, state, radioOption });


  const messages = [
    'Bem-vindo ao nosso serviço!',
    'Seu cadastro foi realizado com sucesso!',
    'Você agora é um membro registrado!',
    'Obrigado por se cadastrar!',
    'Seu registro foi concluído!',
    'Estamos felizes em tê-lo conosco!',
  ];

  if (!name || !cpf || !email || !phone || !state || !radioOption) {
    return res.status(400).json({ message: 'Erro ao cadastrar o usuário. Verifique os campos e tente novamente.' });
  }


  const existingUsers = [
    { email: 'j@a', cpf: '12345678912' },
    { email: 'je@a', cpf: '12345678912' },
  ];

  const userExists = existingUsers.some(
    (user) => user.email === email || user.cpf === cpf
  );

  if (userExists) {
    return res.status(200).json({ message: 'Usuário já cadastrado.' });
  }

 
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  res.status(200).json({ message: randomMessage });
}
