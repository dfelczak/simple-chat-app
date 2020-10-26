import React from 'react';

interface Props {
  firstName: string;
  lastName: string;
}

export const Contact: React.FC<Props> = ({ firstName, lastName }) => {
  return (
    <div className="ml-4 flex-1 border-b border-grey-lighter py-6">
      <div className="flex items-bottom justify-between">
        <p className="text-grey-darkest">
          {firstName} {lastName}
        </p>
      </div>
    </div>
  );
};
