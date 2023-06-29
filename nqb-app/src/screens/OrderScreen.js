import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {ListGroup, Row, Col, Image, Card, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {PayPalButton} from 'react-paypal-button-v2'
import Loader from '../components/Loader'

function OrderScreen() {
  const {id} = useParams()
  const navigate = useNavigate()

  const [sdkReady, setSdkReady] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const addPayPalScript = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      'https://www.paypal.com/sdk/js?client-id=Aayw5Tw5cyltDdhr9ZuNzUPPY0Affp3D1EUHoWXSJiJmD9Sq7OuIxYEEwWqWkNXx_8lMwqVVYMjoVgmo'
    script.async = true
    script.onload = () => {
      setSdkReady(true)
    }
    document.body.appendChild(script)
  }

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [navigate, userInfo])

  const successPaymentHandler = () => {
    console.log('testing payment')
  }

  return (
    <div>
      <h1>No of Items: 40</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Delivery Details</h2>
              <p>
                <strong>Name: test user</strong>
              </p>
              <p>
                <strong>
                  <a
                    href={`mailto:test@gmail.com`}
                    className='list-group-item-no-decoration'
                  >
                    Email: test@gmail.com
                  </a>
                </strong>
              </p>
              <p>
                Shipping Address: 'test shipping address' + ', ' + 'test city' +
                ' ' + 'test postal code' + ', ' + 'test country' + '.'
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment</h2>
              <p>Option: PayPal</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Items: </Col>
                  <Col md={4}>${5000}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping: </Col>
                  <Col md={4}>${40}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax: </Col>
                  <Col md={4}>${60}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total: </Col>
                  <Col md={4}>${600}</Col>
                </Row>
              </ListGroup.Item>

              {!sdkReady ? (
                <Loader />
              ) : (
                <PayPalButton amount={600} onSuccess={successPaymentHandler} />
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default OrderScreen
