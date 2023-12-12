import { useState } from "react";
import { useGetUsersQuery } from "../store/user/apiSlice";
import { Pagination } from "./Pagination";

const Users = () => {
  const [page, setPage] = useState(1);
  const {
    data: users,
    error,
    isLoading,
  } = useGetUsersQuery({ page, limit: 5 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div>
        {users.data.map((user) => (
          <div key={user._id}>{user.name}</div>
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={handlePageChange} />
    </>
  );
};

export { Users };
