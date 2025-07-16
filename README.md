# 🌟 Generator BoxShadow

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/eupedrobarbosa03/generator-boxShadow)
[![React](https://img.shields.io/badge/made%20with-React-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/built%20with-Vite-646CFF?logo=vite)](https://vitejs.dev/)

✨ Um gerador visual de **box-shadow** feito em React + Vite, pensado exclusivamente para uso em **desktop**.  
Permite criar sombras CSS personalizadas de forma simples, visualizando o efeito ao vivo.

---

## 🔗 **Acesse online**
> ✅ [Veja o projeto rodando aqui](https://eupedrobarbosa03.github.io/generator-boxShadow/)

⚠ **Observação importante:**  
> Este projeto foi planejado **apenas para desktop**, pois box-shadow costuma ser mais usado por devs e designers em telas maiores.

---

## ✨ **O que ele faz?**

- Ajusta dinamicamente os principais valores do `box-shadow`:  
  - deslocamento horizontal (`offset-x`)
  - deslocamento vertical (`offset-y`)
  - blur (`blur radius`)
  - cor da sombra
- Visualiza o resultado ao vivo
- Exibe o código CSS pronto para copiar

Tudo isso numa interface simples, clara e intuitiva.

---

## 🛠 **Detalhes técnicos**

- Construído com **React 19** + **Vite**
- Estilizado com **CSS Modules**
- Deploy automatizado para GitHub Pages com `gh-pages`
- `vite.config.js` configurado com:
```js
base: '/generator-boxShadow/'
