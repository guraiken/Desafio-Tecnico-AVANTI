const produtos = [
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
]

const container = document.getElementById("card-container");
const container2 = document.getElementById("card-container-2");
const searchBar = document.getElementById("search-bar")

searchBar.addEventListener('click', )


produtos.forEach(produto => {
    container.innerHTML += `
    <div class="swiper-slide h-auto">
        <div class="flex flex-col h-full p-[8px] border border-[#dddddd] rounded-[8px] hover:shadow-lg transition-shadow bg-white relative group">
            <span class="absolute top-[8px] left-[8px] bg-[#00264E] text-[#FFFF] text-[10px] text-center font-bold px-[6px] py-[2px] rounded-[4px] z-10">
                ${produto.tag}
            </span>

            <div class="w-full aspect-square mb-[15px] flex items-center justify-center overflow-hidden">
                <img src="${produto.img}" alt="${produto.nome}" class="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300">
            </div>

            <h3 class="text-[12px] text-[#303030] leading-snug mb-[10px] line-clamp-2">
                ${produto.nome}
            </h3>
            <div class="mb-[15px]">
                <div class="flex items-center gap-[6px]">
                    <div class="flex flex-col">
                        <span class="text-[11px] text-[#303030] line-through leading-none">
                            R$${produto.precoAntes}
                        </span>

                        <span class="text-[16px] font-bold text-black leading-none mt-[4px]">
                            R$${produto.precoDepois}
                        </span>
                    </div>

                    <span class="bg-[#5EC0BE] text-white text-[11px] font-bold px-[6px] py-[4px] rounded-[4px] leading-none underline self-center">
                        ${produto.desconto}
                    </span>
                </div>
                <span class="block text-[11px] text-[#303030] mt-[6px]">
                    Ou em até <strong class="text-black font-semibold">${produto.parcela}</strong>
                </span>
            </div>
            <button class="w-full mt-auto bg-[#005cff] hover:bg-[#004cd2] text-white font-bold text-[14px] py-[8px] rounded-[8px] transition-colors cursor-pointer"> Comprar </button>
        </div>
    </div>
    `
    container2.innerHTML+= `
    <div class="swiper-slide h-auto">
        <div class="flex flex-col h-full p-[8px] border border-[#dddddd] rounded-[8px] hover:shadow-lg transition-shadow bg-white relative group">
            <span class="absolute top-[8px] left-[8px] bg-[#00264E] text-[#FFFF] text-[10px] text-center font-bold px-[6px] py-[2px] rounded-[4px] z-10">
                ${produto.tag}
            </span>

            <div class="w-full aspect-square mb-[15px] flex items-center justify-center overflow-hidden">
                <img src="${produto.img}" alt="${produto.nome}" class="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300">
            </div>

            <h3 class="text-[12px] text-[#303030] leading-snug mb-[10px] line-clamp-2">
                ${produto.nome}
            </h3>
            <div class="mb-[15px]">
                <div class="flex items-center gap-[6px]">
                    <div class="flex flex-col">
                        <span class="text-[11px] text-[#303030] line-through leading-none">
                            R$${produto.precoAntes}
                        </span>

                        <span class="text-[16px] font-bold text-black leading-none mt-[4px]">
                            R$${produto.precoDepois}
                        </span>
                    </div>

                    <span class="bg-[#5EC0BE] text-white text-[11px] font-bold px-[6px] py-[4px] rounded-[4px] leading-none underline self-center">
                        ${produto.desconto}
                    </span>
                </div>
                <span class="block text-[11px] text-[#303030] mt-[6px]">
                    Ou em até <strong class="text-black font-semibold">${produto.parcela}</strong>
                </span>
            </div>
            <button class="w-full mt-auto bg-[#005cff] hover:bg-[#004cd2] text-white font-bold text-[14px] py-[8px] rounded-[8px] transition-colors cursor-pointer"> Comprar </button>
        </div>
    </div>
    `
})

const swiper1 = new Swiper('.swiper-1', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 10,
  loop: true,

  pagination: {
    el: '.pagination-1',
    clickable: true,
  },

  navigation: {
    nextEl: '.next-1',
    prevEl: '.prev-1',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 3
    }
  }
});

const swiper2 = new Swiper('.swiper-2', {
  slidesPerView: 2,
  slidesPerGroup: 3,
  spaceBetween: 10,
  loop: true,

  pagination: {
    el: '.pagination-2',
    clickable: true,
  },

  navigation: {
    nextEl: '.next-2',
    prevEl: '.prev-2',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    }
  }
});