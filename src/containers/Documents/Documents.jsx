import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import documentsQuery from './documentsQuery';

import { resolveNodes } from '../../services/Helper';

import SelectedBank from '../../components/SelectedBank/SelectedBank';
import Document from './components/Document/Document';
import ModalError from './components/ModalError/ModalError';
import { Content, Title, SubTitle, Button, TitleDocument } from './documentsStyles';

const Documents = ({ leadCode }) => {
  const refReject = useRef(null);
  const history = useHistory();
  const { loading, data } = useQuery(documentsQuery, {
    variables: { code: leadCode }
  });

  const handleClick = () => {
    refReject.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  if (loading) return null;

  const documents = resolveNodes(data.allDocumentsLeadCredit);
  const docsPending = documents.filter(
    doc => !doc.agreed && !doc.rejected && !doc.onRevision
  );
  const docsRevision = documents.filter(doc => doc.onRevision);
  const docsAgreed = documents.filter(doc => doc.agreed);
  const docsRejected = documents.filter(doc => doc.rejected);

  return (
    <React.Fragment>
      <SelectedBank />
      <Title>Sube los documentos para enviar al banco</Title>
      <TitleDocument>*Los documentos deben estar en formato PDF y deben tener un tamaño máximo de hasta 50Mb</TitleDocument>
      {docsPending.length > 0 && (
        <SubTitle>Documentos pendientes ({docsPending.length})</SubTitle>
      )}
      {docsPending.map(document => (
        <Document key={document.id} document={document} />
      ))}
      {docsRevision.length > 0 && (
        <SubTitle>Documentos en revisión ({docsRevision.length})</SubTitle>
      )}
      {docsRevision.map(document => (
        <Document key={document.id} document={document} />
      ))}
      {docsAgreed.length > 0 && (
        <SubTitle>Documentos aceptados ({docsAgreed.length})</SubTitle>
      )}
      {docsAgreed.map(document => (
        <Document key={document.id} document={document} />
      ))}
      {docsRejected.length > 0 && (
        <SubTitle ref={refReject}>
          Documentos por corregir ({docsRejected.length})
        </SubTitle>
      )}
      {docsRejected.map(document => (
        <Document key={document.id} document={document} />
      ))}
      {docsAgreed.length === documents.length ? (
        <Content>
          <Button
            onClick={() =>
              history.push({
                pathname: '/success',
                search: global.location.search
              })
            }
          >
            Enviar documentos
          </Button>
        </Content>
      ) : null}
      <ModalError docsRejected={docsRejected} handleClick={handleClick} />
    </React.Fragment>
  );
};

export default Documents;
