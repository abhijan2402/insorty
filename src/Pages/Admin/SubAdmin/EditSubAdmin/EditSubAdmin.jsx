import React from "react";

const EditSubAdmin = () => {
  return (
    <section>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="EditSubAdmin" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="EditSubAdmin"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Sub Admin Info</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EditSubAdmin;
