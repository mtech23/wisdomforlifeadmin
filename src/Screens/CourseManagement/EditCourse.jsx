import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomInput from "../../Components/CustomInput";
import { SelectBox } from "../../Components/CustomSelect";
import CustomButton from "../../Components/CustomButton";
export const EditCourse = () => {



    const { id } = useParams();
  const [categories, setCategories] = useState({});
  const [unit, setUnit] = useState({});
  const [showModal, setShowModal] = useState(false);
  // const [formData, setFormData] = useState({
  //   image: null,
  // });
  const [formData, setFormData] = useState({
    course_file: null,
    image: null,
    course_demo_video: null,
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
    fetch(`${process.env.REACT_APP_API_URL}api/admin/course-view/${id}`, {
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

  const filehandlevideo = (event) => {
    const file = event.target.files[0]
    
    const { name, value } = event.target;
    // console.log(file.name)
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    }
    console.log(formData);
  };
  // const filehandlecourseimg = (event) => {
  //   const file = event.target.files[0]
  //   // console.log(file.name)
  //   if (file) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       image: file,
  //     }));
  //   }
  //   console.log(formData);
  // };


  // const filehandlecourseimg = (event) => {
  //   const files = event.target.files; // Assuming this is an array of files
  //   if (files && files.length > 0) {
  //     // Map through the array of files
  //     const updatedFormData = Array.from(files).map((file, index) => ({
  //       name: file.name,
  //       type: file.type,
  //       size: file.size,
  //       file: file, // You can omit this if not needed
  //     }));
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       images: updatedFormData, // Assuming you have a state property named "images" to hold multiple files
  //     }));
  //   }
  //   console.log(formData);
  // };
  

  // const filehandlecourseimg = (event, fileType) => {
  //   const files = event.target.files;
  //   if (files.length > 0) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [fileType]:  files,
  //     }));
  //   }
  // };



  const filehandlefile = (event) => {
    const file = event.target.files[0]
    // console.log(file.name)
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
    console.log(formData);
  };
  console.log(formData);
  const LogoutData = localStorage.getItem("login");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }
    formDataMethod.append('key', "xxasxa"); 

    console.log("formDataMethod" , formDataMethod);
    document.querySelector(".loaderBox").classList.remove("d-none");
    // Make the fetch request
    fetch(`${process.env.REACT_APP_API_URL}api/admin/course-add-update/${id}`, {
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


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await Contactus(data);

//         if (response && response.status === true) {
//             // Handle the successful response here

//             console.log('Success ', response.message);
 
//             // Reset state variables to empty strings
        
//         } else {
//             console.error('Error in placing order:', response.statusText);
//  ;
//         }
//     } catch (error) {
//         console.error('Error in placing order:', error);

//         toast.error('An error occurred while placing the order.', {
//             position: toast.POSITION.TOP_RIGHT,
//         });
//     }
// };


  console.log("formData", formData);

  return (
    <>
      <DashboardLayout>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12 mb-2">
              <h2 className="mainTitle">
                <BackButton />
                Edit Course
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
                          label="Course Title"
                          required
                          id="title"
                          type="text"
                          placeholder="Enter Course Title"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="course_name"
                          value={formData?.course_name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Course Price"
                          required
                          id="price"
                          type="text"
                          placeholder="Enter price"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="course_price"
                          value={formData?.course_price}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Upload Course File"
                          required
                          id="file"
                          type="file"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="course_file"
                          // value={formData.image}
                          // onChange={filehandlecourseimg}
                          // onChange={(event) => filehandlecourseimg(event, "course_file")}



                          onChange={filehandlevideo}

                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Upload Course Image"
                          required
                          id="file"
                          type="file"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="image"
                          // value={formData.image}
 
                          onChange={filehandlevideo}
                          // onChange={(event) => filehandlecourseimg(event, "image")}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Upload Course Video"
                          required
                          id="file"
                          type="file"
                          accept="video/*"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="course_demo_video"
                          // value={formData.image}
                          onChange={filehandlevideo}
                          // onChange={(event) => filehandlecourseimg(event, "course_demo_video")}

                          />
                      </div>

                      <div className="col-md-6 mb-4">
                        <SelectBox
                          selectClass="mainInput"
                          name="category_id"
                          label="Course Category"
                          value={formData.category_id}
                          required
                          option={Coursecatigory}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Course Language"
                          required
                          id="course_language"
                          type="text"
                          placeholder="Enter Course Language"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="course_language"
                          value={formData?.course_language}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Course Start Date"
                          required
                          id="course_start_date"
                          type="date"
                          placeholder="Enter Course Language"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="course_start_date"
                          value={formData?.course_start_date}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Course End Date"
                          required
                          id="course_end_date"
                          type="date"
                          placeholder="Enter Course Language"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="course_end_date"
                          value={formData?.course_end_date}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-12 mb-4">
                        <div className="inputWrapper">
                          <div className="form-controls">
                            <label htmlFor="">Description</label>
                            <textarea
                              name="course_description"
                              className="form-control shadow border-0"
                              id=""
                              cols="30"
                              rows="10"
                              value={formData.course_description}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
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
