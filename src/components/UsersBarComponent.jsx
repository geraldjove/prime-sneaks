import React, { useState, useEffect } from "react";
import UserBarComponent from "./UserBarComponent";

const UsersBarComponent = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetch(
          `${import.meta.env.VITE_API_URL}/users/all`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );
        const data = await usersData.json();
        if (data) {
          setUsers(data.users);
        } else {
          console.error("Error");
        }
      } catch (error) {
        console.error("Error ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="border-2 rounded-lg overflow-auto min-h-[100vh] max-h-[100vh]">
      {users.map((user, index) => (
        <UserBarComponent key={index} user={user} />
      ))}
    </div>
  );
};

export default UsersBarComponent;
