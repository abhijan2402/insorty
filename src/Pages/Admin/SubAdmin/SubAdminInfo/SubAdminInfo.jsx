import React from "react";

const SubAdminInfo = () => {
  return (
    <section>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="SubAdminInfo" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative" style={{ maxWidth: "700px" }}>
          <label
            htmlFor="SubAdminInfo"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Rahul wine shop / राहुल शराब की दुकान
          </h3>
          <div className="py-4 divider"></div>

          <div>
            <div className="overflow-x-auto flex  gap-6 flex-wrap">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" defaultValue={"Rahul"} disabled />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="text" defaultValue={"+91484564454475"} disabled />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" defaultValue={"6+4586454"} disabled />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirem Password</span>
                </label>
                <input type="text" defaultValue={"6+4586454"} disabled />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Adderss</span>
                </label>
                <input type="text" defaultValue={"45A sadar nagar "} disabled />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pin</span>
                </label>
                <input type="text" defaultValue={"9254214"} disabled />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input type="text" defaultValue={"Mumbai"} disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubAdminInfo;
