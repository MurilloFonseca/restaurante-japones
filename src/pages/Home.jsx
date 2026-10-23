import Card from "../components/Card"

const Home = () => {

  const favoritos = [
    {
      id: 1,
      nome: "Combo Sushi",
      descricao: "Uma seleção especial de sushis variados.",
      preco: 39.90,
      imagem: "/assets/comboSushi.jpg",
    },
    {
      id: 2,
      nome: "Hot Roll",
      descricao: "Sushi empanado, crocante e recheado.",
      preco: 29.90,
      imagem: "/assets/comboEspecial.jpg",
    },
    {
      id: 3,
      nome: "Combo Especial",
      descricao: "Uma combinação deliciosa para compartilhar.",
      preco: 44.90,
      imagem: "/assets/hotRol.jpg",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-[#0A0908]">

        <section className="flex flex-col md:flex-row items-center gap-10 px-8 md:px-16 py-16 bg-[#5E503F]">

          <div className="flex-1">
            <p className="text-[#49111C] uppercase tracking-widest text-sm mb-4">
              Culinária japonesa
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Sabores do Japão
              <span className="text-[#A9927D]"> na sua mesa.</span>
            </h2>

            <p className="text-[#A9927D] mb-7 font-semibold italic leading-relaxed">
              Descubra uma experiência especial com sushis,
              temakis e pratos preparados para você.
            </p>

            <div className="flex-1 w-full">
              <img
                src="/assets/banner.jpg"
                alt="Combo de sushi"
                className="w-full h-90 object-cover rounded-3xl"
              />
            </div>

            <a
              href="#cardapio"
              className="inline-block mt-7 bg-[#49111C] text-[#F2F4F3] px-7 py-3 rounded-full hover:bg-[#F2F4F3] hover:text-[#49111C] duration-700 transition-colors"
            >
              Conheça nosso cardápio →
            </a>
          </div>

        </section>

        {/* Pratos */}
        <section id="cardapio" className=" mt-50 px-8 md:px-16 py-14 bg-[#49111C]">

          <div className="text-center mb-10">
            <p className="text-[#F2F4F3] uppercase tracking-widest text-sm">
              Feitos com cuidado
            </p>

            <h2 className="text-3xl font-bold mt-2 text-[#A9927D]">
              Favoritos da casa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            {favoritos.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>

        </section>


        <section
          id="sobre"
          className="px-6 md:px-16 py-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

            <div className="flex-1 text-center md:text-left">
              <p className="text-[#8a2d40] uppercase tracking-[0.25em] text-xs">
                おもてなし · Hospitalidade
              </p>

              <h2 className="text-[#5E503F] text-3xl md:text-4xl font-bold mt-4">
                Mais que uma refeição,
                <br /> um momento especial.
              </h2>

              <p className="text-[#8a847f] mt-5 leading-relaxed">
                Celebramos a culinária japonesa com
                atenção aos detalhes, respeito aos ingredientes e paixão
                por compartilhar bons momentos à mesa.
              </p>
            </div>

            <div className="flex-1 w-full">
              <img
                src="/assets/hospitalidade.jpg"
                alt="Pratos da culinária japonesa"
                className="w-full h-80 md:h-96 object-cover rounded-3xl"
              />
            </div>

          </div>
        </section>


      </main>
    </>
  )
}

export default Home;