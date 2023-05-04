import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import ControllButtons from "./components/ControllButtons/ControllButtons";
import FileInputModal from "./components/FileInputModal/FileInputModal";
import ReplaceModal from "./components/ReplaceModal/ReplaceModal";
import TextViewer from "./components/TextViewer/TextViewer";
import { SelectedWord } from "../../types/selectedWord";

const SecondLab: FunctionComponent = () => {
  const [content, setContent] = useState<string>("");
  const [changedContent, setChangedContent] = useState<string>("");

  const [selectedWords, setSelectedWords] = useState<SelectedWord[]>([]);
  const [selected, setSelected] = useState<SelectedWord>();

  const [file, setFile] = useState<File>();

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [showReplaceModal, setShowReplaceModal] = useState<boolean>(false);
  const [showSelectFileModal, setShowSelectFileModal] =
    useState<boolean>(false);

  useEffect(() => {
    if (file) {
      file
        .text()
        .then((value) =>
          setContent(
            value.replaceAll("\n", "").replaceAll(".", "").replaceAll(",", "")
          )
        );
      setShowSelectFileModal(false);
    } else {
      setContent("Select some file!");
    }
  }, [file]);

  const onChangeFile = (file: File) => {
    setFile(file);
  };

  const onPressSelectFile = () => {
    setShowSelectFileModal(true);
  };

  const onPressEdit = () => {
    setIsEditMode(true);
  };

  const onPressReplace = () => {
    setShowReplaceModal(true);
  };

  const onSaveChanges = () => {
    setContent(changedContent);
    setIsEditMode(false);
    setChangedContent("");
  };

  const onDiscardChanges = () => {
    setIsEditMode(false);
    setChangedContent("");
  };

  const onReplace = (searchWord: string, replaceWord: string) => {
    let newContent =
      content.slice(0, selected?.startPosition) +
      replaceWord +
      content.slice(selected?.endPosition, content.length);

    setContent(newContent);
    onSearch(searchWord);
  };

  const onSearch = (searchWord: string) => {
    const regex = `\\b${searchWord.toLowerCase()}\\b`.replaceAll(/\*/g, "\\w*");

    const matches = content.toLowerCase().match(new RegExp(regex, "g"));
    const _selectedWords: SelectedWord[] = [];
    let lastPosition = 0;
    let _content = content.slice();

    matches?.forEach((match) => {
      const start =
        _content.toLowerCase().indexOf(` ${match} `, lastPosition) + 1;
      const end = start + match.length;
      lastPosition = end - 1;

      _selectedWords.push({
        word: match,
        startPosition: start,
        endPosition: end,
      });
    });

    setSelectedWords(_selectedWords);
  };

  const onChangeSelectedWord = (pos: number) => {
    if (selectedWords[pos]) {
      setSelected(selectedWords[pos]);
    }
  };

  const onChangeContent = (e: any) => {
    const content = e.currentTarget.value;

    if (content) {
      setContent(content);
    }
  };

  return (
    <>
      <ControllButtons
        isEditMode={isEditMode}
        onPressEdit={onPressEdit}
        onPressReplace={onPressReplace}
        onPressSelectFile={onPressSelectFile}
        onSaveChanges={onSaveChanges}
        onDiscardChanges={onDiscardChanges}
      />
      {!isEditMode && (
        <TextViewer
          content={content}
          onChangeContent={onChangeContent}
          selectedWord={selected}
        />
      )}
      {showSelectFileModal && (
        <FileInputModal
          onChangeFile={onChangeFile}
          onClose={() => setShowSelectFileModal(false)}
        />
      )}
      {showReplaceModal && (
        <ReplaceModal
          selectedWords={selectedWords}
          onChangeSelectedWord={onChangeSelectedWord}
          onSearch={onSearch}
          onReplace={onReplace}
          onClose={() => setShowReplaceModal(false)}
        />
      )}
    </>
  );
};

export default SecondLab;
