import React from 'react'

const Login = () => {
  return (
   <div className="container">
    <form>
        <p></p>
        <h1>Lost Plushy</h1>
        
        <div>
            <p>Email</p>
        <input type="email"/>
        </div>
        <div>
            <p>Senha</p>
        <input type="password" />
        </div>
        <button>Logar</button>
        <div>
            <p>Sem um Login? Cadastre-se!</p>
            <button>Logar Colaborador</button>
        </div>
    </form>
   </div>
  )
}

export default Login
