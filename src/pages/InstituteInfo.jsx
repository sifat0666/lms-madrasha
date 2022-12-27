import React from "react";

const InstituteInfo = () => {
  return (
    <div>
      <section class="instituteinfo-section user-form-section">
        <div class="section-bg">
          <div class="section-title">
            <h4>প্রতিষ্ঠানের তথ্য</h4>
          </div>
          <div class="row">
            <div class="col-md-12 d-block">
              <div class="row">
                <div class="col-md-12 w-100">
                  <div class="main-container">
                    <div class="my-4">
                      <div class="info-button">
                        <div class="custon-btn">বাংলা</div>
                        <div class="custon-btn">Arabic</div>
                      </div>
                      <form class="intitute-form">
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label info-lable">
                            প্রতিষ্ঠানের নামঃ
                          </label>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বাংলা"
                            />
                          </div>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আরবি"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label info-lable">
                            সংক্ষিপ্ত ঠিকানাঃ
                          </label>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বাংলা"
                            />
                          </div>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আরবি"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label info-lable">
                            যোগাযোগ নাম্বারঃ
                          </label>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="tel"
                              class="form-control"
                              placeholder="বাংলা"
                            />
                          </div>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="tel"
                              class="form-control"
                              placeholder="আরবি"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label info-lable">
                            গ্রামঃ
                          </label>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বাংলা"
                            />
                          </div>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আরবি"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label info-lable">
                            ডাকঃ
                          </label>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বাংলা"
                            />
                          </div>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আরবি"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label info-lable">
                            থানাঃ
                          </label>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বাংলা"
                            />
                          </div>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আরবি"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label info-lable">
                            জেলাঃ
                          </label>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বাংলা"
                            />
                          </div>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আরবি"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label info-lable">
                            ইলহাকঃ
                          </label>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="বাংলা"
                            />
                          </div>
                          <div class="col-6 col-lg-5 col-md-5">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="আরবি"
                            />
                          </div>
                        </div>
                        <div class="button-group">
                          <button class="custom-btn btn-primary" type="submit">
                            Save
                          </button>
                          <button class="custom-btn btn-dark" type="reset">
                            Close
                          </button>
                        </div>
                      </form>
                      <div class="upload-container">
                        <div class="row">
                          <div class="col-lg-4 col-sm-12 col-md-6">
                            <div class="file-upload">
                              <div class="file-image">
                                <div class="file-title">প্রতিষ্ঠানের লোগো</div>
                                <img
                                  src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
                                  alt=""
                                  width="144"
                                  height="144"
                                />
                                <div class="mt-2">
                                  144px
                                  <i class="bi bi-x"></i>
                                  144px
                                </div>
                              </div>
                              <div class="upload-button">
                                <div class="upload-btn-wrapper">
                                  <button class="upload-btn">Browse</button>
                                  <input type="file" name="file" />
                                </div>
                                <button class="upload-btn">save</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-12 col-md-6">
                            <div class="file-upload">
                              <div class="file-image">
                                <div class="file-title">
                                  মুহতামিমের স্বাক্ষর
                                </div>
                                <img
                                  src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
                                  alt=""
                                  width="144"
                                  height="144"
                                />
                                <div class="mt-2">
                                  144px
                                  <i class="bi bi-x"></i>
                                  144px
                                </div>
                              </div>
                              <div class="upload-button">
                                <div class="upload-btn-wrapper">
                                  <button class="upload-btn">Browse</button>
                                  <input type="file" name="file" />
                                </div>
                                <button class="upload-btn">save</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-12 col-md-6">
                            <div class="file-upload">
                              <div class="file-image">
                                <div class="file-title">
                                  নাজেমে তালি: স্বাক্ষর
                                </div>
                                <img
                                  src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
                                  alt=""
                                  width="144"
                                  height="144"
                                />
                                <div class="mt-2">
                                  144px
                                  <i class="bi bi-x"></i>
                                  144px
                                </div>
                              </div>
                              <div class="upload-button">
                                <div class="upload-btn-wrapper">
                                  <button class="upload-btn">Browse</button>
                                  <input type="file" name="file" />
                                </div>
                                <button class="upload-btn">save</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstituteInfo;
