import { AiOutlineArrowLeft } from 'react-icons/ai';
import PageError from '../../components/utils/pageerror';
import Btn from '../../components/utils/button'

type ErrorFace = {
  statusCode: number
}

function Error({ statusCode }: ErrorFace) {

  var message = ''

  if (statusCode == 404) {
    message = 'This page does not exist'
  } else {
    message = 'Some error occurred'
  }

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <PageError
        statusCode={statusCode}
        message={message}
        title="Erro"
      >
        <Btn title="Go Back" action={() => goBack()} >
          <AiOutlineArrowLeft />
          <span>Go Back</span>
        </Btn>
      </PageError>
    </>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
