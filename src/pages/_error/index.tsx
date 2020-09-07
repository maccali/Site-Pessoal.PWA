import { AiOutlineArrowLeft } from 'react-icons/ai';
import Button from '../../components/utils/button';
import ErrorPage from '../../components/utils/errorpage';

type ErrorFace = {
  statusCode: number;
};

function Error({ statusCode }: ErrorFace) {
  let message = '';

  if (statusCode == 404) {
    message = 'Esta página não existe';
  } else {
    message = 'Algum problema ocorreu';
  }

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <ErrorPage statusCode={statusCode} message={message} title="Erro">
        <Button title="Go Back" action={() => goBack()}>
          <AiOutlineArrowLeft />
          <span>Voltar</span>
        </Button>
      </ErrorPage>
    </>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
