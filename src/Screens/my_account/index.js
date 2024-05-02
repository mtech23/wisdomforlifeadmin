import react, { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

// import CustomTable from "../../Components/CustomTable"
import Tab from "react-bootstrap/Tab";

import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../Assets/images/profileimg.png";

import CustomModal from "../../Components/CustomModal";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, useParams } from "react-router-dom";
export function MyProfile() {
  const [formData, setFormData] = useState([]);
  const [editUser, setEditUser] = useState(false);
  const baseurl = `${process.env.REACT_APP_API_URL}/public/`;

  const handlechang = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  console.log("formData", formData);
  const handleget = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    const LogoutData = localStorage.getItem("login");
    // fetch(
    //   `https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/user/get-detail`,
    fetch(`${process.env.REACT_APP_API_URL}api/admin/profile-view`, {
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
        document.querySelector(".loaderBox").classList.add("d-none");
        setEditUser(true);
        console.log("data profile", data);
        setFormData(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
      });
  };

  const [profile, setprofile] = useState([]);
  //   const fetchprofile = async () => {
  //     try {
  //       const data = await Profile_view();
  //       setprofile(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  // const filehandleChange = (event) => {
  //   const file = event.target.files[0];
  //   // console.log(file.name)
  //   if (file) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       image: file,
  //     }));
  //   }
  //   console.log(formData);
  // };








  // const filehandleChange = (event) => {
  //   const file = event.target.files[0];
  //   // console.log(file.name)
  //   if (file) {
  //     const fileName = file;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       ad_image: fileName,
  //     }));
  //   }
  //   console.log(formData)
  // };








  
  const filehandleChange = (event) => {
    const file = event.target.files[0];
     if (file) {
        const fileName = file;
        setFormData((prevData) => ({
            ...prevData,
            image: fileName,
        }));
    } 
};
  
  const fetchprofile = () => {
    const datas = process.env.REACT_APP_API_URL;
    console.log("datas", datas);
    const LogoutData = localStorage.getItem("login");

    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/admin/profile-view`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        document.querySelector(".loaderBox").classList.add("d-none");
        setprofile(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };
  useEffect(() => {
    fetchprofile();
  }, []);
  console.log("profile", profile);

  const base_url = process.env.REACT_APP_API_URL;

  const [all_product, setAll_product] = useState([]);

  console.log("all_product", all_product);

  const handleEditSubmit = (event) => {
    event.preventDefault();

    document.querySelector(".loaderBox").classList.remove("d-none");
    const LogoutData = localStorage.getItem("login");
    // fetch(
    //   `https://custom3.mystagingserver.site/Pete-Cardamone-Dental/public/api/user/detail-edit`,
    fetch(
        `${process.env.REACT_APP_API_URL}api/admin/profile-edit`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LogoutData}`,
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        fetchprofile();
        document.querySelector(".loaderBox").classList.add("d-none");
        setFormData({
          name: "",
        });

        setEditUser(false);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
      });
  };
  return (
    <div>
      <>
        <DashboardLayout>
          <section className="book_listing_main_wrap myAccountPage pt-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="titleBox mb-4">
                    {/* <h3>My Account</h3> */}
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-md-6      justify-content-between
 d-flex"
                  >
                    <div className="pageTitle mb-4">
                      <h3>My Profile</h3>
                    </div>
                    <span type="button" onClick={handleget}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="tableActionIcon"
                      />
                    </span>
                  </div>
                  <div className="row mb-3    ">
                    <div className="col-lg-4 order-2 order-lg-1 mb-3">
                      <div className="profileImage">
                        <img src={base_url + profile?.image} alt="User" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row mb-4">
                      <div className="col-xl-5 col-lg-6 mb-3">
                        <h4 className="secondaryLabel">Name</h4>
                        <p className="secondaryText">{profile?.name}</p>
                      </div>

                      <div className="col-xl-5 col-lg-6 mb-3">
                        <h4 className="secondaryLabel"> Email</h4>
                        <p className="secondaryText">{profile?.email}</p>
                      </div>
                      <div className="col-xl-5 col-lg-6 mb-3">
                        <h4 className="secondaryLabel"> Phone Number</h4>
                        <p className="secondaryText">{profile?.phone_number}</p>
                      </div>
                      <div className="col-xl-5 col-lg-6 mb-3">
                        <h4 className="secondaryLabel">
                          {" "}
                          Profile Description{" "}
                        </h4>
                        <p className="secondaryText">
                          {profile?.profile_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end  */}
              </div>
            </div>
          </section>
       

          <CustomModal
            show={editUser}
            close={() => {
              setEditUser(false);
            }}
            className="modalXl"
            heading="Edit Profile"
          >
            <div className="row mt-3">
              <div className="col-xl-6 col-lg-6 mb-4">
                <CustomInput
                  label="Edit Image"
                  type="file"
                  required
                  name="image"
                  placeholder="Enter Category Name"
                  labelClass="mainLabel"
                //   value={formData?.name}
                  inputClass="mainInput"
                  onChange={filehandleChange}
                />
              </div>







              <div className="col-xl-6 col-lg-6 mb-4">
                <CustomInput
                  label="Name"
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  labelClassx="mainLabel"
                  input_icon="mainInput"
                  inputClass="mainInput"
                  value={formData?.name}
                  onChange={handlechang}
                />
              </div>


              <div className="col-xl-6 col-lg-6 mb-4">
                <CustomInput
                  label="Email"
                  type="email"
                  disabled
                  placeholder="email"
                  required
                  name="email"
                  labelclassName="mainLabel"
                  input_icon="mainInput"
                  inputClass="mainInput"
                  value={formData?.email}
                  onChange={handlechang}
                />
              </div>

              <div className="col-xl-6 col-lg-6 mb-4">
                <CustomInput
                  label="phone_number"
                  type="number"
                  placeholder="phone_number"
                  required
                  name="phone_number"
                  labelclassName="mainLabel"
                  inputClass="mainInput"
                  input_icon="mainInput"
                  value={formData?.phone_number}
                  onChange={handlechang}
                />
              </div>

              <div className="col-xl-6 col-lg-6 mb-4">
                <CustomInput
                  label="  Profile Description"
                  type="text"
                  placeholder=" Profile Description"
                  required
                  name="profile_description"
                  labelclassName="mainLabel"
                  input_icon="mainInput"
                  inputClass="mainInput"
                  value={formData?.profile_description}
                  onChange={handlechang}
                />
              </div>
            </div>

            <CustomButton
              variant="primaryButton"
              text="Edit"
              type="button"
              onClick={handleEditSubmit}
            />
          </CustomModal>
        </DashboardLayout>
      </>
    </div>
  );
}
