import { checkUserExists } from '@/lib/actions/user.actions';

import { Button } from '@/components/ui/button';

const CheckUser = async () => {
  return (
    <>
      <Button onClick={checkUserExists}>Check User</Button>
    </>
  );
};

export default CheckUser;
