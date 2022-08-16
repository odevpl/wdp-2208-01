import React, { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faAngleDoubleUp,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import styles from './ChatBot.module.scss';

const chatbotAvatar = `${process.env.PUBLIC_URL}/images/chatbot.png`;
const userAvatar = `${process.env.PUBLIC_URL}/images/user.png`;

const Messages = () => {
  return (
    <div className='d-flex flex-row justify-content-start mb-12'>
      <img src={chatbotAvatar} alt='bot' style={{ width: '45px', height: '100%' }} />
      <div>
        <p
          className='small p-2 ms-3 mb-1 rounded-3'
          style={{ backgroundColor: '#f5f6f7' }}
        >
          W czym mogę pomóc?
        </p>
        <p className='small ms-3 mb-3 rounded-3 text-muted'>00:00</p>
      </div>
    </div>
  );
};

const UserInput = () => {
  return (
    <div className='text-muted d-flex justify-content-start align-items-center'>
      <img src={userAvatar} alt='user' style={{ width: '45px', height: '100%' }} />

      <input
        type='text'
        className='form-control p-2 ms-3 mb-1 rounded-3'
        placeholder='Wpisz wiadomość'
      />
      <span className={clsx('ms-3', 'link-info', styles.sendBtn)}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </span>
    </div>
  );
};

const ChatBot = () => {
  const [chatbotActive, setChatbotActive] = useState(false);
  return (
    <div className={styles.chatbot}>
      <button
        className={clsx('btn', 'btn-primary', styles.activationBtn)}
        type='button'
        onClick={() => setChatbotActive(!chatbotActive)}
      >
        Potrzebujesz pomocy? Napisz!
        <FontAwesomeIcon icon={chatbotActive ? faAngleDoubleDown : faAngleDoubleUp} />
      </button>
      <div className={'row'}>
        <div className={'col-4'}>
          <div className={chatbotActive ? styles.active : styles.inactive} id='card'>
            <div className='card card-body'>
              <Messages />
              <UserInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
