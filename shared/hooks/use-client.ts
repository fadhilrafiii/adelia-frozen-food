import { useEffect, useState } from 'react';

const useClient = () => {
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  return { isClientReady };
};

export default useClient;
