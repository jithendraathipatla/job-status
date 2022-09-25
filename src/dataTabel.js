import { Table } from "antd";
import React from "react";
import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  SyncOutlined,
  WarningTwoTone,
} from "@ant-design/icons";
import { Space } from "antd";

const columns = [
  //   {
  //     key: 1,
  //     title: "Job_type",
  //     dataIndex: "jobtypeid",
  //     render: (text) => <a>{text}</a>,
  //   },
  {
    key: 2,
    title: "Job Type",
    dataIndex: "jobtypeid",
    render: (jobtypeid) => (
      <div>
        {jobtypeid === "2" ? (
          "CREO"
        ) : (
          <>
            {jobtypeid === "3" ? (
              "Report"
            ) : (
              <>
                {jobtypeid === "4" ? (
                  "ppbip"
                ) : (
                  <> {jobtypeid === "7" ? "Creo_egs" : "gpb"}</>
                )}
              </>
            )}
          </>
        )}
      </div>
    ),
  },

  {
    key: 4,
    title: "Starting Time",
    dataIndex: "startprocess",
    render: (startprocess) => (
      <div>{startprocess != null ? startprocess : "NULL"}</div>
    ),
  },
  {
    key: 5,
    title: "Finished at",
    dataIndex: "endprocess",
    render: (endprocess) => (
      <div>{endprocess != null ? endprocess : "NULL"}</div>
    ),
  },
  {
    key: 3,
    title: "status",
    dataIndex: "statusid",
    render: (statusid) => (
      <div>
        {statusid === "5" ? 
          <Space>
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{
                fontSize: "32px",
              }}
            />
          </Space>
        : <> 
          
            {statusid === "4" ? 
              <space>
                <SyncOutlined
                  spin
                  style={{
                    fontSize: "32px",
                  }}
                />
              </space>
             : 
              <space>
                <WarningTwoTone twoToneColor="#eb2f96" style={{
                    fontSize: "32px",
                  }}/>
              </space>
            }
          </>
        }
      </div>
    ),
    key: "age",
    responsive: ["md"],
  },
];

const data = JSON.parse(localStorage.getItem("globaldata"));

const App = () => <Table columns={columns} dataSource={data} />;

export default App;
