new Vue({
  el: '#desafio',
  data: {
    nome: 'Clayton',
    idade: 35,
    link:
      'https://bemresolvida.com.br/wp-content/uploads/2019/09/Legendas-para-fotos-com-paisagens-02-740x522.jpg',
  },
  methods: {
    numero: function () {
      return Math.random();
    },
  },
});
