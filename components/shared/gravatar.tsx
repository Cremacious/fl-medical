// 'use client';

// import Gravatar from 'react-gravatar';

// interface GravatarClientProps {
//   email: string;
//   className?: string;
// }

// const GravatarClient: React.FC<GravatarClientProps> = ({
//   email,
//   className,
// }) => {
//   return <Gravatar email={email} className={className} />;
// };

// export default GravatarClient;

'use client';

import Gravatar from 'react-gravatar';

interface GravatarClientProps {
  email: string;
}

const GravatarClient: React.FC<GravatarClientProps> = ({ email }) => {
  return <Gravatar email={email} />;
};

export default GravatarClient;
