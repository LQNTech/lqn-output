import React from 'react';

import { Title, SubTitle, Document } from './documentsStyles';

import Docs1 from '../../assets/docs-1.svg';
import Docs2 from '../../assets/docs-2.svg';
import Docs3 from '../../assets/docs-3.svg';

const UploadDocuments = () => {
  return (
    <React.Fragment>
      <Title>Sube los documentos para enviar al banco</Title>
      <SubTitle>Certificado de ingresos y retenciones</SubTitle>
      <Document>
        <div>
          <input style={{ display: 'none' }} />
          <img src={Docs1} />
          <span>Certificado más reciente</span>
        </div>
        <button>
          <i className="fas fa-arrow-up"></i>
        </button>
      </Document>
      <SubTitle>Carta laboral </SubTitle>
      <Document>
        <div>
          <input style={{ display: 'none' }} />
          <img src={Docs2} />
          <span>Firmada, con fecha no mayor a 30 días</span>
        </div>
        <button>
          <i className="fas fa-arrow-up"></i>
        </button>
      </Document>
      <SubTitle>Comprobantes de nómina recientes</SubTitle>
      <Document>
        <div>
          <input style={{ display: 'none' }} />
          <img src={Docs3} />
          <span>Comprobante 1</span>
        </div>
        <button>
          <i className="fas fa-arrow-up"></i>
        </button>
      </Document>
      <Document>
        <div>
          <input style={{ display: 'none' }} />
          <img src={Docs3} />
          <span>Comprobante 2</span>
        </div>
        <button>
          <i className="fas fa-arrow-up"></i>
        </button>
      </Document>
      <Document>
        <div>
          <input style={{ display: 'none' }} />
          <img src={Docs3} />
          <span>Comprobante 3</span>
        </div>
        <button>
          <i className="fas fa-arrow-up"></i>
        </button>
      </Document>
    </React.Fragment>
  );
};

export default UploadDocuments;
