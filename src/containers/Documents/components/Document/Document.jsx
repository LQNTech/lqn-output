import React, { useState } from 'react';
import { Button, Upload } from 'antd';

import { useMutation } from '@apollo/react-hooks';
import documentMutation from './documentMutation';
import documentsQuery from '../../documentsQuery';

import {
  fileExtension,
  generateFileName,
  validateGQLResponse
} from '../../../../services/Helper';

import { Container, SubTitle, File, Content } from './documentStyles';

import Docs1 from '../../../../assets/docs-1.svg';
import Docs2 from '../../../../assets/docs-2.svg';
import Docs3 from '../../../../assets/docs-3.svg';

const Document = ({
  document: { id, file, agreed, rejected, onRevision, documentBank }
}) => {
  const [uploading, setUploading] = useState(false);
  const [updateDocumentLead] = useMutation(documentMutation);
  const icon = agreed ? Docs3 : rejected ? Docs2 : Docs1;

  const upload = () => setUploading(!uploading);

  const updateLeadFile = async fileId => {
    const params = new URLSearchParams(global.location.search);

    try {
      const result = await updateDocumentLead({
        variables: { id, fileId },
        refetchQueries: [
          { query: documentsQuery, variables: { code: params.get('code') } }
        ]
      });

      const { updateDocumentLeadCredit } = result.data;
      validateGQLResponse(
        updateDocumentLeadCredit,
        () => console.log('fails'),
        () => upload()
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  const uploadFile = async file => {
    try {
      upload();
      const name = `${generateFileName()}.${fileExtension(file.name)}`;
      const formData = new FormData();
      formData.append('content_type', 'documents');
      formData.append('name', name);
      formData.append('file', file);
      const options = {
        method: 'POST',
        body: formData,
        timeout: 4000
      };
      const uploadResult = await fetch(
        process.env.REACT_APP_FILE_ENDPOINT,
        options
      );
      const { id, imageUrl } = await uploadResult.json();
      updateLeadFile(id, imageUrl);
    } catch (e) {
      console.log(e.message);
    }
  };

  const customRequest = ({ file }) => {
    uploadFile(file);
    return {
      abort() {
        console.log('aborted!');
      }
    };
  };

  return (
    <Container>
      <SubTitle>{documentBank.name}</SubTitle>
      <File>
        <Content>
          <img src={icon} />
          <span>{documentBank.description}</span>
        </Content>
        {(!file ||
          rejected ||
          (file && !agreed && !onRevision && !rejected)) && (
          <Upload
            customRequest={customRequest}
            showUploadList={false}
            accept=".jpeg,.jpg,.png,application/pdf"
          >
            <Button className="radius" loading={uploading} icon="arrow-up" />
          </Upload>
        )}
        {file && agreed && <Button className="radius" icon="check" />}
      </File>
    </Container>
  );
};

export default Document;
