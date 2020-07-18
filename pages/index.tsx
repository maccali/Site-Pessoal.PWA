import React, { useState } from 'react'
import * as yup from "yup";
import YupHelper from '../helpers/YupHelper'
import ErrorHelper from '../helpers/ErrorHelper'


import api from '../services/api'
import Auth from '../helpers/Auth'

import Head from 'next/head'
import Btn from '../components/utils/Btn'


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";



const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('O valor digitado deve ser um Email')
    .required('Digite um email'),
  password: yup
    .string()
    .required('Digite uma senha'),
});


function Home() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [emailErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');

  const [serverError, setServerError] = useState<boolean>(false);
  const [serverErrorMsg, setServerErrorMsg] = useState<string>('');

  const [load, setLoad] = useState<boolean>(false);

  async function sendRequest(data: any) {
    setLoad(true)
    api.post('/api/auth/login', data)
      .then((response: any) => {
        if (response.status === 200) {
          const { access_token, expires_in } = response.data

          Auth.saveToken(access_token, String(expires_in))

          console.log(Auth.getToken())

          window.location.href = '/dashboard'

        }
        setLoad(false)
      }).catch((error) => {

        var solve = ErrorHelper.interpreter(error)
        setServerErrorMsg('Ocorreu um erro tente novamente')
        
        if (solve) {
          setServerErrorMsg(solve)
        }
        
        if (error.status === 401) {
          setServerErrorMsg('Email ou senha errados')
        }
        setServerError(true)
        setLoad(false)
      })
  }

  function handleSubmit() {

    LoginSchema.validate({
      email,
      password,
    }, { abortEarly: false })
      .then((data) => {
        console.log('😘 Dados válidos')
        sendRequest(data)
      })
      .catch(function (err) {
        console.log('😥 Dados inválidos')

        var errors = YupHelper.errorTreatment(err)

        errors.map((item) => {
          if (item.field === "email") {
            setEmailError(true)
            setEmailErrorMsg(item.message)
          }
          if (item.field === "password") {
            setPasswordError(true)
            setPasswordErrorMsg(item.message)
          }
        })
      });
  }

  return (
    <>
      <Head>
        <title>🔑 Login | Admin</title>
      </Head>
      <main>
        <div className="container-fluid container-full-height">
          <div className="content flex-center">
            <div>
            </div>
            <Card className="p-4 card-fixed-width">
              <CardHeader>
                <h3 className="title">Login</h3>
              </CardHeader>
              <CardBody className="pb-0">
                <Form>
                  <Row>
                    <Col className="pl-0 pr-0 m-0">
                      <FormGroup>
                        <label htmlFor="email">
                          Email
                        </label>
                        <Input
                          value={email}
                          onChange={(e) => { setEmail(e.target.value) }}
                          placeholder="Digite seu email"
                          type="email"
                          name="email"
                          className="form-control form-control-lg"
                        />
                        {(emailError ? <p className="text-danger">{emailErrorMsg}</p> : '')}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-0 pr-0 m-0">
                      <FormGroup>
                        <label htmlFor="password">
                          Senha
                        </label>
                        <Input
                          value={password}
                          onChange={(e) => { setPassword(e.target.value) }}
                          placeholder="Digite sua senha"
                          type="password"
                          name="password"
                          className="form-control form-control-lg"
                        />

                        {(passwordError ? <p className="text-danger">{passwordErrorMsg}</p> : '')}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {serverError ? <p className="text-danger">{serverErrorMsg}</p> : ''}
                  </Row>

                </Form>
              </CardBody>
              <CardFooter className="justfy-content mb-3">
                <Btn href='/registrar' textOnly>
                  <span>Cadastrar</span>
                </Btn>
                <Btn action={() => handleSubmit()} load={load} >
                  <p>👻</p>
                  <span>Entrar</span>
                </Btn>
              </CardFooter>
              <span>Esqueceu a senha?
                <Btn href='/recuperar' noStyle>
                  <b className="ml-1">Recupere</b>
                </Btn>
              </span>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
