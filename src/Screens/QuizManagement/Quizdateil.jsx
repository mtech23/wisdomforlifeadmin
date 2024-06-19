import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faEye,
  faCheck,
  faTimes,
  faFilter,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const QuizDateil = () => {
  const { id } = useParams();

  // const base_url = process.env.REACT_APP_API_URL;
  const base_url = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [message, setMessage] = useState(false);

  // console.log("datadetil", data[0]?.course_detail);
  const inActive = () => {
    setShowModal(false);
    setShowModal2(true);
  };
  const Active = () => {
    setShowModal3(false);
    setShowModal4(true);
  };

  //   const quizdetail = () => {
  //     const LogoutData = localStorage.getItem("login");
  //     console.log("LogoutData", LogoutData);
  //     document.title = "IRV Segal Admin | Quiz Detail";
  //     document.querySelector(".loaderBox").classList.remove("d-none");
  //     fetch(`${process.env.REACT_APP_BASE_URL}api/bookquestions/${id}`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${LogoutData}`,
  //       },
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.log(data);

  //         setData(data.data);
  //       })
  //       .catch((error) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.log(error);
  //       });
  //   };

  //   useEffect(() => {
  //     const LogoutData = localStorage.getItem("login");
  //     console.log("LogoutData", LogoutData);
  //     document.title = "Tim Admin | Book Detail";
  //     document.querySelector(".loaderBox").classList.remove("d-none");
  //     fetch(`${process.env.REACT_APP_API_URL}api/admin/course-view/${id}`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${LogoutData}`,
  //       },
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.log(data);

  //         setData(data.data);
  //       })
  //       .catch((error) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.log(error);
  //       });
  //   }, [id]);

  const quizdetail = () => {
    // const baseUrl = process.env.REACT_APP_BASE_URL;
    // console.log("bae Url", baseUrl);
    const LogoutData = localStorage.getItem("login");
    console.log("LogoutData", LogoutData);
    document.title = "IRV Segal Admin | Quiz Detail";
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${base_url}api/admin/course-quiz-question-listing/${id}`, {
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
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  useEffect(() => {
    quizdetail();
  }, [id]);
  console.log(data);
  const navigate = useNavigate();

  const EditQuiz = (id) => {
    navigate(`/quiz-management/edit-quiz/${id}`);
  };
  const DeleteQuiz = (catId) => {
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${base_url}api/admin/delete-course-quiz-question/${catId}`, {
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
        quizdetail();
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  return (
    <>
      <DashboardLayout>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12 mb-2">
              <h2 className="mainTitle">
                <BackButton />
                Quiz Details
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="row">
                {data.map((item, index) => (
                  <div key={item.id} className="col-md-8 mb-4">
                    <div className=" gap-2 d-flex">
                      {" "}
                      <FontAwesomeIcon
                        type="btn"
                        onClick={() => DeleteQuiz(item?.id)}
                        icon={faTrash}
                      ></FontAwesomeIcon>{" "}
                      <FontAwesomeIcon
                        onClick={() => EditQuiz(item?.id)}
                        icon={faEdit}
                        className="tableActionIcon"
                      />
                      <div className=" d-flex gap-3">
                        {" "}
                        <p className="secondaryText">Course:</p>{" "}
                        <p className="correctopction">
                          {" "}
                          {item?.course_detail?.course_name}{" "}
                        </p>
                      </div>
                    
                    </div>
                    <div className=" d-flex gap-3">
                      {" "}
                      <p className="secondaryText">Question {index + 1} : </p>
                      <p>{item.question} </p>
                    </div>
                    {["a", "b", "c", "d"].map((option, optIndex) => (
                      <div key={optIndex} className="d-flex">
                        <p className="secondaryText me-2">
                          Option {option.toUpperCase()}:
                        </p>
                        <p>{item.options[optIndex].text}</p>
                        {/* {item.options.map((qst, index) => (
                          <p>{qst.text}</p>
                        ))} */}
                      </div>
                    ))}

                    <div className=" d-flex gap-3">
                      {" "}
                      <p className="secondaryText">Correct Option:</p>{" "}
                      <p className="correctopction"> {item?.correct_option} </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="row mb-3 justify-content-end">
                <div className="col-lg-4 text-end order-1 order-lg-2 mb-3">
                  <button onClick={() => {
                    data?.status ? setShowModal(true) : setShowModal3(true)
                  }} className="notButton primaryColor fw-bold text-decoration-underline">Mark as {data?.status ? 'Inactive' : 'Active'}</button>
                  <span className={`statusBadge ${data?.status == 1 ? 'statusBadgeActive' : 'statusBadgeInactive'}`}>{data?.status == 1 ? 'Active' : 'Inactive'}</span>
                </div>
              </div> */}

              {/* <div className="row">
                <div className="col-md-12 text-center mb-5">
                  <h1 className="text-capitalize">{data?.title}</h1>
                </div>
                <div className="col-md-4 mb-4">
                  {data?.image && data?.image ? (
                    <div className="productImage">
                      <img src={base_url + data?.image} />
                    </div>
                  ) : (
                    <h3>No Image Available</h3>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="productInfo">
                    <h3 className="text-capitalize">{data?.course_name}</h3>
                    <p className="text-capitalize">{data?.course_price}</p>

                    <p className="text-capitalize">{data?.course_language}</p>
                    <p className="text-capitalize">{data?.course_start_date}</p>

                    <p className="text-capitalize">{data?.phone_number}</p>
                    <p>{data?.course_description}</p>
                  </div>
                </div>
              </div> */}
            </div>
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
          action={Active}
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
      </DashboardLayout>
    </>
  );
};
