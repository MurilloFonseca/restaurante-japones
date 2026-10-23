
const Card = ({ item }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-[#e7e7e7fe] shadow-lg transition duration-300 hover:-translate-y-2">

      <div className="relative">
        <img
          src={item.imagem}
          alt={item.nome}
          className="h-56 w-full object-cover"
        />

      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-[#0A0908]">
          {item.nome}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#8a847f]">
          {item.descricao}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-[#49111C]">
            {item.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <button className="rounded-full bg-[#49111C] px-5 py-3 text-sm text-white hover:bg-[#F2F4F3] hover:text-[#49111C] hover:border hover:border-[#49111C] transition-all duration-700">
            Pedir →
          </button>
        </div>
      </div>

    </div>
  )
}

export default Card;
