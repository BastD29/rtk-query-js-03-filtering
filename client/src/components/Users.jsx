import { useState } from "react";
import { useGetUsersQuery, useGetOptionsQuery } from "../store/user/apiSlice";
import { Filter } from "./Filter";

const Users = () => {
  const [filter, setFilter] = useState({});
  console.log("filter:", filter);
  const {
    data: users,
    error: userError,
    isLoading: userLoading,
  } = useGetUsersQuery(filter);
  const {
    data: options,
    error: optionError,
    isLoading: optionLoading,
  } = useGetOptionsQuery();

  console.log("options:", options);

  if (userLoading) return <div>Loading...</div>;
  if (userError) return <div>Error occurred: {error.toString()}</div>;

  const handleInputChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Filter onInputChange={handleInputChange} options={options} />
      <div>
        {users.map((user) => (
          <div key={user._id}>{user.name}</div>
        ))}
      </div>
    </>
  );
};

export { Users };
