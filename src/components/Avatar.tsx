import React, { memo } from 'react';

interface Props {
  url: string;
}

export const Avatar: React.FC<Props> = memo(({ url }) => {
  return (
    <div>
      <img className="h-12 w-12 rounded-full" src={url} alt="human" />
    </div>
  );
});
