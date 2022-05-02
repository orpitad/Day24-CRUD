import React, { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const UserList = ({ history }) => {
  //https://reqres.in/api/users
  //https://jsonplaceholder.typicode.com/users
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://62398c5863fdd477ac146911.mockapi.io/api/users/users/";
  let navigate = useNavigate();

  const getData = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          console.log("resp", response);
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data " + error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    fetch(url+id, {
        method: 'DELETE'
    })
    .then(() => {
        getData();
      }).then(() => {
        alert("Data Deleted Successfully");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      <div className="create">
        <Link to="/create" className="button-33">
          Create New User
        </Link>
      </div>
      {(() => {
        if (loading) {
          return (
            <div className="middle">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
              <div className="bar bar4"></div>
              <div className="bar bar5"></div>
              <div className="bar bar6"></div>
              <div className="bar bar7"></div>
              <div className="bar bar8"></div>
            </div>
          );
        } else {
          if (users) {
            return (
              <>
                <div>
                  {
                    <table className="rwd-table">
                      <tbody>
                        <tr>
                          <th>ID</th>
                          <th>User Name</th>
                          <th>Email</th>
                          <th>Age</th>
                          <th>Action</th>
                        </tr>

                        {users.map((user, i) => (
                          <tr key={i}>
                            <td data-th="ID">{user.id}</td>
                            <td data-th="User Name">{user.username}</td>
                            <td data-th="Email">{user.emailid}</td>
                            <td data-th="Age">{user.age}</td>
                            <td data-th="Action">
                              <FaEdit role="button" tabIndex="0" onClick={() => {
                                    navigate(`/edit/${user.id}`, { replace: true });
                                }}/>

                              <span className="btn-span">
                                <FaTrashAlt
                                  role="button"
                                  tabIndex="0"
                                  onClick={() => handleDelete(user.id)}
                                />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  }
                </div>
              </>
            );
          }

          return <>No User {error}</>;
        }
      })()}
    </div>
  );
};

export default UserList;
