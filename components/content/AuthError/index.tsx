import { IoIosKey } from "react-icons/io";

import Btn from '../../utils/Btn'
import PageError from '../../utils/PageError'


function AuthError() {

  function toLogin() {
    window.location.href = '/'
  }

  return (
    <>
      <PageError
        statusCode="401"
        message="Você não tem Acesso Aqui"
        title="Autenticação"
      >
        <Btn action={() => toLogin()} >
          <IoIosKey />
          <span>Entrar no Sistema</span>
        </Btn>
      </PageError>
    </>
  )
}

export default AuthError
