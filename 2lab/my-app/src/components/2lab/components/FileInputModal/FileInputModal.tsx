import { ChangeEvent, FunctionComponent, useState } from "react";

import "./FileInputModal.css";

interface FileInputModalProps {
  onChangeFile: (file: File) => void;
  onClose: () => void;
}

const FileInputModal: FunctionComponent<FileInputModalProps> = (props) => {
  const [file, setFile] = useState<File>();

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    files?.[0] && setFile(files[0]);
  };

  const onClickButton = () => {
    if (file) {
      props.onChangeFile(file);
    }
  };

  return (
    <div className="wrapper">
      <div className="closeWrapper" onClick={props.onClose}></div>
      <div className="modal-window">
        <h2>Select some .txt file</h2>
        <input type="file" name="file" id="file" onChange={onChangeFile} />
        <div className="button" onClick={onClickButton}>
          Upload
        </div>
      </div>
    </div>
  );
};

export default FileInputModal;
