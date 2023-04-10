import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157',
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29',
    },
  ];

  const inicial = [
    {
      nome: 'AMANDA SILVA',
      cargo: 'Desenvolvedora de front-end e instrutora',
      imagem: 'https://github.com/asilvaolabi.png',
      time: times[0].nome,
    },
    {
      nome: 'SIMARA CONCEICAO',
      cargo: 'Engenheira de Software',
      imagem: 'https://github.com/simaraconceicao.png',
      time: times[0].nome,
    },
    {
      nome: 'MARYLLY SILVA',
      cargo: 'System Architect',
      imagem: ' https://github.com/marylly.png',
      time: times[0].nome,
    },
    {
      nome: 'LISANDRA CRUZ',
      cargo: 'Deva front-end',
      imagem: 'https://github.com/lisandrascruz.png',
      time: times[0].nome,
    },
    {
      nome: 'AMANDA SILVA',
      cargo: 'Desenvolvedora de front-end e instrutora',
      imagem: 'https://github.com/asilvaolabi.png',
      time: times[1].nome,
    },
    {
      nome: 'SIMARA CONCEICAO',
      cargo: 'Engenheira de Software',
      imagem: 'https://github.com/simaraconceicao.png',
      time: times[1].nome,
    },
    {
      nome: 'MARYLLY SILVA',
      cargo: 'System Architect',
      imagem: ' https://github.com/marylly.png',
      time: times[1].nome,
    },
    {
      nome: 'LISANDRA CRUZ',
      cargo: 'Deva front-end',
      imagem: 'https://github.com/lisandrascruz.png',
      time: times[1].nome,
    },
    {
      nome: 'AMANDA SILVA',
      cargo: 'Desenvolvedora de front-end e instrutora',
      imagem: 'https://github.com/asilvaolabi.png',
      time: times[2].nome,
    },
    {
      nome: 'SIMARA CONCEICAO',
      cargo: 'Engenheira de Software',
      imagem: 'https://github.com/simaraconceicao.png',
      time: times[2].nome,
    },
    {
      nome: 'MARYLLY SILVA',
      cargo: 'System Architect',
      imagem: ' https://github.com/marylly.png',
      time: times[2].nome,
    },
    {
      nome: 'LISANDRA CRUZ',
      cargo: 'Deva front-end',
      imagem: 'https://github.com/lisandrascruz.png',
      time: times[2].nome,
    },
    {
      nome: 'AMANDA SILVA',
      cargo: 'Desenvolvedora de front-end e instrutora',
      imagem: 'https://github.com/asilvaolabi.png',
      time: times[3].nome,
    },
    {
      nome: 'SIMARA CONCEICAO',
      cargo: 'Engenheira de Software',
      imagem: 'https://github.com/simaraconceicao.png',
      time: times[3].nome,
    },
    {
      nome: 'MARYLLY SILVA',
      cargo: 'System Architect',
      imagem: ' https://github.com/marylly.png',
      time: times[3].nome,
    },
    {
      nome: 'LISANDRA CRUZ',
      cargo: 'Deva front-end',
      imagem: 'https://github.com/lisandrascruz.png',
      time: times[3].nome,
    },
    {
      nome: 'AMANDA SILVA',
      cargo: 'Desenvolvedora de front-end e instrutora',
      imagem: 'https://github.com/asilvaolabi.png',
      time: times[4].nome,
    },
    {
      nome: 'SIMARA CONCEICAO',
      cargo: 'Engenheira de Software',
      imagem: 'https://github.com/simaraconceicao.png',
      time: times[4].nome,
    },
    {
      nome: 'MARYLLY SILVA',
      cargo: 'System Architect',
      imagem: ' https://github.com/marylly.png',
      time: times[4].nome,
    },
    {
      nome: 'LISANDRA CRUZ',
      cargo: 'Deva front-end',
      imagem: 'https://github.com/lisandrascruz.png',
      time: times[4].nome,
    },
    {
      nome: 'AMANDA SILVA',
      cargo: 'Desenvolvedora de front-end e instrutora',
      imagem: 'https://github.com/asilvaolabi.png',
      time: times[5].nome,
    },
    {
      nome: 'SIMARA CONCEICAO',
      cargo: 'Engenheira de Software',
      imagem: 'https://github.com/simaraconceicao.png',
      time: times[5].nome,
    },
    {
      nome: 'MARYLLY SILVA',
      cargo: 'System Architect',
      imagem: ' https://github.com/marylly.png',
      time: times[5].nome,
    },
    {
      nome: 'LISANDRA CRUZ',
      cargo: 'Deva front-end',
      imagem: 'https://github.com/lisandrascruz.png',
      time: times[5].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador() {
    console.log('Deletando um colaborador');
  }

  return (
    <div>
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => (
          <Time
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome,
            )}
            aoDeletar={deletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
