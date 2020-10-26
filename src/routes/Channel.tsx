import React from 'react';

import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { channelsWithMessagesSelector } from 'selectors/channels';
import { currentUserSelector } from 'selectors/user';
import { Message } from 'components/Message';
import { MessageDispatcher } from 'components/MessageDispatcher';
import { useAppDispatch } from 'hooks/appDispatch';
import { actions as messagesActions } from 'store/messages';
import { createMessage } from 'utils/createMessage';
import { isMineMessage } from 'utils/isMineMessage';

interface TParams {
  channelId: Channel['id'];
}

export const Channel: React.FC = () => {
  const { params } = useRouteMatch<TParams>();
  const dispatch = useAppDispatch();
  const channelsWithMessages = useSelector(channelsWithMessagesSelector);
  const me = useSelector(currentUserSelector);
  const currentChannel = channelsWithMessages[params.channelId];

  const handleMessageDispatch = (text: Message['text']) => {
    dispatch(messagesActions.addMessage(createMessage(text, me.id, currentChannel.id)));
  };

  return (
    <div className="w-2/3 relative">
      <div className="flex-col-reverse flex h-screen overflow-auto relative">
        <div className="flex flex-col px-2 mb-10">
          {currentChannel &&
            currentChannel.messages.map((message) => (
              <Message text={message.text} isMineMessage={isMineMessage(me, message)} />
            ))}
        </div>
      </div>

      <MessageDispatcher onMessageDispatch={handleMessageDispatch} />
    </div>
  );
};
