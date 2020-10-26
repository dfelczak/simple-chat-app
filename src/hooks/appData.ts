import { useEffect } from 'react';
import { useAppDispatch } from './appDispatch';

import { actions as channelActions } from 'store/channels';
import { actions as contactsActions } from 'store/contacts';
import { actions as messagesActions } from 'store/messages';
import channelsData from 'data/channels.json';
import messagesData from 'data/messages.json';
import contactsData from 'data/contacts.json';

export const useAppData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(channelActions.loadData(channelsData));
    dispatch(contactsActions.loadData(contactsData));
    dispatch(messagesActions.loadData(messagesData));
  }, [dispatch]);
};
