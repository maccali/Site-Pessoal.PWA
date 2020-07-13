import React from 'react'
import Head from 'next/head'
import Btn from '../../components/utils/Btn'

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
        <title>🔑 Recuperar</title>
      </Head>
      <main>
        <div className="container-fluid container-full-height">
          <div className="content flex-center">
            <div>
            </div>
            <Card className="p-4 card-fixed-width">
              <CardHeader>
                <h3 className="title">Recuperar Senha</h3>
              </CardHeader>
              <CardBody className="pb-0">
                <Form>
                  <Row>
                    <Col className="pl-0 pr-0 m-0">
                      <FormGroup>
                        <label htmlFor="email">
                          Email
                        </label>
                        <Input placeholder="Digite o email" type="email" class="form-control form-control-lg" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="justfy-content mb-3">
                <Btn href='/' textOnly>
                  <span>Voltar</span>
                </Btn>
                <Btn href='/dashboard' >
                  <p>💌</p>
                  <span>Enviar</span>
                </Btn>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
