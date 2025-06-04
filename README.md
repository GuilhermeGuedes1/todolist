
# To-Do List React App

Este é um aplicativo simples de lista de tarefas (to-do list) criado com React. Permite adicionar, marcar como concluída e remover tarefas, com armazenamento no localStorage para persistência dos dados entre sessões. Além disso, possui uma animação legal que revela o ícone de lixeira ao passar o mouse sobre a tarefa.

![Captura de tela 2025-06-04 200713](https://github.com/user-attachments/assets/22c27764-dd3f-40dd-aea3-c2a4e6afa75c)

---

## 🚀 Funcionalidades


- Adicionar tarefas digitando no campo e pressionando **Enter** ou clicando em **Add**  
- Marcar tarefas como concluídas com o checkbox  
- Remover tarefas clicando no ícone de lixeira que aparece ao passar o mouse  
- Salvamento automático das tarefas no armazenamento local do navegador (localStorage)  

---

## 📂 Estrutura do Projeto


/src
 ├─ Main.js           Componente principal com estado e lógica do app
 
 ├─ TaskList.js       Componente que renderiza cada tarefa individualmente
 
 ├─ Main.css          Estilos e animações do projeto
 
 └─ index.js          Ponto de entrada React


---

## 🎯 Como usar

Acesse https://todolist-beta-lilac.vercel.app/ 

ou

1. Clone este repositório  
2. Instale as dependências com:
    bash
   npm install
   # ou
   yarn install
     
3. Inicie o servidor local:
    bash
   npm run dev
   # ou
   yarn start
     
4. Digite uma tarefa, pressione **Enter** ou clique em **Add**  
5. Marque tarefas com checkbox para concluir  
6. Passe o mouse sobre a tarefa para revelar o ícone da lixeira e clique para remover

---

## 🧠 Aprendizados

- Manipulação avançada de estados com React Hooks  
- Armazenamento local para persistência simples  
- Animações CSS com **transform** e **opacity** para uma UX mais fluida  
- Componentização para código limpo e reutilizável

---

## 🚧 Próximos passos

- ✍️ Editar tarefas existentes  
- 🔍 Filtros: exibir tarefas pendentes/concluídas/todas  
- ⚙️ Melhorar acessibilidade e responsividade  
- 🧪 Implementar testes automatizados  
- 📦 Migrar para TypeScript para maior segurança

---

## 👤 Autor

**Guilherme Guedes**  
*Desenvolvedor web em transição e apaixonado por tecnologia e música.*

---

## 📄 Licença

Este projeto é **open source** e livre para uso e modificação.  

---

💡 **Dica:** Sinta-se à vontade para contribuir com melhorias, sugestões e novos recursos!
