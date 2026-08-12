# 🎯 FTdle 

Um jogo diário no estilo *Wordle* onde o usuário tenta adivinhar uma pessoa (membro de organização/EJ) a partir de dicas progressivas, com feedback visual de acerto por característica.

> ⚠️ Projeto em fase de planejamento/concepção. Este README será atualizado conforme o desenvolvimento avança.

---

## 📌 Sobre o projeto

O jogo apresenta dicas sobre uma pessoa (nome, foto, curso, organizações, etc.) e o usuário tenta adivinhar quem é, recebendo feedback visual sobre quais características do palpite batem com a resposta correta.

### Como funciona o feedback visual
Cada característica do palpite é comparada com a resposta e colorida:
- 🟩 **Verde** — Acertou
- 🟨 **Amarelo** — Parcial
- 🟥 **Vermelho** — Errou

---

## ✅ Funcionalidades (Stories)

- [ ] Usuário pode ver sugestões de nomes com base no que está digitando
- [ ] Usuário pode palpitar (dar um chute) sobre quem é a pessoa
- [ ] Usuário pode ver dicas
- [ ] Usuário recebe feedback visual por característica (verde/amarelo/vermelho)
- [ ] Usuário pode palpitar quantas vezes quiser
- [ ] Usuário pode manter uma sequência (streak) de dias jogando
- [ ] Leaderboard (ranking de usuários)

### Persistência da sequência (streak)
Formas cogitadas para salvar o progresso do usuário:
- Cookies
- Local Storage
- Conta de usuário (login)

---

## 🧑‍🤝‍🧑 Modelo de dados — "Termo de Pessoas"

Atributos usados como dicas/características de cada pessoa cadastrada:

| Campo | Observação |
|---|---|
| Nome | |
| Foto | |
| República | |
| ORGs | ex.: Afria, BDT, ... |
| Redes sociais | |
| Curso | |
| Ano | |
| Gênero | |
| Cargo/Área | opcional |
| Ano de ingresso na EJ | opcional |
| Ano de egresso | opcional |

---

## 🛠️ Stack tecnológica

- **Front-end:** React + TanStack
- **Back-end:** Node.js (Nest, Express ou Fastify)
- **Banco de dados:** Supabase, PostgreSQL, Prisma
- **Infra/Testes:** Docker, Vercel, Vitest, Supertest
- **Linguagem:** TypeScript
- **Arquitetura:** Clean Architecture, DDD (Domain-Driven Design), TDD (Test-Driven Development)

---

## 💡 Ideias em aberto (a pensar...)

- Modos de jogo separados por organização (ex.: BDT / Afria Jr.)
- Modos extras, como adivinhar a pessoa pela foto
- Leaderboard público

---

## 👥 Equipe

- Vinicius Romão
- Rafael Santiago
- Gustavo Domingues

---

## 🚀 Como rodar o projeto

> Em breve — instruções de instalação e execução serão adicionadas conforme o setup inicial for definido.

```bash
# clonar o repositório
git clone <url-do-repositorio>

# instalar dependências
npm install

# rodar em ambiente de desenvolvimento
npm run dev
```

---

## 📄 Licença

Defina a licença do projeto aqui (ex.: MIT).
