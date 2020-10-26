import React from 'react';
import classnames from 'classnames';

interface Props {
  text: Message['text'];
  isMineMessage: boolean;
}

export const Message = ({ text, isMineMessage }: Props) => {
  return (
    <div
      className={classnames('p-2 my-2 rounded-md shadow', {
        'self-end bg-green-500 text-white ml-3': isMineMessage,
        'self-start bg-white text-gray-700 mr-3': !isMineMessage,
      })}
    >
      {text}
    </div>
  );
};
