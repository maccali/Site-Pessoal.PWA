import React from 'react'
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

function Home() {

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
                <h2 className="title">Login</h2>
              </CardHeader>
              <CardBody className="pb-0">
                <Form>
                  <Row>
                    <Col className="pl-0 pr-0 m-0">
                      <FormGroup>
                        <label htmlFor="email">
                          Email
                        </label>
                        <Input placeholder="mike@email.com" type="email" class="form-control form-control-lg" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-0 pr-0 m-0">
                      <FormGroup>
                        <label htmlFor="password">
                          Senha
                        </label>
                        <Input placeholder="5555555" type="password" class="form-control form-control-lg" />
                      </FormGroup>
                    </Col>
                  </Row>

                </Form>
              </CardBody>
              <CardFooter className="justfy-content mb-3">
                <Btn href='/registrar' textOnly>
                  <span>Cadastrar</span>
                </Btn>
                <Btn href='/dashboard' >
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
