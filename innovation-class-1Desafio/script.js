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

produtos.forEach(produto => {
    container.innerHTML += `
    <div class="swiper-slide h-auto">
        <div class="flex flex-col p-[15px] border border-gray-200 rounded-[8px] hover:shadow-lg transition-shadow bg-white relative group">
            <span class="absolute top-[8px] left-[8px] bg-[#00264E] text-[#FFFF] text-[10px] text-center font-bold px-[6px] py-[2px] rounded-[4px] z-10 ">
                ${produto.tag}
            </span>

            <div class="w-full aspect-square mb-[15px] flex items-center justify-center overflow-hidden">
                <img src="${produto.img}" alt="${produto.nome}" class="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300">
            </div>

            <h3 class="text-[12px] text-[#303030] leading-snug mb-[10px] line-clamp-2">
                ${produto.nome}
            </h3>

            <div class="flex flex-col mt-auto mb-[15px]">
                <span class="text-[11px] text-[#303030] line-through">R$${produto.precoAntes}</span>

                <div class="flex items-center gap-[5px]">
                    <span class="text-[16px] font-bold text-black">R$${produto.precoDepois}</span>
                    <span class="bg-[#5EC0BE] text-white text-[10px] font-bold px-[5px] py-[2px] rounded-[4px] underline">${produto.desconto}</span>
                </div>

                <span class="text-[11px] text-[#303030] mt-[2px]">
                    Ou em até <strong class="text-black font-semibold">${produto.parcela}</strong>
                </span>
            </div>

            <button class="w-full bg-[#005cff] hover:bg-[#004cd2] text-white font-semibold text-[14px] py-[8px] rounded-[6px] transition-colors cursor-pointer">
                Comprar
            </button>
        </div>
    </div>
    `
    container2.innerHTML+= `
    <div class="swiper-slide h-auto">
        <div class="flex flex-col p-[15px] border border-gray-200 rounded-[8px] hover:shadow-lg transition-shadow bg-white relative group">
            <span class="absolute top-[8px] left-[8px] bg-[#00264E] text-[#FFFF] text-[10px] text-center font-bold px-[6px] py-[2px] rounded-[4px] z-10 ">
                ${produto.tag}
            </span>

            <div class="w-full aspect-square mb-[15px] flex items-center justify-center overflow-hidden">
                <img src="${produto.img}" alt="${produto.nome}" class="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300">
            </div>

            <h3 class="text-[12px] text-[#303030] leading-snug mb-[10px] line-clamp-2">
                ${produto.nome}
            </h3>

            <div class="flex flex-col mt-auto mb-[15px]">
                <span class="text-[11px] text-[#303030] line-through">R$${produto.precoAntes}</span>

                <div class="flex items-center gap-[5px]">
                    <span class="text-[16px] font-bold text-black">R$${produto.precoDepois}</span>
                    <span class="bg-[#5EC0BE] text-white text-[10px] font-bold px-[5px] py-[2px] rounded-[4px] underline">${produto.desconto}</span>
                </div>

                <span class="text-[11px] text-[#303030] mt-[2px]">
                    Ou em até <strong class="text-black font-semibold">${produto.parcela}</strong>
                </span>
            </div>

            <button class="w-full bg-[#005cff] hover:bg-[#004cd2] text-white font-semibold text-[14px] py-[8px] rounded-[6px] transition-colors cursor-pointer">
                Comprar
            </button>
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