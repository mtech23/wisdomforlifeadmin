import { useState, useEffect } from "react";
import userimg from '../../Assets/images/dashboardimg.png'
import { DashboardLayout } from "../../Components/Layout/DashboardLayout/index.js";
import StatCard from "../../Components/StatsCard/index.js";
import { stats } from "../../Config/Data.js";
import { CChart } from "@coreui/react-chartjs";
import { SelectBox } from "../../Components/CustomSelect/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QRCode from "react-qr-code";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export const Dashboard = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {

    document.title = 'Wisdom For Life Admin | Dashboard';

    // document.querySelector('.loaderBox')?.classList.remove("d-none");
    const LogoutData = localStorage.getItem('login');

    // fetch('https://custom.mystagingserver.site/parcel_safe_app/public/api/admin/dashboarddata',
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${LogoutData}`
    //     },
    //   }
    // )

    //   .then(response =>
    //     response.json()
    //   )
    //   .then((data) => {
    //     document.querySelector('.loaderBox')?.classList.add("d-none");
    //     console.log(data)
    //     setStatistics(data)
    //   })
    //   .catch((error) => {
    //     document.querySelector('.loaderBox')?.classList.add("d-none");
    //     console.log(error)
    //   })

  }, []);


  const optionData = [
    {
      code: 0,
      name: 'Monthly'
    },
    {
      code: 1,
      name: 'Yearly'
    }
  ]


  console.log(statistics)






















  const [data, setData] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const inActive = () => {
    setShowModal(false)
    setShowModal2(true)
  }
  const Active = () => {
    setShowModal3(false)
    setShowModal4(true)
  }


  useEffect(() => {
    // document.querySelector('.loaderBox')?.classList.remove("d-none");
    document.title = 'Wisdom For Life Admin | User Management';
    const LogoutData = localStorage.getItem('login');

    fetch(`${base_url}/api/user/view_userdetails`,
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
        document.querySelector('.loaderBox')?.classList.add("d-none");
        console.log(data)
        setData(data.data);
      })
      .catch((error) => {
        document.querySelector('.loaderBox')?.classList.add("d-none");
        console.log(error)
      })


  }, []);
  const base_url = process.env.REACT_APP_API_URL;

  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
                  <div className="col-xl-6 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">
                          {/* <h3 className="statsNumber">{statistics.data?.total_user}</h3> */}
                          <h3 className="statsNumber">10</h3>
                          <p className="statsText"> Users File </p>
                        </div>
                      </div>
                      <div className="statsChange">
                        <p>
                          100%
                          <FontAwesomeIcon
                            icon={faArrowCircleUp}
                            className="me-2 redColor"
                          />


                        </p>
                        <p>Since last week</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">
                          {/* <h3 className="statsNumber">{statistics.data?.issue_pending}</h3> */}
                          <h3 className="statsNumber">12</h3>
                          <p className="statsText">Users Medical Reports</p>
                        </div>
                      </div>
                      <div className="statsChange">
                        <p>
                          100%
                          <FontAwesomeIcon
                            icon={faArrowCircleUp}
                            className="me-2 redColor"
                          />


                        </p>
                        <p>Since last week</p>
                      </div>
                    </div>
                  </div>

                          {/* <h3 className="statsNumber">{statistics.data?.total_issues}</h3> */}

                  {/* <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">

                          <h3 className="statsNumber">5</h3>
                          <p className="statsText">Total Subscription</p>
                        </div>
                      </div>
                      <div className="statsChange">
                        <p>
                          100%
                          <FontAwesomeIcon
                            icon={faArrowCircleUp}
                            className="me-2 redColor"
                          />


                        </p>
                        <p>Since last week</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">

 <div className="row">
    <div className="col-lg-8">

    <div className="col-xl-6 col-md-6 mb-3">
    <div className="col-lg-4 order-2 order-lg-1 mb-3">
      <div className="dashboardImage">
        <img src={userimg} alt="User" />
      </div>
    </div>
    <h4 className=" "> DR. JURADO</h4>
    {/* <p className="secondaryText">{profileData.name}</p> */}
  </div>

      <div className="row">

        
 
        <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel"> Patient Name</h4>
          <p className="secondaryText">{data?.name}</p>
          {/* <p className="secondaryText">{profileData.name}</p> */}
        </div>
        <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel">Email Address</h4>
          <p className="secondaryText">{data?.email}</p>
          {/* <p className="secondaryText">{profileData.email}</p> */}
        </div>
        <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel">Phone Number</h4>
          <p className="secondaryText">{data?.user_details?.phone_number}</p>
          {/* <p className="secondaryText">{profileData.number}</p> */}
        </div>
        <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel">Address</h4>
          <p className="secondaryText">{data?.user_details?.address}</p>
          {/* <p className="secondaryText">{profileData.country}</p> */}
        </div>
        <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel">Gender</h4>
          <p className="secondaryText">{data?.user_details?.gender?.name}</p>
          {/* <p className="secondaryText">{profileData.country}</p> */}
        </div>
        <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel">Mobile Number</h4>
          <p className="secondaryText">{data?.user_details?.mobile_number}</p>
          {/* <p className="secondaryText">{profileData.country}</p> */}
        </div>
        <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel">Age</h4>
          <p className="secondaryText">{data?.user_details?.age}</p>
          {/* <p className="secondaryText">{profileData.country}</p> */}
        </div>
        {/* <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel">Blood Group</h4>
          <p className="secondaryText">{data?.user_details?.bloodgroupdetails?.name}</p>

        </div> */}
                  {/* <p className="secondaryText">{profileData.country}</p> */}
        <div className="col-xl-6 col-md-6 mb-3">
          <h4 className="secondaryLabel">Registered On</h4>
          <p className="secondaryText">{data?.created_at}</p>
          {/* <p className="secondaryText">{profileData.postal_code}</p> */}
        </div>
        <div className="col-xl-6 mb-3">
          <h4 className="secondaryLabel">Subscription Plan</h4>
          <p className="secondaryText">{data?.subscription_plan?.name}</p>
          {/* <p className="secondaryText">{profileData.address_1}</p>  */}
        </div>
        <div className="col-xl-6 mb-3">
          <h4 className="secondaryLabel">No of File Categories</h4>
          <p className="secondaryText">{data?.user_category?.length}</p>
          {/* <p className="secondaryText">{profileData.address_1}</p>  */}
        </div>

      </div>
    </div>
    <div className="col-lg-4">
      <div className="col-md-4 mb-3 m-auto">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={`https://inteloncommand.com/medical-customer-portal/user-detail/${data?.id}`}
          viewBox={`0 0 256 256`}
          renderAs="canvas"
        />
      </div>
    </div>
  </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
