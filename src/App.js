import { Descriptions, PageHeader, Layout, Menu, Card, Col, Row, Statistic,Progress } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import DataTabelComponent from "./dataTabel";
import { ArrowDownOutlined, ScheduleOutlined, LikeOutlined, DislikeOutlined} from '@ant-design/icons';
//import Clock from 'react-live-clock';

const { Header, Content, Footer } = Layout;
const navpath = ["Home", "Creo_egs", "Creo", "ppbip", "reports"];

function App() {
  const [ButtonName, setButtonName] = useState("Home");
  const [Data, setData] = useState();
  const [ErrorJobs, setErrorJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/", { crossdomain: true })
      .then((response) => {
        setData(response.data.recordset);
        localStorage.setItem(
          "globaldata",
          JSON.stringify(response.data.recordset)
        );
      });
  }, []);
 
  const data = JSON.parse(localStorage.getItem("globaldata"));

 
  const findingSuccessfull = data.filter(item => {
    return item.statusid === "5";
  });

  const findingErrors = data.filter(item => {
    return item.statusid != "5";
  });

 
 
  //console.log(findingErrors.length)
  console.log(data.length/findingSuccessfull.length*100)
  return (
    <Layout className="layout" >
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navpath.map((i, index) => {
            const key = index + 1;
            return {
              key,
              label: <span onClick={() => setButtonName(i)}> {[i]}</span>,
            };
          })}
        />
      </Header>

      <Content
        style={{
          padding: "0 10rem",
        }}
      >
        <br/>
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={4}>
              <Card>
                <Statistic
                  title="Total Jobs"
                  value={data.length}
                  valueStyle={{
                    //color: "#cf1322",
                    padding: "40px 36px"
                  }}
                  prefix={<ScheduleOutlined />}
                  
                />
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <Statistic
                  title="Successfull jobs"
                  value={findingSuccessfull.length}
                 
                  valueStyle={{
                    color: "#3f8600",
                    padding: "40px 36px"
                  }}
                  prefix={<LikeOutlined />}
                 
                />
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <Statistic
                  title="Errors"
                  value={findingErrors.length}
                 
                  valueStyle={{
                    color: "#cf1322",
                    padding: "40px 36px"
                  }}
                  prefix={<DislikeOutlined />}
            
                />
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <>Success Rate</>
                <br/>
              <Progress type="circle" style={{fontSize: "2rem"}}  percent={(100 * findingSuccessfull.length) / data.length} />
                  
                
              
              </Card>
              </Col>

              <PageHeader
      className="site-page-header"
      
      title="Latest Job time:"
      subTitle="jj"
      
    />
          </Row>
        </div>
        <br/>
        {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> */}
        <div className="site-layout-content">
          <DataTabelComponent />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
