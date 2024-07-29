import { useState, useEffect } from "react";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomInput from "../../Components/CustomInput";
import { SelectBox } from "../../Components/CustomSelect";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";
export const EditQuiz = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const [inputValue, setInputValue] = useState("");
  const [questionType, setQuestionType] = useState("1");

  const { id } = useParams();
  // const [formData, setFormData] = useState({});
  const [formData, setFormData] = useState({
    // options: ["", "", "", ""],
    // correct_option: "",
    // quiz_id: 1,
    // course_id: 1,
    // question: "",
  });
  console.log("formData", formData);
  const [courses, setCourseslists] = useState([]);

  const base_url = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const hanldeRoute = () => {
    navigate("/add-product");
  };
  const inActive = () => {
    setShowModal(false);
    setShowModal2(true);
  };
  const ActiveMale = () => {
    setShowModal3(false);
    setShowModal4(true);
  };

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   const options = [
  //     formData.option_a,
  //     formData.option_b,
  //     formData.option_c,
  //     formData.option_d,
  //   ];

  //   // const { course_id, question, correct_option } = formData;

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     options,
  //     [name]: value,
  //   }));

  //   console.log(formData);
  //   console.log("options array", options);
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   // if (name.startsWith("option_")) {
  //   //   const index = parseInt(name.split("_")[1], 10);
  //   //   setFormData((prevData) => {
  //   //     const updatedOptions = [...prevData.options];
  //   //     updatedOptions[index] = value;
  //   //     return { ...prevData, options: updatedOptions };
  //   //   });
  //   // } else {
  //   //   setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     // }));
  //   // }

  //   console.log(formData);
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   console.log(formData);
  // };



  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => {
      // Handle radio buttons
      if (name === "correct_option") {
        return {
          ...prevData,
          correct_option: parseInt(value),
        };
      }

      // Handle text inputs for options
      else if (name.startsWith("option_")) {
        const index = parseInt(name.split("_")[1], 10);
        return {
          ...prevData,
          options: prevData.options.map((item, idx) =>
            idx === index ? { ...item, text: value } : item
          ),
        };
      }



      // Handle other input changes
      else {
        return {
          ...prevData,
          [name]: value,
        };
      }

      return prevData;
    });

    console.log(formData); // This will log the previous state, as setState is asynchronous
  };
  // const filterData = data?.filter((item) =>
  //   item?.first_name?.toLowerCase().includes(inputValue.toLowerCase())
  // );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const data = await Get_user_listing();
  //             setData(data?.data);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  useEffect(() => {
    document.title = "Certifires | User Management";
    // UserData()
  }, []);

  const courseslist = () => {
    const datas = process.env.REACT_APP_API_URL;
    console.log("datas", datas);
    const LogoutData = localStorage.getItem("login");

    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/admin/course-listing`, {
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
        // setFormData(data?.data)
        setCourseslists(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  useEffect(() => {
    courseslist();
  }, []);

  const maleHeaders = [
    {
      key: 1,
      title: "ID",
    },

    {
      key: 2,
      title: "Category Name",
    },

    {
      key: 3,
      title: "Status",
    },
    {
      key: 4,
      title: "Total Question",
    },
    {
      key: 5,
      title: "Opration",
    },
  ];

  const initialCategories = [
    { id: 1, name: "Engine" },
    { id: 2, name: "Brakes" },
    { id: 3, name: "Lights" },
    { id: 4, name: "Tires" },
  ];
  const handleQuestionTypeChange = (value) => {
    setQuestionType(value);
  };

  // const Addquestions = async (data) => {
  //   console.log(data);
  //   try {
  //     const res = await fetch(
  //       `${base_url}api/admin/course-quiz-question-add-update`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("login")}`,
  //         },
  //         body: data,
  //       }
  //     );
  //     console.log(res, "res");
  //     // Ensure response is ok before proceeding

  //     const productData = await res.json(); // Parse response JSON
  //     console.log(productData, "res");
  //     if (!res.ok) {
  //       // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
  //     } else {
  //       console.log("productData?.msg", productData?.msg);
  //       // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
  //     }

  //     return productData; // Return parsed data
  //   } catch (error) {
  //     // toastAlert(error, ALERT_TYPES.ERROR); // Handle error
  //     console.log("error", error);
  //     throw error; // Rethrow error to be handled by caller
  //   }
  // };
  const Addquestions = async (data) => {
    console.log(data);
    try {
      const res = await fetch(
        `${base_url}api/admin/course-quiz-question-add-update`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("login")}`,
          },
          body: data,
        }
      );
      console.log(res, "res");

      const productData = await res.json();
      console.log(productData, "res");
      if (!res.ok) {
        // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
      } else {
        console.log("productData?.msg", productData?.msg);
        // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
      }

      return productData;
    } catch (error) {
      // toastAlert(error, ALERT_TYPES.ERROR);
      console.log("error", error);
      throw error;
    }
  };




  const Editquestions = async (id, data) => {
    console.log(data);
    try {
      const res = await fetch(
        `${base_url}api/admin/course-quiz-question-add-update/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("login")}`,
          },
          body: data,
        }
      );
      console.log(res, "res");

      const productData = await res.json();
      console.log(productData, "res");
      if (!res.ok) {
        // toastAlert(productData?.msg, ALERT_TYPES.ERROR);
      } else {
        console.log("productData?.msg", productData?.msg);
        // toastAlert(productData?.msg, ALERT_TYPES.SUCCESS);
      }

      return productData;
    } catch (error) {
      // toastAlert(error, ALERT_TYPES.ERROR);
      console.log("error", error);
      throw error;
    }
  };

  // const handleSubmit = async (event) => {
  //   console.log("form data ", formData);
  //   event.preventDefault();

  //   document.querySelector(".loaderBox").classList.remove("d-none");
  //   const formDataMethod = new FormData();
  //   for (const key in formData) {
  //     formDataMethod.append(key, formData[key]);
  //   }

  //   document.querySelector(".loaderBox").classList.remove("d-none");
  //   // Make the fetch request

  //   try {
  //     const response = await Addquestions(formDataMethod);

  //     if (response?.status == true) {
  //       navigate("/quiz-management");
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error("Error in adding model post:", error);
  //   }
  // };
  const handleSubmit = async (event) => {
    console.log("form data ", formData);
    event.preventDefault();

    document.querySelector(".loaderBox").classList.remove("d-none");
    const formDataMethod = new FormData();
    for (const key in formData) {
      if (key === "options") {
        // Append each option separately
        formData[key].forEach((option, index) => {
          formDataMethod.append(`options[${index}]`, option);
        });
      } else {
        formDataMethod.append(key, formData[key]);
      }
    }

    document.querySelector(".loaderBox").classList.remove("d-none");

    try {
      const response = await Editquestions(id, formDataMethod);

      if (response?.status === true) {
        navigate("/quiz-management");
      } else {
      }
    } catch (error) {
      console.error("Error in adding model post:", error);
    }
  };

  const quizdetail = () => {
    // const baseUrl = process.env.REACT_APP_BASE_URL;
    // console.log("bae Url", baseUrl);
    const LogoutData = localStorage.getItem("login");
    console.log("LogoutData", LogoutData);
    document.title = "IRV Segal Admin | Quiz Detail";
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${base_url}api/admin/course-quiz-question-view/${id}`, {
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
        console.log(data);

        setData(data.data);
        // console.log("setFormData" , data)
        setFormData(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };
  useEffect(() => {
    quizdetail();
  }, [id]);
  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="dashCard">
                  <div className="row mb-3 justify-content-between">
                    <div className="col-md-6 mb-2">
                      <h2 className="mainTitle">
                        <BackButton /> Edit a Question
                      </h2>
                    </div>
                    {/* <div className="col-md-6 mb-2">
                                <div className="addUser">
                                    <CustomInput type="text" placeholder="Search Here..." value={inputValue} inputClass="mainInput" onChange={handleChange} />
                                </div>
                            </div> */}
                  </div>
                  <div class="row align-items-center"></div>
                  <div className="row mb-3">
                    <div class="col-md-6 col-sm-12 ">


                      <SelectBox
                        selectClass="mainInput"
                        name="course_id"
                        labelClass="mainLabel"
                        label="Select Course"
                        required
                        value={formData?.course_id} // Adjusted to course_id
                        option={courses?.map((course) => ({
                          id: course.id,
                          name: course.course_name,
                        }))}
                        onChange={handleChange}
                      />
                    </div>

                    {/* <div className="col-6">
                      <CustomInput
                        label="Question Points"
                        required
                        id="userEmail"
                        name="points"
                        type="text"
                        placeholder="Enter points "
                        labelClass="mainLabel"
                        inputClass="mainInput"
                        onChange={handleChange}
                      />
                    </div> */}

                    <div className="col-6">
                      <CustomInput
                        label="Question"
                        required
                        id="userEmail"
                        name="question"
                        type="text"
                        placeholder="Enter Question"
                        labelClass="mainLabel"
                        value={formData.question}
                        inputClass="mainInput"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <label className="mainLabel">Options</label>
                  <div className="row mb-3 mt-3">
                    {formData?.options?.map((item, index) => (
                      <div
                        key={item.id}
                        className={`col-md-6 col-sm-12 ${questionType === "2" && index > 1 ? "hidden" : ""}`}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <label className="mainLabel mr-2">
                            {String.fromCharCode(65 + index)} {/* Converts index to A, B, C, D */}
                          </label>
                          <CustomInput
                            id={`userEmail${index}`}
                            type="text"
                            inputClass="mainInput"
                            name={`option_${index}`}
                            value={item.text}
                            onChange={(e) => handleChange(e, index)}
                          />
                          <input
                            name="correct_option"
                            type="radio"
                            value={index}
                            checked={formData.correct_option === index}
                            onChange={() => handleChange({ target: { name: 'correct_option', value: index } })}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <CustomButton
                    variant="primaryButton"
                    text="Update Now"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>

          <CustomModal
            show={showModal}
            close={() => {
              setShowModal(false);
            }}
            action={inActive}
            heading="Are you sure you want to mark this user as inactive?"
          />
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
    // <>
    //   <DashboardLayout>
    //     <div className="dashCard mb-4">
    //       <div className="row mb-3">
    //         <div className="col-12 mb-2">
    //           <h2 className="mainTitle">
    //             <BackButton />
    //             Create a Question
    //           </h2>
    //         </div>
    //       </div>
    //       <div className="row mb-3">
    //         <div className="col-12">
    //           <form onSubmit={handleSubmit}>
    //             <div className="row">
    //               <div className="col-lg-12">
    //                 <div className="row">
    //                   <div className="col-md-6 mb-4">
    //                     <CustomInput
    //                       label="Course Title"
    //                       required
    //                       id="title"
    //                       type="text"
    //                       placeholder="Enter Course Title"
    //                       labelClass="mainLabel"
    //                       inputClass="mainInput"
    //                       name="course_name"
    //                       value={formData?.course_name}
    //                       onChange={handleChange}
    //                     />
    //                   </div>

    //                   <div className="col-md-6 mb-4">
    //                     <CustomInput
    //                       label="Course Price"
    //                       required
    //                       id="price"
    //                       type="text"
    //                       placeholder="Enter price"
    //                       labelClass="mainLabel"
    //                       inputClass="mainInput"
    //                       name="course_price"
    //                       value={formData?.course_price}
    //                       onChange={handleChange}
    //                     />
    //                   </div>

    //                   <div className="col-md-6 mb-4">
    //                     <CustomInput
    //                       label="Upload Course File"

    //                       id="file"
    //                       type="file"
    //                       labelClass="mainLabel"
    //                       inputClass="mainInput"
    //                       name="course_file"
    //                       // value={formData.image}
    //                       onChange={filehandleChange}
    //                     />
    //                   </div>

    //                   <div className="col-md-6 mb-4">
    //                     <CustomInput
    //                       label="Upload Course Image"

    //                       id="file"
    //                       type="file"
    //                       labelClass="mainLabel"
    //                       inputClass="mainInput"
    //                       name="image"
    //                       // value={formData.image}
    //                       onChange={filehandleChange}
    //                     />
    //                   </div>

    //                   <div className="col-md-6 mb-4">
    //                     <CustomInput
    //                       label="Upload Course Video"

    //                       id="file"
    //                       type="file"
    //                       accept="video/*"
    //                       labelClass="mainLabel"
    //                       inputClass="mainInput"
    //                       name="course_demo_video"
    //                       // value={formData.image}
    //                       onChange={filehandleChange}
    //                     />
    //                   </div>

    //                   <div className="col-md-6 mb-4">

    //                     <SelectBox
    //                       selectClass="mainInput"
    //                       name="category_id"
    //                       label="Course Category"
    //                       value={formData.category_id}
    //                       required
    //                       option={Coursecatigory}
    //                       onChange={handleChange}
    //                     />
    //                   </div>

    //                   <div className="col-md-6 mb-4">
    //                     <CustomInput
    //                       label="Course Language"
    //                       required
    //                       id="course_language"
    //                       type="text"
    //                       placeholder="Enter Course Language"
    //                       labelClass="mainLabel"
    //                       inputClass="mainInput"
    //                       name="course_language"
    //                       value={formData?.course_language}
    //                       onChange={handleChange}
    //                     />
    //                   </div>

    //                   <div className="col-md-6 mb-4">
    //                     <CustomInput
    //                       label="Course Start Date"
    //                       required
    //                       id="course_start_date"
    //                       type="date"
    //                       placeholder="Enter Course Language"
    //                       labelClass="mainLabel"
    //                       inputClass="mainInput"
    //                       name="course_start_date"
    //                       value={formData?.course_start_date}
    //                       onChange={handleChange}
    //                     />
    //                   </div>

    //                   <div className="col-md-6 mb-4">
    //                     <CustomInput
    //                       label="Course End Date"
    //                       required
    //                       id="course_end_date"
    //                       type="date"
    //                       placeholder="Enter Course Language"
    //                       labelClass="mainLabel"
    //                       inputClass="mainInput"
    //                       name="course_end_date"
    //                       value={formData?.course_end_date}
    //                       onChange={handleChange}
    //                     />
    //                   </div>
    //                   <div className="col-md-12 mb-4">
    //                   <p className="gap-2 d-flex">
    //                   Certificate
    //                                             <input
    //                                                 className="m-lg-2"
    //                                                 onClick={handleChange}
    //                                                 type="checkbox"
    //                                                 id="currently_working_check"
    //                                                 name="is_certified"
    //                                                 checked={checkpermission}
    //                                             />
    //                                         </p>
    //                                         </div>
    //                   <div className="col-md-12 mb-4">
    //                     <div className="inputWrapper">
    //                       <div className="form-controls">
    //                         <label htmlFor="">Description</label>
    //                         <textarea
    //                           name="course_description"
    //                           className="form-control shadow border-0"
    //                           id=""
    //                           cols="30"
    //                           rows="10"
    //                           value={formData.course_description}
    //                           onChange={handleChange}
    //                         ></textarea>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="col-md-12">
    //                     <CustomButton
    //                       variant="primaryButton"
    //                       text="Submit"
    //                       type="submit"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>

    //     <CustomModal
    //       show={showModal}
    //       close={() => {
    //         setShowModal(false);
    //       }}
    //       success
    //       heading="Course added Successfully."
    //     />
    //   </DashboardLayout>
    // </>
  );
};
