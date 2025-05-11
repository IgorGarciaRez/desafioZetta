import React from 'react';

export const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Sobre o PokeSite</h1>
      <p className="mt-4">
        Bem-vindo ao PokeSite! Este site foi criado para os fãs de Pokémon que desejam explorar a vasta coleção de Pokémons
        disponíveis nas diferentes gerações do universo Pokémon. Disponibilizamos todos os pokemons em formato de cartas 
        (é possível clicar nelas para conseguir um efeito de giro 3d!)
      </p>
      <p className="">
        Foi utilizada a <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a>, uma API pública
        que fornece dados completos sobre os Pokémons, incluindo nomes, tipos, habilidades e imagens. Através dessa API, 
        você pode visualizar informações sobre qualquer Pokémon de todas as gerações, de Kanto a Paldea.
      </p>
      <p className="">
        Vale ressaltar que, devido à limitação de requisições que o GitHub pode fazer para carregar imagens, algumas imagens 
        podem não ser carregadas corretamente. Pedimos desculpas por qualquer inconveniente, mas até o momento não encontrei
        uma solução para contornar esse erro. As imagens mal carregadas aparecerão com o ícone de pokebola.
        Uma solução seria baixar todas as imagens para previnir esse erro, mas como esse é um projeto simples decidi que seria 
        melhor continuar com o github para não precisar de um armazenamento gigante(afinal, são +1000 pokemons).
      </p>
      <p className="">
        Os Pokémons no site são organizados por regiões, o que permite que você explore as gerações em que eles foram
        introduzidos. As regiões incluem: Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Paldea.
      </p>
      <p className="">
        Além disso, você pode procurar por um Pokémon específico utilizando seu nome completo.
      </p>
      <p className="">
        O PokeSite foi criado para proporcionar uma experiência divertida e informativa para todos os entusiastas de Pokémon.
        O objetivo é criar uma plataforma simples, rápida e eficiente para você explorar, aprender e se divertir com a
        incrível diversidade do universo Pokémon. Espero que você aproveite a jornada!
      </p>
      <p className="">
        Agradecemos sua visita e esperamos que você continue explorando o maravilhoso mundo dos Pokémons!
      </p>
    </div>
  );
};
