import { FunctionComponent } from "react";
import "./ControllButtons.css";

interface ControllButtonsProps {
  isEditMode: boolean;

  onPressEdit: () => void;
  onPressReplace: () => void;
  onPressSelectFile: () => void;

  onSaveChanges: () => void;
  onDiscardChanges: () => void;
}

const ControllButtons: FunctionComponent<ControllButtonsProps> = ({
  isEditMode,
  onPressEdit,
  onPressReplace,
  onPressSelectFile,
  onSaveChanges,
  onDiscardChanges,
}) => {
  return (
    <div className="btn-wrapper">
      {isEditMode && (
        <>
          <div className="button" onClick={onSaveChanges}>
            Save
          </div>
          <div className="button" onClick={onDiscardChanges}>
            Cancel
          </div>
        </>
      )}

      {!isEditMode && (
        <>
          {/* <div className="button" onClick={onPressEdit}>
            Edit
          </div> */}
          <div className="button" onClick={onPressReplace}>
            Replace
          </div>
          <div className="button" onClick={onPressSelectFile}>
            Select File
          </div>
        </>
      )}
    </div>
  );
};

export default ControllButtons;
