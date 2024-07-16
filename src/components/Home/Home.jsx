import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Home() {
    const nomeProjetos = [
        {
            id: 1,
            imagem: "/logotipo-art-martins.png",
            nomeProjeto: "Sistema de Ponto Eletrônico",
        },
        {
            id: 2,
            imagem: "/projeto-apala.png",
            nomeProjeto: "Projeto Apala",
        },
        {
            id: 3,
            imagem: "/logotipo-hotsteak.png",
            nomeProjeto: "Hot Steak",
        },
        {
            id: 4,
            imagem: "/lady-life.png",
            nomeProjeto: "Lady Life",
        },
        {
            id: 5,
            imagem: "/logotipo-doe-agora.png",
            nomeProjeto: "Doe Agora",
        },
        {
            id: 6,
            imagem: "/logotipo-vlog-do-garfield.png",
            nomeProjeto: "Vlog do Garfield",
        },
        {
            id: 7,
            imagem: "/logotipo-adote-um-pet.png",
            nomeProjeto: "Adote um Pet",
        },
        {
            id: 8,
            imagem: "/logotipo-cafe-harmonia.png",
            nomeProjeto: "Café Harmonia",
        },
        {
            id: 9,
            imagem: "/logotipo-dialogo-online.png",
            nomeProjeto: "Diálogo Online",
        },
    ];

    const experienciasProfissionais = [
        {
            id: 1,
            imagem: "/logotipo-art-martins.png",
            cargo: "Estagiária em Desenvolvimento Web",
            nomeEmpresa: "ART Martins Consultoria & Marketing",
            periodo: "Abr 2024 - até o momento",
            descricao: "Sou responsável pelo desenvolvimento de sites para clientes e projetos internos, utilizando uma variedade de tecnologias. " +
                       "Trabalho com HTML, CSS, JavaScript, Bootstrap, SASS, WordPress e Elementor, enquanto no Backend utilizo PHP, CodeIgniter 4 e MySQL (MariaDB).",
        },
        {
            id: 2,
            imagem: "/logotipo-seduc.png",
            cargo: "Estagiária de Suporte Técnico",
            nomeEmpresa: "Secretaria de Estado da Educação (SEDUC)",
            periodo: "Jun 2023 - Jan 2024",
            descricao: "Atuei como estagiária na área de Suporte Técnico na SEDUC-AL, desempenhando funções na área de suporte e colaborando ativamente com demandas técnicas no setor de TI.",
        },
    ];

    return (
        <div className="bg-purple-700 min-h-screen">
            <Navbar />

            <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-5">
                <img className="w-40 h-40 md:w-60 md:h-60 rounded-full mb-6" src="/foto-perfil.png" alt="Foto de Perfil de Maria de Fátima Nunes Alves" />
                <div className="text-white text-center">
                    <h2 className="text-2xl">Olá, eu sou</h2>
                    <h1 className="text-3xl md:text-4xl">Maria de Fátima Nunes Alves</h1>
                    <h2 className="text-2xl">Desenvolvedora Full-Stack | UI/UX Design</h2>
                </div>
            </div>

            <div className="text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-white text-2xl">Tecnologias</h2>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-4">
                    <img src="/html-logo.png" alt="Logotipo HTML 5" className="w-12 sm:w-16" />
                    <img src="/css-logo.png" alt="Logotipo CSS 3" className="w-12 sm:w-16" />
                    <img src="/js-logo.png" alt="Logotipo JavaScript" className="w-12 sm:w-16" />
                    <img src="/tailwindcss-logo.png" alt="Logotipo Tailwind CSS" className="w-12 sm:w-16" />
                    <img src="/python-logo.png" alt="Logotipo Python" className="w-12 sm:w-16" />
                    <img src="/git-logo.png" alt="Logotipo Git" className="w-12 sm:w-16" />
                    <img src="/figma-logo.png" alt="Logotipo Figma" className="w-12 sm:w-16" />
                    <img src="/node.js-logo.png" alt="Logotipo Node.js" className="w-12 sm:w-16" />
                    <img src="/reactjs-logo.png" alt="Logotipo React JS" className="w-12 sm:w-16" />
                    <img src="/bootstrap-logo.png" alt="Logotipo Bootstrap" className="w-12 sm:w-16" />
                    <img src="/wordpress-logo.png" alt="Logotipo WordPress" className="w-12 sm:w-16" />
                    <img src="/logotipo-php.png" alt="Logotipo PHP" className="w-12 sm:w-16" />
                    <img src="/logotipo-mariadb.png" alt="Logotipo MariaDB" className="w-12 sm:w-16" />
                    <img src="/codeigniter-logo.png" alt="Logotipo CodeIgniter" className="w-12 sm:w-16" />
                </div>

                <div id="home" className="py-6">
                    <h2 className="bg-white text-purple-700 text-2xl text-center py-2">Home</h2>

                    <p className="text-white text-lg md:text-2xl px-4 sm:px-6 lg:px-8 py-3 leading-relaxed">
                        Olá! Meu nome é Maria de Fátima, sou uma Desenvolvedora Full-Stack e UX Designer apaixonada por criar experiências digitais incríveis. Durante minha trajetória acadêmica e profissional, tenho me dedicado a dominar as mais recentes tecnologias e práticas para oferecer soluções web eficientes e visualmente impactantes. Atualmente, sou acadêmica em Ciência da Computação no Centro Universitário de Maceió - UNIMA, onde estou aprimorando meu conhecimento teórico e prático para complementar minha experiência profissional.
                    </p>

                    <p className="text-white text-lg md:text-2xl px-4 sm:px-6 lg:px-8 py-3 leading-relaxed">
                        Minha jornada no mundo da programação começou com uma curiosidade sobre como as interfaces web funcionam e como posso contribuir para torná-las melhores. Desde então, mergulhei em linguagens e tecnologias como HTML, CSS e JavaScript, React, Bootstrap, Tailwind, Node.js, Wordpress e PHP aprimorando minhas habilidades para criar designs responsivos, acessíveis e ricos em interatividade.
                    </p>

                    <p className="text-white text-lg md:text-2xl px-4 sm:px-6 lg:px-8 py-3 leading-relaxed">
                        Com o passar do tempo, trabalhei em uma variedade de projetos desafiadores. Minha abordagem centrada no usuário me permite entender as necessidades do cliente e traduzi-las em soluções digitais que não apenas atendem, mas também excedem suas expectativas. Estou constantemente buscando aprender e me atualizar, acompanhando de perto as tendências e as melhores práticas do setor. Além disso, sou uma defensora entusiasta da colaboração e da comunicação transparente, acreditando que o trabalho em equipe é essencial para o sucesso de qualquer projeto.
                    </p>

                    <p className="text-white text-lg md:text-2xl px-4 sm:px-6 lg:px-8 py-3 leading-relaxed">
                        Estou empolgada para continuar crescendo como Desenvolvedora Full-Stack & UX Designer e enfrentar novos desafios que me permitam expandir meu conhecimento e criar experiências web cada vez mais impressionantes. Se você está em busca de um profissional comprometido, criativo e orientado para resultados, estou pronta para fazer parte do seu próximo projeto.
                    </p>
                </div>

                <div id="projetos" className="py-6">
                    <h2 className="bg-white text-purple-700 text-2xl text-center py-2">Projetos</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                        {nomeProjetos.map(projeto => (
                            <div key={projeto.id} className="bg-white p-4 rounded-md flex flex-col items-center justify-center">
                                <img src={projeto.imagem} alt={projeto.nomeProjeto} className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-2" />
                                <p className="text-black text-center text-lg mt-2">{projeto.nomeProjeto}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="experiencias" className="py-6">
                    <h2 className="bg-white text-purple-700 text-2xl text-center py-2">Experiências Profissionais</h2>

                    <div className="flex flex-col md:flex-row justify-center items-center md:gap-6">
                        {experienciasProfissionais.map(experiencia => (
                            <div key={experiencia.id} className="bg-white p-4 rounded-md flex flex-col items-center justify-center md:w-1/2 my-4">
                                <img src={experiencia.imagem} alt={experiencia.nomeEmpresa} className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-2" />
                                <p className="text-black text-center text-xl md:text-2xl">{experiencia.cargo}</p>
                                <p className="text-black text-center text-lg md:text-xl">{experiencia.nomeEmpresa}</p>
                                <p className="text-black text-center text-lg md:text-xl">{experiencia.periodo}</p>
                                <p className="text-black text-center leading-relaxed px-4 sm:px-6 lg:px-8">{experiencia.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="contato" className="py-6">
                    <h2 className="bg-white text-purple-700 text-2xl text-center py-2">Contatos</h2>

                    <p className="text-white text-lg md:text-2xl px-4 sm:px-6 lg:px-8 py-3 leading-relaxed">
                        Me siga nas redes sociais caso queira trocar alguma ideia comigo ou alguma oportunidade:
                    </p>

                    <div className="flex justify-center items-center space-x-3 px-6 py-4">
                        <a href="https://github.com/alvesmariadefatima" target="_blank" rel="noopener noreferrer"><img src="/GitHub.png" alt="Logotipo Github" className="w-16 md:w-20" /></a>
                        <a href="https://linkedin.com/in/maria-de-fatima-nunes-alves" target="_blank" rel="noopener noreferrer"><img src="/logotipo-linkedin.png" alt="Logotipo Linkedin" className="w-16 md:w-20" /></a>
                        <a href="https://instagram.com/devmariadefatima" target="_blank" rel="noopener noreferrer"><img src="/logotipo-instagram.png" alt="Logotipo Instagram" className="w-16 md:w-20" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5582998343593" target="_blank" rel="noopener noreferrer"><img src="/logotipo-whatsapp.png" alt="Logotipo WhatsApp" className="w-16 md:w-20" /></a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;