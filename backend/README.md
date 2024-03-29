# Recuperação de senha

** Requisitos Funcionais (RF) **

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

** Requisitos não funcionais (RNF) **

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

** Regras de negócio (RN) **

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

** Requisitos Funcionais (RF) **

- O usuário deve poder atualizar o seu perfil;

** Regras de negócio (RN) **

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar sua senha antiga;
- Para atualizar sua senha, o usuário precisar confirmar a nova senha;

# Painel do prestador

** RF **

- O usuário deve poder listar seus agendamentos de uma dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

** RNF **

- Os agendamentos do prestador do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

** RN **

- A notificação deve ter um status de visualizado ou não, para que o prestador possa controlar;

# Agendamento de serviços

** RF **

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

** RNF **

- Listagem de prestadores deve ser armazenada em cache;

** RN **

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro as 8h, último as 17h);
- O usuário não pode agendar em um horário já agendado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
