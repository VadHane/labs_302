import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import HeightIcon from "@mui/icons-material/Height";
import { SelectedWord } from "../../../../types/selectedWord";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./ReplaceModal.css";

interface ReplaceModalProps {
  selectedWords: SelectedWord[];

  onChangeSelectedWord: (position: number) => void;
  onReplace: (searchWord: string, replaceWord: string) => void;
  onSearch: (searchWord: string) => void;
  onClose: () => void;
}

const ReplaceModal: FunctionComponent<ReplaceModalProps> = (props) => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [replaceWord, setReplaceWord] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (props.selectedWords.length) {
      props.onChangeSelectedWord(0);
      setSelectedIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selectedWords]);

  useEffect(() => {
    if (!props.selectedWords[selectedIndex]) {
      decSelectedIndex();
      return;
    }

    props.onChangeSelectedWord(selectedIndex);
  }, [props.selectedWords, selectedIndex]);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: word } = event.currentTarget;

    setSearchWord(word);
  };

  const onChangeReplaceWord = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: word } = event.currentTarget;

    setReplaceWord(word);
  };

  const incSelectedIndex = () => {
    setSelectedIndex((curr) => {
      if (curr < props.selectedWords.length - 1) {
        return curr + 1;
      }

      return curr;
    });
  };

  const decSelectedIndex = () => {
    setSelectedIndex((curr) => {
      if (curr > 0) {
        return curr - 1;
      }

      return curr;
    });
  };

  const renderSearchBlock = () => {
    return (
      <div className="serch-block">
        <input
          type="text"
          name="search"
          value={searchWord}
          onChange={onChangeSearch}
        />

        <div className="button" onClick={() => props.onSearch(searchWord)}>
          Search
        </div>
      </div>
    );
  };

  const renderSelectedBlock = () => {
    if (!props.selectedWords.length) {
      return <></>;
    }

    return (
      <div className="selected-block">
        <div className="buttons">
          <div className="btn" onClick={decSelectedIndex}>
            <ArrowBackIosIcon />
          </div>
          <div className="btn" onClick={incSelectedIndex}>
            <ArrowForwardIosIcon />
          </div>
        </div>
        <p>{props.selectedWords[selectedIndex].word}</p>
        <p>
          Select {selectedIndex + 1}/{props.selectedWords.length}
        </p>

        <input
          type="text"
          name="search"
          value={replaceWord}
          onChange={onChangeReplaceWord}
        />
        <div
          className="button"
          onClick={() => props.onReplace(searchWord, replaceWord)}
        >
          Replace
        </div>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <div className="closeWrapper" onClick={props.onClose}></div>
      <div className="modal-window">
        {renderSearchBlock()}
        {renderSelectedBlock()}
      </div>
    </div>
  );
};

export default ReplaceModal;
