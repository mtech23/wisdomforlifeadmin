import { useState, useEffect } from "react";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomInput from "../../Components/CustomInput";
import { SelectBox } from "../../Components/CustomSelect";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";
export const AddQuiz = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  
  const [inputValue, setInputValue] = useState('');
  const [questionType, setQuestionType] = useState('1'); 

  const base_url = process.env.REACT_APP_API_URL
  const navigate = useNavigate();

  const hanldeRoute = () => {
      navigate('/add-product')
  }
  const inActive = () => {
      setShowModal(false)
      setShowModal2(true)
  }
  const ActiveMale = () => {
      setShowModal3(false)
      setShowModal4(true)
  }

  const handleChange = (e) => {
      setInputValue(e.target.value);
  }

  const filterData = data.filter(item =>
      item?.first_name?.toLowerCase().includes(inputValue.toLowerCase())
  );

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
      document.title = 'Certifires | User Management';
      // UserData()

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
      { id: 1, name: 'Engine' },
      { id: 2, name: 'Brakes' },
      { id: 3, name: 'Lights' },
      { id: 4, name: 'Tires' },

  ];
  const handleQuestionTypeChange = (value) => {
      setQuestionType(value);
  };
  return (
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



    <>
    <DashboardLayout>
        <div className="container-fluid">
            <div className="row mb-3">
                <div className="col-12">
                    <div className="dashCard">
                        <div className="row mb-3 justify-content-between">
                            <div className="col-md-6 mb-2">
                                <h2 className="mainTitle">Create a Question</h2>
                            </div>
                            {/* <div className="col-md-6 mb-2">
                                <div className="addUser">
                                    <CustomInput type="text" placeholder="Search Here..." value={inputValue} inputClass="mainInput" onChange={handleChange} />
                                </div>
                            </div> */}
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6 col-sm-12 ">
                                <SelectBox selectClass="mainInput" name="Select category" labelClass='mainLabel' label="Category" required option={initialCategories}/>
                            </div>
                            <div class="col-md-6 col-sm-12 ">
                                <SelectBox selectClass="mainInput" name="Select sub category" labelClass='mainLabel' label="Sub Category" required option={initialCategories}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12">
                                <CustomInput
                                    label='Question'
                                    required
                                    id='userEmail'
                                    type='text'
                                    placeholder='Enter Question'
                                    labelClass='mainLabel'
                                    inputClass='mainInput'
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div class="col-md-5 col-sm-7 col-xs-12">
                                <label className="mainLabel">Question Type</label>
                                <div className="btn-group">
                                    <label className={`btn btn-default ${questionType === '1' ? '' : ''}`}>
                                        <input className="primaryButton" type="radio" name="question_type" value="1" checked={questionType === '1'} onChange={() => handleQuestionTypeChange('1')} /> Options
                                    </label>
                                    <label className={`btn btn-default ${questionType === '2' ? '' : ''}`}>
                                        <input type="radio" name="question_type" value="2" checked={questionType === '2'} onChange={() => handleQuestionTypeChange('2')} /> True / False
                                    </label>
                                </div>
                            </div>
                        </div>
                        <label className="mainLabel">Options</label>
                        <div className="row mb-3 mt-3">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className={`col-md-6 col-sm-12 ${questionType === '2' && index > 1 ? 'hidden' : ''}`}>
                                    <div className="d-flex gap-3 ">
                                        <label className="mainLabel mr-2">{String.fromCharCode(65 + index)}</label>
                                        <CustomInput
                                            id={`userEmail${index}`}
                                            type="text"
                                            inputClass='mainInput'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <CustomButton variant='primaryButton' text='Create Now' type='submit' />
                    </div>
                </div>
            </div>

            <CustomModal show={showModal} close={() => { setShowModal(false) }} action={inActive} heading='Are you sure you want to mark this user as inactive?' />
            <CustomModal show={showModal2} close={() => { setShowModal2(false) }} success heading='Marked as Inactive' />
            <CustomModal show={showModal3} close={() => { setShowModal3(false) }} action={ActiveMale} heading='Are you sure you want to mark this user as Active?' />
            <CustomModal show={showModal4} close={() => { setShowModal4(false) }} success heading='Marked as Active' />
        </div>
    </DashboardLayout>
</>
  );
};
