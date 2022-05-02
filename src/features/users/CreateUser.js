import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const CreateUser = () => {
  let navigate = useNavigate();
    
const [formData,setFormData] = useState({
    username:'',
    emailid:'',
    mobileNumber:'',
    age:''
});
const {id} = useParams();
const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData , [e.target.name]: e.target.value});
}
const {username, emailid, mobileNumber, age} = formData;
  const url = "https://62398c5863fdd477ac146911.mockapi.io/api/users/users";

  const postData = (e) => {
      
    e.preventDefault();
    console.log(formData);
    if (id) {
        fetch(
          "https://62398c5863fdd477ac146911.mockapi.io/api/users/users/" + id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        )
          .then((data) => data.json())
          .then(() => {
            alert("Data Updated Successfully");
            navigate.push("/", { replace: true });
          })
          .catch((err) => console.log(err));
      } else {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((data) => {
          alert("Data Saved Successfully");
        })
        .catch((err) => console.log(err));
      }
      
  };

  useEffect(() => {
    if (id) {
      fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users/" + id)
        .then((data) => data.json())
        .then((data) => setFormData(data));
    }
  }, [id]);

  return (
    <> 
      <div id="profile-edit-save">
        <h1>Create User</h1>
        <div className="create">
          <Link to="/" className="button-33">
            Home
          </Link>
        </div>
      </div>
      <div id="profile-edit-area">
        <form>
          <div id="edit-area-left">
            <table>
              <tbody>
                <tr>
                  <td className="edit-title">User Name:</td>
                  <td>
                    <input type="text" className="profileInputBox" name="username" value={username} onChange={handleChange}/>
                  </td>
                </tr>

                <tr>
                  <td className="edit-title">Mobile Number :</td>
                  <td>
                    <input type="text" className="profileInputBox"  name="mobileNumber" value={mobileNumber} onChange={handleChange}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="edit-area-right">
            <table>
              <tbody>
                <tr>
                  <td className="edit-title">Email Id:</td>
                  <td>
                    <input type="text" className="profileInputBox" name="emailid" value={emailid} onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td className="edit-title">Age:</td>
                  <td>
                    <input type="number" className="profileInputBox" name="age" value={age} onChange={handleChange}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button id="editSave"  onClick={postData}>Save</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
