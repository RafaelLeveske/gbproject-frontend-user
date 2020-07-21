// import React from 'react';

// import Dropzone from 'react-dropzone';

// // import { DropContainer, UploadMessage } from './styles';

// export default function Upload() {
//   async function renderDragMessage(isDragActive, isDragReject) {
//     if (!isDragActive) {
//       return <UploadMessage>Solte a sua imagem aqui</UploadMessage>;
//     }
//     if (isDragReject) {
//       return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
//     }
//     return (
//       <UploadMessage type="success">Solte a sua imagem aqui</UploadMessage>
//     );
//   }

//   const { onUpload } = this.props;

//   return (
//     <Dropzone accept="image/*" onDropAccepted={onUpload}>
//       {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
//         <DropContainer
//           {...getRootProps()}
//           isDragActive={isDragActive}
//           isDragReject={isDragReject}
//         >
//           <input {...getInputProps()} />

//           {this.renderDragMessage(isDragActive, isDragReject)}
//         </DropContainer>
//       )}
//     </Dropzone>
//   );
// }
