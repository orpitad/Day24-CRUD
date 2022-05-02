import React from "react";

const UsersTable = ({ data }) => {
  return (
    <div>
      {
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr> */}
              {data.map((user) => (
            // <div className="user">{user}</div>
            <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.emailid}</td>
            <td>{user.age}</td>
            <td>
                <button className="">Edit </button>
                <button className="">Delete </button>
            </td>
          </tr>
            ))}
            </tbody>
          </table>
          
        </div>
      }
    </div>
  );
};

export default UsersTable;
