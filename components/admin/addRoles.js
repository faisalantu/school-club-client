import InputBox from "../global/inputbox";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import TextEditor from "../global/textEditor";
import { convertToRaw } from "draft-js";
import { MdDelete, MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "../../axios";
const AddRoles = (props) => {
  const [roleName, SetRoleName] = useState("");
  const [roleid, SetRoleid] = useState(null);
  const [details, setDetail] = useState("");
  const handelDetail = (e) => {
    setDetail(e.target.value);
  };

  const [roles, setRoles] = useState(Array);
  const [rolesUpdate, setRolesUpdate] = useState(true);
  const pullRolesData = () => {
    axios
      .get("/role")
      .then(function (response) {
        // handle success
        //console.log("pullRolesData-=>", response.data);
        setRoles(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("pullRolesData-=>", error);
      });
  };
  useEffect(() => {
    pullRolesData();
  }, [rolesUpdate]);

  const editRole = (id, name, detail) => {
    SetRoleid(id);
    setDetail(detail);
    SetRoleName(name);
    //console.log("editRole------", id, name, detail)
  };
  const options = {
    title: "confirm, That You want to delete ",
    message: "",
    buttons: [
      {
        label: "confirm",
        onClick: () => deleteRole(id),
      },
      // {
      //   label: 'No',
      //   onClick: () => onClose()
      // }
    ],
  };
  const deleteConfirm = (id) => {
    confirmAlert({
      title: "confirm, That You want to delete ",
      message: "",
      buttons: [
        {
          label: "confirm",
          onClick: () => deleteRole(id),
        },
      ],
    });
  };
  const deleteRole = (id) => {
    confirmAlert({
      title: "confirm, That You want to delete ",
      message: "",
      buttons: [
        {
          label: "confirm",
          onClick: () => {
            axios
              .delete("/role/" + id)
              .then(function (response) {
                // handle success
                // console.log("deleteRole=>", response);
                setRolesUpdate(!rolesUpdate);
              })
              .catch(function (error) {
                // handle error
                console.log("deleteRole=>", error);
              });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
    // axios.delete('/role/' + id)
    //     .then(function (response) {
    //         // handle success
    //         // console.log("deleteRole=>", response);
    //         setRolesUpdate(!rolesUpdate)
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log("deleteRole=>", error);
    //     })
  };
  const options1 = {
    title: "update Roles category",
    message: "",
    buttons: [
      {
        label: "continue",
        onClick: () => handleSubmit(),
      },
      {
        label: "No",
        onClick: () => {},
      },
    ],
  };
  const submitForm = (e) => {
    e.preventDefault();
    confirmAlert(options1);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();

    // const data = {
    //     detail: details ? JSON.stringify(convertToRaw(details.getCurrentContent())) : "",
    //     name: roleName
    // }
    const data = {
      detail: details,
      name: roleName,
    };
    console.log("data=", data);
    if (roleid === null) {
      axios
        .post("/role", data)
        .then(function (response) {
          //console.log("handleSubmit=>", response);
          setRolesUpdate(!rolesUpdate);
        })
        .catch(function (error) {
          console.log("handleSubmit=>", error);
        });
    } else {
      axios
        .put("/role/" + roleid, data)
        .then(function (response) {
          //console.log("handleSubmit-put=>", response);
          setRolesUpdate(!rolesUpdate);
        })
        .catch(function (error) {
          console.log("handleSubmit-put=>", error);
        });
      SetRoleid(null);
    }
    setDetail("");
    SetRoleName("");
  };

  var items = roles.map((role) => {
    return (
      <li
        key={role.slug + "1"}
        className="flex justify-between items-center bg-gray-200 mx-1 my-2 py-4 px-5 rounded-lg hover:shadow-sm hover:bg-gray-300"
      >
        <p key={role.slug + "2"}>{role.name}</p>
        <div key={role.slug + "3"}>
          <span key={role.slug + "4"} onClick={deleteRole.bind(null, role._id)}>
            <MdDelete className="text-red-600 text-2xl inline  mx-2 cursor-pointer" />
          </span>
          <span
            key={role.slug + "5"}
            onClick={editRole.bind(null, role._id, role.name, role.detail)}
          >
            <MdEdit className=" text-yellow-600 text-2xl inline  ml-3 cursor-pointer" />
          </span>
        </div>
      </li>
    );
  });
  return (
    <>
      <form>
        <InputBox
          label="Role Name"
          placeholder="enter Role"
          type="text"
          name="Role"
          value={roleName}
          ChangeHandel={SetRoleName}
        />
        <p className="text-lg mt-5 mb-2">Write role detail</p>
        <div>
          <textarea
            className="box-border w-full p-4 bg-gray-200"
            onChange={handelDetail}
            name="detail"
            id="detain"
            value={details}
            rows="5"
          />
        </div>
        <button
          onClick={submitForm}
          type="submit"
          className="border-2 rounded-lg bg-gray-200 border-yellow-400 cursor-pointer px-5 py-2"
        >
          Add
        </button>
      </form>
      <ul className="list-none">
        {items}
        {/* <li className=" flex justify-between items-center bg-gray-400 mx-1 my-1">
                    <p>item 1</p>
                    <div>
                        <span ><MdDelete className="text-gray-100 text-2xl inline  mx-1" /></span>
                        <span ><MdEdit className="text-gray-100 text-2xl inline  mx-1" /></span>
                    </div>
                </li>
                <li className="flex justify-between items-center bg-gray-400  mx-1 my-1">
                    <p>item 2</p>
                    <div>
                        <span ><MdDelete className="text-gray-100 text-2xl inline  mx-1" /></span>
                        <span ><MdEdit className="text-gray-100 text-2xl inline  mx-1" /></span>
                    </div>
                </li> */}
      </ul>
    </>
  );
};

export default AddRoles;
