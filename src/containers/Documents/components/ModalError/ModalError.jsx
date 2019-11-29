import React, { useState, useEffect } from 'react';

import { Container, Content, Text, Pink, Button } from './modalErrorStyles';

import imgDocs from '../../../../assets/document.svg';

const ModalError = React.forwardRef(({ docsRejected }, ref) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (docsRejected.length > true) {
        setShow(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [docsRejected]);

  const handleClick = () => {
    setShow(false);
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <Container style={{ display: show ? 'block' : 'none' }}>
      <Content>
        <img src={imgDocs} />
        <Text>
          Debes <Pink>corregir</Pink> los siguientes documentos para iniciar el
          estudio de crédito
        </Text>
        {docsRejected.map(({ documentBank }, i) => (
          <div>
            {i + 1}. {documentBank.name}
          </div>
        ))}
        <Button onClick={handleClick}>Ir a corregir</Button>
      </Content>
    </Container>
  );
});

export default ModalError;