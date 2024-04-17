import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomInput from "../../Components/CustomInput";
import { SelectBox } from "../../Components/CustomSelect";
import CustomButton from "../../Components/CustomButton";
export const EditPromo = () => {



    const { id } = useParams();
  const [categories, setCategories] = useState({});
  const [unit, setUnit] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    
  });

  const Base_url = process.env.REACT_APP_API_URL;


  const Coursecatigory = [
    {
      name: "Trending",
      code: "0",
    },
    {
      name: "IT & Software",
      code: "1",
    },
    {
      name: "Marketing",
      code: "2",
    },

    {
      name: "Science",
      code: "3",
    },

    {
      name: "Language",
      code: "3",
    },

    {
      name: "Law",
      code: "4",
    },
  ];
  const CourseData = () => {
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/admin/promo-view/${id}`, {
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
  useEffect(() => {
    CourseData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const filehandleChange = (event) => {
    const file = event.target.files[0];
    // console.log(file.name)
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
    console.log(formData);
  };




 
  const LogoutData = localStorage.getItem("login");

  const handleSubmit = (event) => {
    event.preventDefault();

 
    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }

    console.log(formData);
    document.querySelector(".loaderBox").classList.remove("d-none");
    // Make the fetch request
    fetch(`${process.env.REACT_APP_API_URL}api/admin/promo-add-update/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
      body: formDataMethod, // Use the FormData object as the request body
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setShowModal(true);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  console.log("formData", formData);

  return (
    <>
      <DashboardLayout>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12 mb-2">
              <h2 className="mainTitle">
                <BackButton />
                Edit PromoCode
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="PromoCode Title"
                          required
                          id="title"
                          type="text"
                          placeholder="Enter Promo Code  "
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="code"
                          value={formData?.code}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="  Description"
                          required
                          id="price"
                          type="text"
                          placeholder="Enter description"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="description"
                          value={formData?.description}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="   PromoCode Type"
                          required
                          id="file"
                          type="text"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="discount_type"
                          value={formData?.discount_type}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Discount Value    "
                          required
                          id="file"
                          type="text"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="discount_value"
                          value={formData?.discount_value}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="    Minimum Order Amount"
                          required
                          id="file"
                          type="text"
 
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="minimum_order_amount"
                          value={formData?.minimum_order_amount}
                          onChange={handleChange}
                        />
                      </div>

                     

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Start Date  "
                          required
                          id="start_date"
                          type="text"
                          placeholder="Enter Start Date  "
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="start_date"
                          value={formData?.start_date}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="  End Date"
                          required
                          id="end_date"
                          type="text"
                          placeholder="End Date"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="course_start_date"
                          value={formData?.end_date}
                          onChange={handleChange}
                        />
                      </div>

                       
                      {/* <div className="col-md-12 mb-4">
                        <div className="inputWrapper">
                          <div className="form-controls">
                            <label htmlFor="">Description</label>
                            <textarea
                              name="course_description"
                              className="form-control shadow border-0"
                              id=""
                              cols="30"
                              rows="10"
                              value={formData?.course_description}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-md-12">
                        <CustomButton
                          variant="primaryButton"
                          text="Submit"
                          type="submit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <CustomModal
          show={showModal}
          close={() => {
            setShowModal(false);
          }}
          success
          heading="Course Update Successfully."
        />
      </DashboardLayout>
    </>
  );
};
