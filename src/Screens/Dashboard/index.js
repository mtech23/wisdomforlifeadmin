import { useState, useEffect } from "react";
import userimg from '../../Assets/images/dashboardimg.png'
import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import StatCard from "../../Components/StatsCard/index.js";
import { stats } from "../../Config/Data";
import { CChart } from "@coreui/react-chartjs";
import { SelectBox } from "../../Components/CustomSelect";
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

    fetch(`${base_url}api/user/view_userdetails`,
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
                  <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">
                          {/* <h3 className="statsNumber">{statistics.data?.total_user}</h3> */}
                          <h3 className="statsNumber">10</h3>
                          <p className="statsText"> Total Course   </p>
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

                  <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">
                          {/* <h3 className="statsNumber">{statistics.data?.issue_pending}</h3> */}
                          <h3 className="statsNumber">12</h3>
                          <p className="statsText">Total Students </p>
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




                  <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">
                          {/* <h3 className="statsNumber">{statistics.data?.issue_pending}</h3> */}
                          <h3 className="statsNumber">12</h3>
                          <p className="statsText">Total Events </p>
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
              <div className="dashCard">
                <div className="d-flex flex-wrap justify-content-between">
                  <h3 className="mainTitle">Total Course</h3>
                  <SelectBox selectClass="mainInput" name="Monthly" required option={optionData}

                  />
                </div>
                <div className="graph-wrapper">
                  <CChart
                    type="line"
                    height="90"
                    options={{
                      scales: {
                        y: {
                          suggestedMin: 0,
                          suggestedMax: 40,
                        },
                      },
                    }}
                    data={{
                      labels: ["Nov 2010"],
                      tension: "0.5",
                      datasets: [
                        {
                          label: "Active Users",

                          backgroundColor: "rgb(0 41 59 / 81%)",
                          borderColor: "#00293B",
                          pointBackgroundColor: "#00293B",
                          pointBorderColor: "#00293B",
                          borderWidth: 1,
                          data: [35],
                          tension: 0.5,
                        },
                        {
                          label: "Inactive Users",
                          backgroundColor: "rgb(1 22 215 / 81%)",
                          borderColor: "#0116d7",
                          pointBackgroundColor: "#0116d7",
                          borderWidth: 1,
                          pointBorderColor: "#0116d7",
                          data: [20],
                          tension: 0.5,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
