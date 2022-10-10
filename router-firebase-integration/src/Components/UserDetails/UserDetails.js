import React from "react";
import { useParams } from "react-router-dom";
import Card from "../ShareComponent/Card/Card";
import useUsers from "../useUsers/useUsers";

const UserDetails = () => {
  const { userId } = useParams();
  const { users } = useUsers(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );
  return (
    <section className="user-details custom-grid">
      <h2 className="details__title">Student Info.</h2>

      <div className="user custom-grid">
        {users?.map((user) => (
          <Card key={user.id} user={user}>
            {{
              username: users[0]?.username,
              phone: users[0]?.phone,
              company: users[0]?.company?.name,
            }}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UserDetails;
