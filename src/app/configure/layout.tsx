import { ReactNode } from 'react';

import MaxWidthWrapper from '@/components/max-width-warpper';
import Steps from '@/components/steps';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
