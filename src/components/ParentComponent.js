// Assuming Managevendors and Signup are siblings in a parent component

import React from 'react';
import Managevendors from './Managevendors';
import Signup from './Signup';


const ParentComponent = () => {
  const manageVendorsRef = React.createRef();

  const refreshUsers = () => {
    manageVendorsRef.current.fetchVendors();
  };

  return (
    <div>
      <Managevendors ref={manageVendorsRef} />
      <Signup onUserCreated={refreshUsers} />
    </div>
  );
};

export default ParentComponent;
