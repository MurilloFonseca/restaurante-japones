import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cardapio = () => {
  return (
    <div className="min-h-screen bg-[#0A0908]">
      <Navbar/>
      <div className="bg-[#A9927D] text-center py-16">
      <h1 className="text-[#F2F4F3] text-7xl font-bold">
        Nosso Cardápio
      </h1>
      <p className="text-[#F2F4F3] max-w-xl mx-auto text-xl pt-10">
        Descubra a arte da culinária japonesa, com ingredientes frescos, 
        sabores únicos e o cuidado em cada detalhe. Uma experiência feita para encantar seu paladar!
      </p>
  </div>
    {/* Pratos */}

      <div>
      <h2 className="text-[#F2F4F3] text-5xl text-center pt-20 font-bold">
        Os mais pedidos
      </h2>
      <div className="mx-auto max-w-6xl space-y-20 px-6 py-10">

      <div className="flex flex-col items-center gap-12 md:flex-row border-5 border-[#49111C] rounded-xl p-16 hover:scale-110 transition-all">
        <img src="/assets/sushis.jpg" alt="SUSHI" className="h-80 w-full rounded-lg object-cover md:w-1/2"/>
        <div className="w-full text-center md:w-1/2">
        <h2 className="pb-10 text-7xl font-bold text-[#A9927D]">Sushi</h2>
        <p className="text-xl text-[#F2F4F3]">Nossos sushis são preparados com ingredientes frescos e selecionados, 
          combinando arroz temperado na medida certa, peixes de qualidade e sabores que encantam a cada mordida. Cada peça é elaborada com cuidado e dedicação, 
          unindo tradição japonesa, frescor e uma apresentação especial para proporcionar uma experiência única ao seu paladar.</p>
      </div>
      </div>

      <div className="flex flex-col items-center gap-12 md:flex-row border-5 border-[#49111C] rounded-xl p-16 hover:scale-110 transition-all">
        <div className="order-2 w-full text-center md:order-1 md:w-1/2">
        <h2 className="pb-10 text-7xl font-bold text-[#A9927D]">Hot Roll</h2>
        <p className="text-xl text-[#F2F4F3]">Nosso Hot Roll é a combinação perfeita de sabor e crocância! 
          Preparado com arroz, alga, recheio especial e envolto em uma deliciosa camada crocante, é finalizado com ingredientes que realçam ainda mais seu sabor. 
          Uma opção irresistível, com interior macio e exterior douradinho, perfeita para quem ama uma experiência marcante na culinária japonesa.</p>
      </div>
        <img src="/assets/hot-roll.webp" alt="HOT ROLL" className="order-1 h-80 w-full rounded-lg object-cover md:order-2 md:w-1/2"/>
      </div>
      
      <div className="flex flex-col items-center gap-12 md:flex-row border-5 border-[#49111C] rounded-xl p-16 hover:scale-110 transition-all">
        <img src="/assets/temaki.jpg" alt="TEMAKI" className="h-80 w-full rounded-lg object-cover md:w-1/2"/>
        <div className="w-full text-center md:w-1/2">
        <h2 className="pb-10 text-7xl font-bold text-[#A9927D]">Temaki</h2>
        <p className="text-xl text-[#F2F4F3]">Nosso Temaki é uma deliciosa combinação de sabores e frescor, preparado com arroz temperado, 
          alga crocante e recheios selecionados que tornam cada mordida especial. Feito na hora, com ingredientes frescos e uma combinação irresistível de texturas, 
          é a escolha perfeita para quem busca sabor, qualidade e uma verdadeira experiência da culinária japonesa.</p>
      </div>
      </div>

      <div className="flex flex-col items-center gap-12 md:flex-row border-5 border-[#49111C] rounded-xl p-16 hover:scale-110 transition-all">
        <div className="order-2 w-full text-center md:order-1 md:w-1/2">
        <h2 className="pb-10 text-7xl font-bold text-[#A9927D]">Nigiri</h2>
        <p className="text-xl text-[#F2F4F3]">Nosso Nigiri é a expressão da simplicidade e sofisticação da culinária japonesa. 
          Preparado com uma delicada porção de arroz temperado e coberto com uma fatia selecionada de peixe fresco, 
          cada peça valoriza o sabor natural dos ingredientes e a harmonia perfeita entre textura e frescor. 
          Uma experiência autêntica, feita para apreciar cada detalhe.</p>
      </div>
        <img src="/assets/nigiri.jpg" alt="NIGIRI" className="order-1 h-80 w-full rounded-lg object-cover md:order-2 md:w-1/2"/>
      </div>

      </div>
      </div>

     {/* Bebidas */}

      <div>
      <h2 className="text-[#F2F4F3] text-5xl text-center pt-20 font-bold">
        Bebidas
      </h2>
      <div className="mx-auto max-w-6xl space-y-20 px-6 py-10">

      <div className="flex flex-col items-center gap-12 md:flex-row border-5 border-[#49111C] rounded-xl p-16 hover:scale-110 transition-all">
        <img src="/assets/refrigerante.webp" alt="REFRIGERANTES" className="h-80 w-full rounded-lg object-cover md:w-1/2"/>
        <div className="w-full text-center md:w-1/2">
        <h2 className="pb-10 text-7xl font-bold text-[#A9927D]">Refrigerantes</h2>
        <p className="text-xl text-[#F2F4F3]">Refrescantes e cheios de sabor, os refrigerantes são a escolha perfeita para acompanhar seus pratos favoritos. 
          Com diferentes opções para todos os gostos, 
          deixam sua experiência ainda mais deliciosa e especial.</p>
      </div>
      </div>

      <div className="flex flex-col items-center gap-12 md:flex-row border-5 border-[#49111C] rounded-xl p-16 hover:scale-110 transition-all">
        <div className="order-2 w-full text-center md:order-1 md:w-1/2">
        <h2 className="pb-10 text-7xl font-bold text-[#A9927D]">Sucos</h2>
        <p className="text-xl text-[#F2F4F3]">Leves, saborosos e refrescantes, nossos sucos são ideais para quem busca uma bebida deliciosa para acompanhar sua refeição. 
          Uma combinação perfeita de frescor e sabor para tornar cada momento ainda mais agradável.</p>
      </div>
        <img src="/assets/sucos.jpg" alt="SUCOS" className="order-1 h-80 w-full rounded-lg object-cover md:order-2 md:w-1/2"/>
      </div>
      
      <div className="flex flex-col items-center gap-12 md:flex-row border-5 border-[#49111C] rounded-xl p-16 hover:scale-110 transition-all">
        <img src="/assets/chas-gelados.jpg" alt="CHAS GELADOS" className="h-80 w-full rounded-lg object-cover md:w-1/2"/>
        <div className="w-full text-center md:w-1/2">
        <h2 className="pb-10 text-7xl font-bold text-[#A9927D]">Chás Gelados</h2>
        <p className="text-xl text-[#F2F4F3]">Refrescante e delicado, o chá gelado combina aromas suaves e sabor equilibrado em uma bebida leve e agradável. 
          Perfeito para refrescar o paladar e harmonizar com os sabores especiais da culinária japonesa.</p>
      </div>
      </div>

      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cardapio;