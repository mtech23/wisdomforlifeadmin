import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEye, faCheck, faTimes, faFilter, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination"
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";


import "./style.css";

export const EventList = () => {
  const base_url =  process.env.REACT_APP_API_URL
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  


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
console.log("data" , data)
  const filterData = data?.filter(item =>
    item?.name?.toLowerCase().includes(inputValue.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData?.slice(indexOfFirstItem, indexOfLastItem);


  const Eventlisting = () => {
const datas = process.env.REACT_APP_API_URL
 console.log("datas" , datas)
    const LogoutData = localStorage.getItem('login');
   
    document.querySelector('.loaderBox').classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/admin/event-listing`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LogoutData}`
        },
      }
    )

      .then(response =>
        response.json()
      )
      .then((data) => {
        console.log(data.data)
        document.querySelector('.loaderBox').classList.add("d-none");
        setData(data.data);
      })
      .catch((error) => {
        document.querySelector('.loaderBox').classList.add("d-none");
        console.log(error)
      })

  }

  useEffect(() => {
    document.title = 'Wisdon For Life Admin | Event Management';
    Eventlisting()

  }, []);

  const maleHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "image",
      title: "Image",
    },

    {
      key: "username",
      title: "Event Name",
    },

    {
      key: "Event Date",
      title: "Event Date",
    },
    {
      key: "Total Slots   ",
      title: "Total Slots  ",
    },
    {
      key: "Cost  ",
      title: "Cost  ",
    },
    {
      key: "action",
      title: "Action",
    },
  ];

  const DeleteEvent = (catId) => {
    const LogoutData = localStorage.getItem('login');
    document.querySelector('.loaderBox').classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/admin/event-delete/${catId}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LogoutData}`
        },
      }
    )

      .then(response =>
        response.json()
      )
      .then((data) => {
        console.log(data)
        document.querySelector('.loaderBox').classList.add("d-none");
        // Eventlisting()
      })
      .catch((error) => {
        document.querySelector('.loaderBox').classList.add("d-none");
        console.log(error)
      })
  }
  const hanldeRoute = () => {
    navigate('/add-event')
  }

console.log("currentItems" , currentItems)
  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row mb-3 justify-content-between">
                  <div className="col-md-4 mb-2">
                    <h2 className="mainTitle">Event Management</h2>
                  </div>
                  <div className="col-md-6 mb-2">

                    <div className="addUser d-flex  mx-auto ">
                      <CustomButton text="Add Event" variant='primaryButton' onClick={hanldeRoute} />
                      <CustomInput type="text" placeholder="Search Here..." value={inputValue} inputClass="mainInput" onChange={handleChange} className=" w-auto "/>
                    </div>

                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable
                      headers={maleHeaders}

                    >
                      <tbody>
                        {currentItems?.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={base_url + item?.image} className="avatarIcon" /></td>
                            <td className="text-capitalize">{item?.name == null ? 'No name Available' : item?.name}</td>
                            
                            <td>{item?.event_date}</td>
                            <td>{item?.total_slots}</td>
                            <td>{item?.cost}</td>
                             
                            {/* <td className={item.status == 1 ? 'greenColor' : "redColor"}>{item.status == 1 ? 'Active' : "Inactive"}</td> */}
                            <td>
                              <Dropdown className="tableDropdown">
                                <Dropdown.Toggle variant="transparent" className="notButton classicToggle">
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="tableDropdownMenu">

                                  <Link to={`/event-management/event-details/${item?.id}`} className="tableAction"><FontAwesomeIcon icon={faEye} className="tableActionIcon" />View</Link>
                                  <Link to={`/event-management/edit-event/${item?.id}`} className="tableAction"><FontAwesomeIcon icon={faEdit} className="tableActionIcon" />Edit</Link>
                                  <button type="button" className="bg-transparent border-0 ps-lg-3 pt-1" onClick={DeleteEvent(item?.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete</button>
                                  {/* <button
                                    type="button"
                                    className="bg-transparent border-0 ps-lg-3 pt-1"
                                    onClick={() => DeleteEvent(item?.id)}
                                  >
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete
                                  </button> */}
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </CustomTable>
                    <CustomPagination
                      itemsPerPage={itemsPerPage}
                      totalItems={data?.length}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
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
