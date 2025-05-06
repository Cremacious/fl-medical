'use client';

import Gravatar from 'react-gravatar';

interface GravatarClientProps {
  email: string;
  className?: string;
}

const GravatarClient: React.FC<GravatarClientProps> = ({
  email,
  className,
}) => {
  return <Gravatar email={email} className={className} />;
};

export default GravatarClient;

