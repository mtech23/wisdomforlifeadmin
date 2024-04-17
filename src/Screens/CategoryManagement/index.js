import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faEye,
  faEdit,
  faTimes,
  faFilter,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "./../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { SelectBox } from "../../Components/CustomSelect";

import "./style.css";

export const CategoryManagement = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showeditModal, setEditModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState({});
  const [formData, setFormData] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [catigoryid, setCatigoryid] = useState("");

  const LogoutData = localStorage.getItem("login");
  const base_url = process.env.REACT_APP_API_URL;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const CategoryList = () => {
    fetch(`${base_url}api/admin/category-listing`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");

        setCategory(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        console.log(error);
      });
  };

  useEffect(() => {
    CategoryList();
  }, []);

  const inActive = () => {
    setShowModal(false);
    setShowModal2(true);
  };
  const ActiveMale = () => {
    setShowModal3(false);
    setShowModal4(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const filehandleChange = (event) => {
    const file = event.target?.files[0];
    // console.log(file.name)
    if (file) {
      // const fileName = file;
      setFormData((prevData) => ({
        ...prevData,
        file: file,
      }));
    }
    console.log(formData);
  };

  const hanldeeditRoute = (id) => {
    setEditModal(true);
    setCatigoryid(id);

    CatigoryData(id);
  };

  const hanldeRoute = () => {
    setShowModal(true);
  };
  console.log(data);
  const filterData = data?.filter(
    (item) =>
      (selectedStatus === "" || item.status == selectedStatus) &&
      item?.name.toLowerCase().includes(inputValue.toLowerCase())
    // item.number.toLowerCase().includes(inputValue.toLowerCase()))
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData?.slice(indexOfFirstItem, indexOfLastItem);
  //  console.log("currentItems"  , currentItems[0]?.name)

  // currentItems = currentItems.filter((item) => {
  //   console.log(item.status)
  //   // Replace 'status' with the actual property in your data that represents the status
  //   return selectedStatus === '' || item.status == 0;
  // });
  useEffect(() => {
    document.querySelector(".loaderBox")?.classList.remove("d-none");
    document.title = "Wisdom For Life Admin | User Management";
    const LogoutData = localStorage.getItem("login");

    fetch(`${base_url}api/admin/category-listing`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        console.log(error);
      });
  }, []);

  console.log("data cat", data);

  const maleHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "username",
      title: "Category Name",
    },
    {
      key: "created at",
      title: "created at",
    },
    {
      key: "actions",
      title: "Actions",
    },
  ];

  const statusOptions = [
    {
      code: "",
      name: "All",
    },
    {
      code: 0,
      name: "Inactive",
    },
    {
      code: 1,
      name: "Active",
    },
  ];

  const sortingData = [
    {
      code: data?.length,
      name: "All",
    },
    {
      code: 5,
      name: "5",
    },
    {
      code: 10,
      name: "10",
    },
    {
      code: 50,
      name: "50",
    },
  ];

  //handleEditSubmit

  const handleEditSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }
    console.log(formData);
    document.querySelector(".loaderBox").classList.remove("d-none");

    fetch(
      `${process.env.REACT_APP_API_URL}api/admin/category-add-update/${catigoryid}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${LogoutData}`,
        },
        body: formDataMethod,
      }
    )
      .then((response) => {
        CategoryList();
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        setEditModal(false);
        CategoryList();
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }

    console.log(formData);
    document.querySelector(".loaderBox")?.classList.remove("d-none");
    // Make the fetch request
    fetch(`${base_url}api/admin/category-add-update`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
      body: formDataMethod, // Use the FormData object as the request body
    })
      .then((response) => {
        CategoryList();
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        CategoryList();
        setShowModal(false);
      })
      .catch((error) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        console.log(error);
      });
  };

  const DeleteEvent = (catId) => {
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      `${process.env.REACT_APP_API_URL}api/admin/category-delete/${catId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LogoutData}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        CategoryList();
        document.querySelector(".loaderBox").classList.add("d-none");
        CategoryList();
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const CatigoryData = (id) => {
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    console.log("catid", id);
    fetch(`${process.env.REACT_APP_API_URL}api/admin/category-view/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector(".loaderBox").classList.add("d-none");
        setFormData(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };
  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row mb-3 justify-content-between">
                  <div className="col-md-4 mb-2">
                    <h2 className="mainTitle">Category Management</h2>
                  </div>
                  <div className="col-md-8 mb-2">
                    <div className="addUser align-items-end d-flex justify-content-end">
                      <CustomButton
                        text="Add New Category"
                        variant="primaryButton"
                        onClick={hanldeRoute}
                      />
                      {/* <CustomInput type="text" placeholder="Search by Name..." value={inputValue} inputClass="mainInput" onChange={handleChange} /> */}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable headers={maleHeaders}>
                      <tbody>
                        {currentItems?.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="text-capitalize">{item?.name}</td>
                            {/* <td>{item.username}</td> */}
                            <td>{item?.created_at}</td>
                            {/* <td className={item?.status == 1 ? 'greenColor' : "redColor"}>{item?.status == 1 ? 'Active' : "Inactive"}</td> */}
                            <td>
                              <Dropdown className="tableDropdown">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  className="notButton classicToggle"
                                >
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                  align="end"
                                  className="tableDropdownMenu"
                                >
                                  {/* <Link to={`/medical-management/report-detail/${item?.id}`} className="tableAction"><FontAwesomeIcon icon={faEye} className="tableActionIcon" />View</Link> */}
                                  {/* <Link
                                    to={`/medical-management/edit-report/${item.id}`}
                                    className="tableAction"
                                  >
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      className="tableActionIcon"
                                    />
                                    Edit
                                  </Link> */}
                                  {/* /hanldeeditRoute */}

                                  <button
                                    type="button"
                                    className="bg-transparent border-0 ps-lg-3 pt-1"
                                    onClick={() => hanldeeditRoute(item?.id)}
                                  >
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      className="tableActionIcon"
                                    />
                                    Edit
                                  </button>

                                  <button
                                    type="button"
                                    className="bg-transparent border-0 ps-lg-3 pt-1"
                                    onClick={() => DeleteEvent(item?.id)}
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrash}
                                    ></FontAwesomeIcon>{" "}
                                    Delete
                                  </button>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </CustomTable>
                    <CustomPagination
                      itemsPerPage={itemsPerPage}
                      totalItems={filterData?.length}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CustomModal
            show={showModal}
            close={() => {
              setShowModal(false);
            }}
            action={inActive}
            heading="Add Category"
          >
            <CustomInput
              label="Add New Category"
              type="text"
              required
              name="name"
              placeholder="Enter Category Name"
              labelClass="mainLabel"
              inputClass="mainInput"
              onChange={handleChange}
            />

            <CustomButton
              variant="primaryButton"
              text="Add"
              type="button"
              onClick={handleSubmit}
            />
          </CustomModal>

          <CustomModal
            show={showeditModal}
            close={() => {
              setEditModal(false);
            }}
            action={inActive}
            heading="Edit Category"
          >
            <CustomInput
              label="  Edit Category"
              type="text"
              required
              name="name"
              placeholder="Enter Category Name"
              labelClass="mainLabel"
              value={formData?.name}
              inputClass="mainInput"
              onChange={handleChange}
            />

            <CustomButton
              variant="primaryButton"
              text="Edit"
              type="button"
              onClick={handleEditSubmit}
            />
          </CustomModal>
          <CustomModal
            show={showModal2}
            close={() => {
              setShowModal2(false);
            }}
            success
            heading="Marked as Inactive"
          />

          <CustomModal
            show={showModal3}
            close={() => {
              setShowModal3(false);
            }}
            action={ActiveMale}
            heading="Are you sure you want to mark this user as Active?"
          />
          <CustomModal
            show={showModal4}
            close={() => {
              setShowModal4(false);
            }}
            success
            heading="Marked as Active"
          />
        </div>
      </DashboardLayout>
    </>
  );
};
