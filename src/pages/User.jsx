import React from "react";
import { useQuery } from "react-query";
import { serverUrl } from "../../utils/config";

const User = () => {
  const { data, isLoading } = useQuery(["me"], () =>
    axios.get(`${serverUrl}/api/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
  );

  return (
    <div class="container p-5">
      <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="card h-100">
            <div class="card-body">
              <div class="account-settings">
                <div class="user-profile">
                  <h5 class="user-name">{data?.data.name}</h5>
                  <h6 class="user-email">{data?.data.email}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div class="card h-100">
            <div class="card-body">
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 class="mb-2 text-primary">Change Name</h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="fullName">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="fullName"
                      placeholder="Enter new name"
                    />
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="text-right">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      class="btn btn-primary"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 class="mt-3 mb-2 text-primary">Change password</h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                  <div class="form-group">
                    <label for="Street">Old Password</label>
                    <input
                      type="name"
                      class="form-control"
                      id="Street"
                      placeholder="Enter Old Password"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"></div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                  <div class="form-group">
                    <label for="sTate">New Password</label>
                    <input
                      type="text"
                      class="form-control"
                      id="sTate"
                      placeholder="Enter New Password"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"></div>
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="text-right">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      class="btn btn-primary"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
