import React, { useState } from 'react';

import './ModalCallBack.css';

const ModalCallback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const isPhoneValid = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
  const [isSending, setIsSending] = useState(false); // Стан для відображення статусу відправки

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async () => {
    setIsSending(true);
    try {
      // Відправка даних на бекенд
      // await axios.post('URL_на_бекенд', { phoneNumber });
      console.log('Дані відправлено на бекенд');
      setPhoneNumber('');
      setIsOpen(false);
    } catch (error) {
      console.error('Помилка під час відправки даних на бекенд:', error);
    }
    setIsSending(false);
  };

  return (
    <>
      <div className="header">
        <button onClick={handleOpenModal}>Замовити дзвінок</button>
      </div>
      <div className="xxx">
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>Щоденно з 8:00 до 20:00</p>
              <input
                className="phone-number"
                type="text"
                placeholder="+38(___)___-__-__"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <button
                className="button"
                disabled={!isPhoneValid || isSending}
                onClick={handleSubmit}
              >
                Замовити дзвінок
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalCallback;
