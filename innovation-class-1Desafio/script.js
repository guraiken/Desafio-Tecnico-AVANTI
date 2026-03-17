const products = [
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
    {tag: "NOVO", nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", precoAntes: "100,00", precoDepois: "79,90", parcela: "10x de R$ 7,90", desconto: "10% OFF", img: "./assets/images/homem-mock.png"},
]

const mobile = {
    arrowInstitucional: document.getElementById("arrow-mobile-1"),
    arrowCentral: document.getElementById("arrow-mobile-2"),
    arrowAtendimento: document.getElementById("arrow-mobile-3"),
    containerInstitucional: document.getElementById("mobile-container-institucional"),
    containerCentral: document.getElementById("mobile-container-central"),
    containerAtendimento: document.getElementById("mobile-container-atendimento"),

    mobileDepartment1: document.getElementById('mobile-department-1'),
    mobileDepartment2: document.getElementById('mobile-department-2'),
    mobileDepartment3: document.getElementById('mobile-department-3'),
    arrowDepartment1: document.getElementById('arrow-dept-1'),
    arrowDepartment2: document.getElementById('arrow-dept-2'),
    arrowDepartment3: document.getElementById('arrow-dept-3')
}

//cards para o swiper
const container = document.getElementById("card-container");
const container2 = document.getElementById("card-container-2");

// parte de suporte do footer
const magnifier = document.getElementById("search-event")
const searchBar = document.getElementById("search-bar")
const searchResult = document.getElementById("search-result")
const containerDisplay = document.getElementById("search-result-container")

// parte da navbar e menus desktop
const dropMenu = document.getElementById("drop-menu")
const dropMenuContainer = document.getElementById("drop-menu-container")
const departments = document.querySelectorAll('.department')
const navDepartment = document.querySelectorAll('.nav-department')
const categoryMenu = document.getElementById('category-menu')
const departmentMenu = document.getElementById('simple-menu')

start()

function createCard(produto) {
    return `
    <div class="swiper-slide h-auto">
        <div class="flex flex-col min-h-[365px] md:min-h-[400px] p-[8px] border border-[#dddddd] rounded-[8px] hover:shadow-lg transition-shadow bg-white relative group">
            <span class="absolute top-[8px] left-[8px] bg-[#00264E] text-white md:text-[10px] text-center font-regular px-[6px] py-[2px] rounded-[4px] z-10 text-[#303030]">
                ${produto.tag}
            </span>

            <div class="w-full aspect-square mb-[15px] flex items-center justify-center overflow-hidden">
                <img src="${produto.img}" alt="${produto.nome}" class="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300">
            </div>

            <h3 class="text-[14px] text-[#303030] leading-snug mb-[10px]">
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

                    <span class="bg-[#5EC0BE] text-white text-[11px] font-bold ml-2 mb-2 px-2 py-[4.5px]  md:m-0 md:px-[10px] md:py-[6px] rounded-[4px] leading-none md:underline self-center">
                        ${produto.desconto}
                    </span>
                </div>

                <span class="block text-xs text-[#303030] mt-[6px]">
                    Ou em até <strong class="text-[#303030] font-bold">${produto.parcela}</strong>
                </span>
            </div>

            <button class="w-full mt-auto bg-[#005cff] hover:bg-[#004cd2] text-white font-bold text-[14px] py-[8px] rounded-[8px] transition-colors cursor-pointer">
                Comprar
            </button>
        </div>
    </div>
    `;
}

function start() {
    mobileArrowToggle(mobile.arrowInstitucional, mobile.containerInstitucional)
    mobileArrowToggle(mobile.arrowCentral, mobile.containerCentral)
    mobileArrowToggle(mobile.arrowAtendimento, mobile.containerAtendimento)
    mobileArrowToggle(mobile.arrowDepartment1, mobile.mobileDepartment1)
    mobileArrowToggle(mobile.arrowDepartment2, mobile.mobileDepartment2)
    mobileArrowToggle(mobile.arrowDepartment3, mobile.mobileDepartment3)
}

function closeMobileContainers(){
    mobile.containerInstitucional.style.display = 'none'
    mobile.containerCentral.style.display = 'none'
    mobile.containerAtendimento.style.display = 'none'
    mobile.mobileDepartment1.style.display = 'none'
    mobile.mobileDepartment2.style.display = 'none'
    mobile.mobileDepartment3.style.display = 'none'
}


function mobileArrowToggle(arrow, container){
    arrow.addEventListener("click", () => {  
        let isOpen = container.style.display === 'flex'

        closeMobileContainers()
        if (!isOpen) {
            container.style.display = 'flex'
    }
    })    
}

function closeAllMenus() {
    categoryMenu.classList.add('hidden');
    departmentMenu.classList.add('hidden');
    dropMenuContainer.classList.add('hidden');
    categoryMenu.style.display = ''; 
    departmentMenu.style.display = '';

    navDepartment.forEach(d => {
        d.classList.remove("text-[#005cff]");
        d.classList.add("text-[#000000]"); 
    });
    
    departments.forEach(d => {
        d.classList.remove("text-[#005cff]");
    });
}

//resumo da função: muda o tipo de display pra ficar visivel, seta o innerHTML como "você buscou por:" e aí sim concatena. Pra evitar concatenação infinita da pesquisa conforme clica
function fakeSearch(){
    containerDisplay.style.display = "flex"
    searchResult.innerHTML = "Você buscou por: "
    searchResult.innerHTML += `${searchBar.value}`
    searchBar.value = ""
}

//esse busca pela lupa
magnifier.addEventListener('click', fakeSearch)

//esse escuta o enter quando você digita
searchBar.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        if(searchBar.value.trim() === ""){
            return
        }else {
            closeAllMenus()
            fakeSearch()
        }
    }
})

products.forEach(produto => {
    container.innerHTML += createCard(produto)
    container2.innerHTML+= createCard(produto)
})

const isMobile = () => window.innerWidth < 1024;
const isDesktop = () => window.innerWidth > 1024

// menu da navbar mobile
const burguerButtton = document.getElementById('burguer-button-mobile')
const mobileDepartment = document.getElementById('mobile-department-container')


burguerButtton.addEventListener('click',  ()=> {
    if(isDesktop()) return
    
    burguerButtton.classList.add('animate-[burguerToggle_0.3s_ease-out]')
    mobileDepartment.classList.toggle('hidden')
    closeMobileContainers()

    burguerButtton.addEventListener('animationend', () => {
        burguerButtton.classList.remove('animate-[burguerToggle_0.3s_ease-out]');
    }, { once: true });
})

// ---------------------------------------------------------------------------------------

// escutas de evento dos menus desktop
dropMenu.addEventListener("mouseenter", () => {
    if(isMobile()) return
    
    closeAllMenus(); 
    dropMenuContainer.classList.remove("hidden");
});

departments.forEach(department => {
    department.addEventListener("mouseenter", () => {
        if(isMobile()) return
        departments.forEach(d => {
            d.classList.remove("text-[#005cff]");
            d.classList.add("text-[#303030]"); 
        });
        department.classList.remove("text-[#303030]");
        department.classList.add("text-[#005cff]");

        categoryMenu.classList.remove("hidden");
    });
});

navDepartment.forEach(department => {
    department.addEventListener("mouseenter", () => {
        if(isMobile()) return

        closeAllMenus();
        departmentMenu.classList.remove('hidden');
        navDepartment.forEach(d => {
            d.classList.remove("text-[#005cff]");
            d.classList.add("text-[#000000]"); 
        });
        department.classList.add("text-[#005cff]");
        department.classList.remove("text-[#000000]");
    });
});
// ---------------------------------------------------------------------------------------

dropMenuContainer.addEventListener("mouseleave", closeAllMenus);
departmentMenu.addEventListener("mouseleave", closeAllMenus);

const swiper1 = new Swiper('.swiper-1', {
  slidesPerView: 2,
  slidesPerGroup: 3,
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