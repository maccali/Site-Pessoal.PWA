import React, { useState } from 'react'
import * as yup from "yup";
import YupHelper from '../helpers/YupHelper'

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

  const [email, setEmail] = useState<string>('admin@gmail.com');
  const [password, setPassword] = useState<string>('password');

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [emailErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');


  function handleSubmit() {

    LoginSchema.validate({
      email,
      password,
    }, { abortEarly: false }).then((data) => {
      console.log('😘 Dados válidos')
      console.log(data)
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
                          placeholder="mike@email.com"
                          type="email"
                          name="email"
                          className="form-control form-control-lg"
                        />
                        {(emailError ? emailErrorMsg : '')}
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
                          placeholder="5555555"
                          type="password"
                          name="password"
                          className="form-control form-control-lg"
                        />

                        {(passwordError ? passwordErrorMsg : '')}
                      </FormGroup>
                    </Col>
                  </Row>

                </Form>
              </CardBody>
              <CardFooter className="justfy-content mb-3">
                <Btn href='/registrar' textOnly>
                  <span>Cadastrar</span>
                </Btn>
                <Btn action={() => handleSubmit()} >
                  <p>👻</p>
                  <span>Entrar</span>
                </Btn>
              </CardFooter>
              <span>Esqueceu a senha?
                <Btn href='/recuperar' noStyle>
                  <b>Recupere</b>
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
