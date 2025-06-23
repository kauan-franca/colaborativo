document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('navbar').classList.toggle('active');
});

function filterGallery(category){
  const cards = document.querySelectorAll('.card');
  
  cards>forEach(card => {
    card.classList.remove('hidden');

    if(category !== 'all' && !card.classList.contains(category)){
      card.classList.add('hidden');
    }
  });
}


const members = [
{
    name: "Davi Negrão Santos",
    photo: "davi.jpg",
    bio: "Guitarrista e vocalista 🎸🎤 Um garoto que já gostou de todo tipo de música, mas sempre esteve destinado ao Rock! Com um pai pagodeiro e uma mãe do sertanejo, buscou raízes em seu avô e sua madrinha que sempre foram do rock. Hoje Davi toca guitarra, violão e canta na banda Nexus! Davi é fã de bandas como @metallica , @gunsnroses , @raimundosrock , @lvcasmusic , @acdc , @blacksabbath , @mamonasassassinas e muitas outras!"
},

{
    name: "Eduardo De Freitas Hoffman",
    photo: "hoffman.jpg",
    bio: "Baterista 🥁🔥 Quando pequeno não conhecia muitos estilos de música, mas conforme foi crescendo seguiu o lado rock de sua mãe com MPB. Ao longo do tempo foi incentivado a conhecer rock mais pesado pelos seus amigos, e assim, se identificou. Começou a tocar violão e ukulele mas se identificou com a bateria e após conhecer o Davi, e assim conheceu João e Atila ao entrar para família Nexus. Viva ao Rock N' Roll 🤘"
},

{
    name: "João Victor Dos Anjos Dias",
    photo: "joao.jpg",
    bio: "Guitarrista 🎸🔥 Sempre foi mais voltado para o futebol e outras atividades Foi com sua família e seus amigos que João descobriu e se apaixonou por clássicos como @officialqueenmusic , @mamonasassassinas , @direstraitshq e @metallica Com o tempo, o gosto pelo rock virou paixão pela música, influenciado pelas grandes bandas, ele hoje toca guitarra, apaixonadamente Viva ao Rock N' Roll 🤘"
},

{
    name: "Francisco Atila Silveira De Araujo",
    photo: "atila.jpg",
    bio: "Tecladista 🎹🔥 Francisco Atila, ou apenas Atila, é um cara muito pacífico e super tranquilo que não gosta de confunsão Sua paixão pelo o instrumento musical começou em 2023 quando em anos anteriores ele tentou tocar guitarra, bateria e baixo, e descobriu que era ruim em todos Ele descobriu seu talento após começar a tocar teclado Atila é super fã dos @mamonasassassinas e @officialqueenmusic e @johnlennon Viva ao Rock N' Roll 🤘"
},
];

let currentIndex = 0;

function updateMember() {
  const member = members[currentIndex];
  document.getElementById("member-photo").src = member.photo;
  document.getElementById("member-name").textContent = member.name;
  document.getElementById("member-bio").textContent = member.bio;

  document.getElementById("member-photo").style.transform = "scale(1.1)";
  setTimeout(() => {
    document.getElementById("member-photo").style.transform = "scale(1)";
  }, 300);

  currentIndex = (currentIndex + 1) % members.length;
}

updateMember();



