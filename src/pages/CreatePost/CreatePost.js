import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDocumentTitle } from "../../components/TitleChange/TitleChange";

import "./CreatePost.css";

export const CreatePost = () => {
  useDocumentTitle("Platform | Create");

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [radio, setRadio] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      getData();
    }
  }, [url]);

  const getData = async () => {
    try {
      const record = await axios.post("/post", {
        title,
        post,
        radio,
        url,
      });
      console.log(record);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(radio);

  const postDetails = () => {
    if (!title || !post || !radio || !image) {
      console.log("Please fill out all the fields");
      return toast.error("Please fill out all the fields", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }

    const data = new FormData();

    data.append("file", image);
    data.append("upload_preset", "platform-capital-website");
    data.append("cloud_name", "meche");

    fetch(" https://api.cloudinary.com/v1_1/meche/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  // setTitle("");
  // setUrl("");
  // setRadio("");
  // setPost("");

  return (
    <div className="container">
      <div className="main-card">
        <div className="card">
          <h2>Create Post</h2>
          <div class="input-field">
            <input
              id="title"
              type="text"
              placeholder="Title"
              class="validate"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="input-field">
            <textarea
              style={{ color: "white" }}
              placeholder="post"
              class="materialize-textarea"
              type="textarea"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
          </div>

          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
          <div>
            <h4>Tags</h4>
            <div className="tags">
              <p>
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Technology"
                    checked={radio === "Technology"}
                    onChange={(e) => setRadio(e.target.value)}
                  />
                  <span>Technology</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Tips"
                    checked={radio === "Tips"}
                    onChange={(e) => setRadio(e.target.value)}
                  />
                  <span>Tips</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Announcement"
                    checked={radio === "Announcement"}
                    onChange={(e) => setRadio(e.target.value)}
                  />
                  <span>Announcement</span>
                </label>
              </p>
            </div>
            <button
              class="btn waves-effect waves-light"
              onClick={() => postDetails()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
