import React from 'react';
import { FiCamera, FiSend } from 'react-icons/fi';
import { RiAttachmentLine } from 'react-icons/ri';
import { BiNotepad } from 'react-icons/bi';
import { AiOutlineFile } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import CSS from './index.module.css';

function Index(props) {
  const [attchVisible, setAttchVisible] = React.useState(false);
  return (
    <div className={CSS.ChatInputWrapper}>
      <input
        onChange={props.ChatMsgChange}
        value={props.ChatMsg}
        type="text"
        name="chatMessage"
        className={CSS.ChatInput}
        placeholder="Type your message here"
      />
      <RiAttachmentLine onClick={() => setAttchVisible(!attchVisible)} className={CSS.ChatAttachment} size="2em" />
      <FiSend onClick={props.ChatSend} className={CSS.SendIcon} size="2em" />
      <HoverAttach setVisible={setAttchVisible} visible={attchVisible} selectFile={props.selectFile} />
    </div>
  );
}

function HoverAttach(props) {
  const fileRef = React.useRef();

  function selectFile(e) {
    e.preventDefault();
    fileRef.current.click();
    props.setVisible(false);
  }

  return (
    <div className={[CSS.AttachWrapper, props.visible ? 'd-flex' : 'd-none'].join(' ')}>
      <div onClick={selectFile}>
        <FiCamera className={CSS.AttachIcon} size="2em" />
        <span className={CSS.AttachText}>Camera</span>
      </div>
      <div onClick={selectFile}>
        <BiNotepad className={CSS.AttachIcon} size="2em" />
        <span className={CSS.AttachText}>Prescription</span>
      </div>
      <div onClick={selectFile}>
        <AiOutlineFile className={CSS.AttachIcon} size="2em" />
        <span className={CSS.AttachText}>Report</span>
      </div>
      <div onClick={selectFile}>
        <BsImage className={CSS.AttachIcon} size="2em" />
        <span className={CSS.AttachText}>Gallery</span>
      </div>
      <input style={{ display: 'none' }} ref={fileRef} type="file" name="file" onChange={props.selectFile} />
    </div>
  );
}

export default Index;
