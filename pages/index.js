import React, { useEffect } from 'react'
import Head from 'next/head'

// import Nav from '../components/utils/nav'
import { GiAcrobatic } from "react-icons/gi";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

function Home() {

  useEffect(() => {
    console.log('-- Index')
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <Head>
        <title>🔑 Login | Admin</title>
      </Head>
      <main>
        <div className="container-fluid container-full-height">
          <div className="content flex-center">
            <div>
            </div>
            <Card className="p-5 mt-5 card-fixed-width">
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
                        <Input placeholder="mike@email.com" type="email" class="form-control form-control-lg"/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-0 pr-0 m-0">
                      <FormGroup>
                        <label htmlFor="password">
                          Senha
                        </label>
                        <Input placeholder="5555555" type="password" class="form-control form-control-lg"/>
                      </FormGroup>
                    </Col>
                  </Row>

                </Form>
              </CardBody>
              <CardFooter className="justfy-content mb-3">
                <Button className="btn-fill" color="primary" type="submit">
                  Cadastrar
                  </Button>
                <Button className="btn-fill" color="primary" type="submit">
                  Entrar
                  </Button>
              </CardFooter>
              <b>Esquesceu a senha? <span>Recupere</span></b>
              
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
