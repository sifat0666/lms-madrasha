import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { serverUrl } from "../../utils/config";

// image container styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "144px", maxHeight: "144px" },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};

const InstituteInfo = () => {
  const { register, handleSubmit } = useForm();

  const [ls, setls] = useState();
  const [mum, setmum] = useState();
  const [nt, setnt] = useState();

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${serverUrl}/api/institute-info`, newUser, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    onError: (error, variable, context) => {
      console.log(error.response.data.message);
      toast.error("fill up all the fields");
    },
    onSuccess: (data) => {
      toast.success("Institute info submitted");
      console.log(data?.data);
      // setStudentids(data?.data.id);
    },
  });
  const lsChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setls(e.target.files[0]);
    }
  };
  const mumChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setmum(e.target.files[0]);
    }
  };
  const ntChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setnt(e.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    try {
      const acaLogo = new FormData();
      const mumSign = new FormData();
      const naSign = new FormData();
      acaLogo.append("file", ls);
      mumSign.append("file", mum);
      naSign.append("file", nt);
      acaLogo.append("upload_preset", "hwcadnsm");
      mumSign.append("upload_preset", "hwcadnsm");
      naSign.append("upload_preset", "hwcadnsm");

      let logo = "";
      let mumtamim_sign = "";
      let najeme_talim_sign = "";
      await axios
        .post("https://api.cloudinary.com/v1_1/dlmyqzumr/image/upload", acaLogo)
        .then((response) => (logo = response?.data?.secure_url));

      await axios
        .post("https://api.cloudinary.com/v1_1/dlmyqzumr/image/upload", mumSign)
        .then((response) => (mumtamim_sign = response?.data?.secure_url));

      await axios
        .post("https://api.cloudinary.com/v1_1/dlmyqzumr/image/upload", naSign)
        .then((response) => (najeme_talim_sign = response?.data?.secure_url));

      const params = {
        logo,
        mumtamim_sign,
        najeme_talim_sign,
      };

      mutation.mutate({
        ...data,
        ...params,
        namea: "e",
        addressa: "a",
        numa: "a",
        graama: "a",
        daaka: "a",
        thanaa: "al",
        jelaa: "a",
        ilhaka: "as",
      });
    } catch (e) {
      console.log(e);
      toast.error("image not selected");
    }
  };

  return (
    <div>
      <section className="instituteinfo-section user-form-section">
        <div className="section-bg">
          <div className="section-title">
            <h4>প্রতিষ্ঠানের তথ্য</h4>
          </div>
          <div className="row">
            <div className="col-md-12 d-block">
              <div className="row">
                <div className="col-md-12 w-100">
                  <div className="main-container">
                    <div className="my-4">
                      {/* <div className="info-button">
                        <div className="custon-btn">বাংলা</div>
                        <div className="custon-btn">Arabic</div>
                      </div> */}
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="intitute-form"
                      >
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label info-lable">
                            প্রতিষ্ঠানের নামঃ
                          </label>
                          <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা"
                              {...register("name")}
                            />
                          </div>
                          {/* <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবি"
                              {...register("namea")}
                            />
                          </div> */}
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label info-lable">
                            সংক্ষিপ্ত ঠিকানাঃ
                          </label>
                          <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা"
                              {...register("address")}
                            />
                          </div>
                          {/* <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবি"
                              {...register("addressa")}
                            />
                          </div> */}
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label info-lable">
                            যোগাযোগ নাম্বারঃ
                          </label>
                          <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="বাংলা"
                              {...register("num")}
                            />
                          </div>
                          {/* <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="আরবি"
                              {...register("numa")}
                            />
                          </div> */}
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label info-lable">
                            গ্রামঃ
                          </label>
                          <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা"
                              {...register("graam")}
                            />
                          </div>
                          {/* <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবি"
                              {...register("graama")}
                            />
                          </div> */}
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label info-lable">
                            ডাকঃ
                          </label>
                          <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা"
                              {...register("daak")}
                            />
                          </div>
                          {/* <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবি"
                              {...register("daaka")}
                            />
                          </div> */}
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label info-lable">
                            থানাঃ
                          </label>
                          <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা"
                              {...register("thana")}
                            />
                          </div>
                          {/* <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবি"
                              {...register("thanaa")}
                            />
                          </div> */}
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label info-lable">
                            জেলাঃ
                          </label>
                          <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা"
                              {...register("jela")}
                            />
                          </div>
                          {/* <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবি"
                              {...register("jelaa")}
                            />
                          </div> */}
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label info-lable">
                            ইলহাকঃ
                          </label>
                          <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="বাংলা"
                              {...register("ilhak")}
                            />
                          </div>
                          {/* <div className="col-10 col-lg-5 col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="আরবি"
                              {...register("ilhaka")}
                            />
                          </div> */}
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-sm-12 col-md-6">
                            <div className="file-upload">
                              <div className="file-image">
                                <div className="file-title">
                                  প্রতিষ্ঠানের লোগো
                                </div>
                                {ls ? (
                                  <div style={styles.preview}>
                                    <img
                                      src={URL.createObjectURL(ls)}
                                      style={styles.image}
                                      alt="Thumb"
                                    />
                                  </div>
                                ) : (
                                  <img
                                    src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
                                    alt=""
                                    width="144"
                                    height="144"
                                  />
                                )}

                                <div className="mt-2">
                                  144px
                                  <i className="bi bi-x"></i>
                                  144px
                                </div>
                              </div>
                              <div className="upload-button">
                                <div>
                                  <input
                                    className="my-4"
                                    accept="image/*"
                                    type="file"
                                    onChange={lsChange}
                                  />
                                </div>
                                <button
                                  onClick={() => setls()}
                                  style={styles.delete}
                                  // className="upload-btn"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
                            <div className="file-upload">
                              <div className="file-image">
                                <div className="file-title">
                                  মুমতামিম এর স্বাক্ষর
                                </div>
                                {mum ? (
                                  <div style={styles.preview}>
                                    <img
                                      src={URL.createObjectURL(mum)}
                                      style={styles.image}
                                      alt="Thumb"
                                    />
                                  </div>
                                ) : (
                                  <img
                                    src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
                                    alt=""
                                    width="144"
                                    height="144"
                                  />
                                )}

                                <div className="mt-2">
                                  144px
                                  <i className="bi bi-x"></i>
                                  144px
                                </div>
                              </div>
                              <div className="upload-button">
                                <div>
                                  <input
                                    className="my-4"
                                    accept="image/*"
                                    type="file"
                                    onChange={mumChange}
                                  />
                                </div>
                                <button
                                  onClick={() => setmum()}
                                  style={styles.delete}
                                  // className="upload-btn"DDdd
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-12 col-md-6">
                            <div className="file-upload">
                              <div className="file-image">
                                <div className="file-title">
                                  নাজেমে তালিম এর স্বাক্ষর
                                </div>
                                {nt ? (
                                  <div style={styles.preview}>
                                    <img
                                      src={URL.createObjectURL(nt)}
                                      style={styles.image}
                                      alt="Thumb"
                                    />
                                  </div>
                                ) : (
                                  <img
                                    src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
                                    alt=""
                                    width="144"
                                    height="144"
                                  />
                                )}

                                <div className="mt-2">
                                  144px
                                  <i className="bi bi-x"></i>
                                  144px
                                </div>
                              </div>
                              <div className="upload-button">
                                <div>
                                  <input
                                    className="my-4"
                                    accept="image/*"
                                    type="file"
                                    onChange={ntChange}
                                  />
                                </div>
                                <button
                                  onClick={() => setnt()}
                                  style={styles.delete}
                                  // className="upload-btn"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="button-group">
                          <button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            Save
                          </button>
                          <button className="custom-btn btn-dark" type="reset">
                            reset
                          </button>
                        </div>
                      </form>
                      <div className="upload-container"></div>
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
