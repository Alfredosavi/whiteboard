# Collaborative Whiteboard - Socket.IO
Um quadro branco colaborativo simples usando socketIO com ferramentas de desenho que permite que vários usuários desenhem ao mesmo tempo. Exemplo extraído do __socketIO__ com algumas modificações.

![whiteboard image Dota2](https://i.imgur.com/JA88RNl.png)

P.S: Abra links em duas guias separadas em seu navegador ou Abrir link em outro computador tente desenhar simultaneamente em ambos.

__DISPONÍVEL EM__: [HerokuApp](https://whiteboardio.herokuapp.com/)


## :tada: Recursos
  * Sistema que mostra quais usuários estão online;
  * Auto clean a cada ```X``` minutos;
  * Histórico de desenhos.


## 🔥 Instalação e execução
  1. Faça um clone desse repositório: ```git clone https://github.com/Alfredosavi/whiteboard```;
  2. Entre dentro do diretório: ```cd whiteboard/```;
  3. Instale as dependências com: ```yarn install```;
  4. Rode com yarn start e acesse: ```http://localhost:3000/```.


## :eyes: Observações
  1. Variáveis ambiente ```ENV```:
      * __PORT__: Porta do ```server listen``` (default 3000);
      * __TIME__: Intervalo de tempo responsável pelo reset (clean) da tela.


## ⚡️ Como contribuir
  - Faça um fork desse repositório;
  - Cria uma branch com a sua feature: `git checkout -b minha-feature`;
  - Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
  - Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


## :credit_card: Créditos
  * [Socket.IO](https://socket.io/demos/whiteboard/)


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
