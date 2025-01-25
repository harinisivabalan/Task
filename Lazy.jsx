import React, { Suspense } from 'react';
const Header = React.lazy(() => import("./Header"));



const Lazy = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Footer />
    </Suspense>
  );
};

export default Lazy;
