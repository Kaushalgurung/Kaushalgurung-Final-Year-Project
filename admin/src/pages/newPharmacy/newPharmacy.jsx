import "./newPharmacy.css";

export default function NewPharmacy() {
  return (
    <div className="newPharmacy">
      <h1 className="addPharmacyTitle">New Pharmacy</h1>
      <form className="addPharmacyForm">
        <div className="addPharmacyItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addPharmacyItem">
          <label>Pharmacy Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="addPharmacyItem">
          <label>Phone no:</label>
          <input type="text" placeholder="+977 98........" />
        </div>
        <div className="addPharmacyItem">
          <label>Patnered</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addPharmacyButton">Add</button>
      </form>
    </div>
  );
}