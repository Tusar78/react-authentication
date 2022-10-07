import React, { useState } from "react";
import { useEffect } from "react";

const useUsers = (url) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(`${url}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return {
    users,
    setUsers,
  };
};

export default useUsers;
