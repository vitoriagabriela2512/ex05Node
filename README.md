# ex05Node
# API de Tarefas com Express

Esta é uma API simples criada com Node.js e Express que permite cadastrar e listar tarefas.

## Funcionalidades

- `GET /tarefas` → Retorna a lista de tarefas cadastradas
- `POST /tarefas` → Adiciona uma nova tarefa com:
  - `descricao`: texto da tarefa
  - `status`: "pendente", "concluída", etc.
  - `id` gerado automaticamente
  - `dataCriacao` com a data/hora atual

## Como executar

1. Instale as dependências:

```bash
npm install
