import React, { FunctionComponent, useState, useEffect, useRef } from "react";

import "./TextViewer.css";
import { SelectedWord } from "../../../../types/selectedWord";

interface TextViewerProps {
  content: string;
  selectedWord?: SelectedWord;

  onChangeContent: (e: React.ChangeEvent) => void;
}

const TextViewer: FunctionComponent<TextViewerProps> = ({
  content,
  onChangeContent,
  selectedWord,
}) => {
  const [_content, setContent] = useState<string>("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!ref || !selectedWord) {
      return;
    }
    ref.current?.focus();
    ref.current?.setSelectionRange(
      selectedWord.startPosition,
      selectedWord.endPosition
    );
  }, [selectedWord]);

  useEffect(() => {
    setContent(content);
  }, [content]);

  return (
    <div className="text-viewer">
      <textarea value={_content} onChange={onChangeContent} ref={ref} />
    </div>
  );
};

export default TextViewer;
