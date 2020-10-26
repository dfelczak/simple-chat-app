import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store/configure';
import { channelListWithParticipantsSelector } from 'selectors/channels';
import { useAppData } from 'hooks/appData';
import { ChannelLink } from 'components/ChannelLink';
import { Avatar } from 'components/Avatar';
import { Contact } from 'components/Contact';
import { Channel as ChannelRoute } from 'routes/Channel';
import { getChannelContact } from 'utils/getChannelContact';
import { currentUserSelector } from 'selectors/user';
import { Home } from 'routes/Home';

export const App = () => {
  const channels = useSelector<RootState, ChannelWithParticipants[]>(channelListWithParticipantsSelector);
  const me = useSelector(currentUserSelector);

  useAppData();

  return (
    <Router>
      <div className="container mx-auto bg-gray-200 shadow-xl h-screen">
        <div className="flex h-full">
          <div className="w-1/3 flex-col full-height bg-white">
            {channels.map((channel) => {
              const contact = getChannelContact(me.id, channel.participants);

              return (
                <ChannelLink id={channel.id} key={channel.id}>
                  <Avatar url={contact.avatar} />
                  <Contact firstName={contact.firstName} lastName={contact.lastName} />
                </ChannelLink>
              );
            })}
          </div>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/channel/:channelId" component={ChannelRoute} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
