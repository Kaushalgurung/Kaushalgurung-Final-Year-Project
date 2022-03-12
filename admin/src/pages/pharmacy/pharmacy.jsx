import { Link } from "react-router-dom";
import "./pharmacy.css";
import Chart from "../../components/chart/chart"
import {pharmacyData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Pharmacy() {
  return (
    <div className="pharmacy">
      <div className="pharmacyTitleContainer">
        <h1 className="pharmacyTitle">Pharmacy</h1>
        <Link to="/newpharmacy">
          <button className="pharmacyAddButton">Create</button>
        </Link>
      </div>
      <div className="pharmacyTop">
          <div className="pharmacyTopLeft">
              <Chart data={pharmacyData} dataKey="Orders" title="Order Performance"/>
          </div>
          <div className="pharmacyTopRight">
              <div className="pharmacyInfoTop">
                  <img src="https://th.bing.com/th/id/R.c766db80f1485c58547ee5dd601fd1e9?rik=qADkv2QCj4MMng&pid=ImgRaw&r=0" alt="" className="pharmacyInfoImg" />
                  <span className="pharmacyName">Pharmacy</span>
              </div>
              <div className="pharmacyInfoBottom">
                  <div className="pharmacyInfoItem">
                      <span className="pharmacyInfoKey">id:</span>
                      <span className="pharmacyInfoValue">123</span>
                  </div>
                  <div className="pharmacyInfoItem">
                      <span className="pharmacyInfoKey">orders:</span>
                      <span className="pharmacyInfoValue">5123</span>
                  </div>
                  <div className="pharmacyInfoItem">
                      <span className="pharmacyInfoKey">active:</span>
                      <span className="pharmacyInfoValue">yes</span>
                  </div>
                  <div className="pharmacyInfoItem">
                      <span className="pharmacyInfoKey">Status:</span>
                      <span className="pharmacyInfoValue">Open</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="pharmacyBottom">
          <form className="pharmacyForm">
              <div className="pharmacyFormLeft">
                  <label>Pharmacy Name</label>
                  <input type="text" placeholder="Name" />
                  <label>Status</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Open</option>
                      <option value="no">Close</option>
                  </select>
                  <label>Patnered
                  </label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="pharmacyFormRight">
                  <div className="pharmacyUpload">
                      <img src="https://th.bing.com/th/id/R.c766db80f1485c58547ee5dd601fd1e9?rik=qADkv2QCj4MMng&pid=ImgRaw&r=0" alt="" className="pharmacyUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="pharmacyButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}