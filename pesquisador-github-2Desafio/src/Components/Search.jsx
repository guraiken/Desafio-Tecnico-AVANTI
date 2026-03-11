import { useState } from "react";
import './Search.css'

//desestruturação de props, para pegar a função onSearch que é passada lá no App.jsx

export const Search = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    //funcionando como gatilho e tratamento com o trim (e.preventDefault pra evitar reload)
    const submitAction = (e) => {
        e.preventDefault();
        if(searchInput.trim()) {
            onSearch(searchInput)
    }
}

  return (
    <form className="search-container" onSubmit={submitAction}>
      <input 
        type="text" 
        placeholder="Digite um usuário do Github"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="search-button">
      <button type="submit" >
        <img src="./svgs/lupa.svg"/>
      </button>
      </div>
    </form>
  )
}
