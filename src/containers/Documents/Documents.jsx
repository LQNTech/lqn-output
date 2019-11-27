import React from 'react';
import { useHistory } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import documentsQuery from './documentsQuery';

import { resolveNodes } from '../../services/Helper';

import Document from './components/Document/Document';
import ModalError from './components/ModalError/ModalError';
import { Content, Title, SubTitle, Button } from './documentsStyles';

const Documents = ({ leadCode }) => {
  const history = useHistory();
  const { loading, data } = useQuery(documentsQuery, {
    variables: { code: leadCode }
  });
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
      <Content>
        <Title>Sube los documentos para enviar al banco</Title>
        {docsAgreed.length === documents.length ? (
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
        ) : null}
      </Content>
      <SubTitle>Documentos pendientes ({docsPending.length})</SubTitle>
      {docsPending.map(document => (
        <Document key={document.id} document={document} />
      ))}
      <SubTitle>Documentos en revisión ({docsRevision.length})</SubTitle>
      {docsRevision.map(document => (
        <Document key={document.id} document={document} />
      ))}
      <SubTitle>Documentos cargados ({docsAgreed.length})</SubTitle>
      {docsAgreed.map(document => (
        <Document key={document.id} document={document} />
      ))}
      <SubTitle>Documentos por corregir ({docsRejected.length})</SubTitle>
      {docsRejected.map(document => (
        <Document key={document.id} document={document} />
      ))}
      <ModalError docsRejected={docsRejected} />
    </React.Fragment>
  );
};

export default Documents;
