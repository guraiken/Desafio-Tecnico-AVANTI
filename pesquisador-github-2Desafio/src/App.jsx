import { useState } from 'react';
import './App.css'
import { Search } from './Components/Search'

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const userSearch = async (username) => {
    setError(false);
    setUserInfo(null)
    setLoading(true)

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        setError(true)
        setLoading(false);
        return;
      }
      //verifica se o status deu 200 e envia o res como json
      const data = await res.json();
      setUserInfo(data);
      setLoading(false);
    }
    catch (error) {
      //dois usestates 1 para ativar mensagem de erro e outro pra desativar animação de loading, error pra debug
      setError(true);
      setLoading(false);
      console.error('Erro ao buscar usuário:', error);
    }
  }

  return (
    <main className="app-container">
      <img src="/svgs/dot-pattern.png" alt="" className='dots-background' />
      <section className='github-search-container'>
        <div className='github-title'>
          <img src="./images/perfil-github.png" alt=""/>
        </div>
        {/* componente de pesquisa pegando a função com prop */}
        <div className='search-block'>
          <Search onSearch={userSearch}/>
        </div>
        
        {/* loading basico com condicional e usestates */}
        {loading && (
          <div className='loading-spinner'></div>
        )}
        
        {error && (
          <div className='error-card animation-in'>
            <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
            <p>Tente novamente</p>
          </div>
        )}

        {userInfo && (
          <div className='user-card animation-in'>
            <img src={userInfo.avatar_url} alt={`${userInfo.login}'s avatar`} className='avatar' />
            
            <div className='user-info'>
              <h2>{userInfo.name || userInfo.login}</h2>
              <p>{userInfo.bio || 'Este usuário não possui uma bio.'}</p>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
