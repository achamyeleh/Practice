import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
type Props = {
  name: string
}
const Header: FC<Props> = (Props) => {
  return (
  <div>
    <p>header</p>
  <ButtonGroup aria-label="Basic example">
  <Button variant='success' size="lg">click here</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="link">Link</Button>
  </ButtonGroup>
    </div>
  )
}
export default Header