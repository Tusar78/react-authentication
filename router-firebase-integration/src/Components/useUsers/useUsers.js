import React, { useState } from "react";

const useUsers = url => {
  const [users, setUsers] = useState();

  return {users, setUsers};
}

export default useUsers;