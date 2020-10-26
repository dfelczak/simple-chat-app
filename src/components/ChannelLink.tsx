import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  id: Channel['id'];
}

export const ChannelLink: React.FC<Props> = ({ children, id }) => {
  return (
    <NavLink className="px-3 flex items-center cursor-pointer" activeClassName="bg-gray-200" to={`/channel/${id}`}>
      {children}
    </NavLink>
  );
};
