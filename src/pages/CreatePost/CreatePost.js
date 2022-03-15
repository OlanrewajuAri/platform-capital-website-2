import React, { useState } from "react";
import { useDocumentTitle } from "../../components/TitleChange/TitleChange";

export const CreatePost = () => {
useDocumentTitle("Platform | Create");
    const [data, setData] = useState({
        title:'',
        post:'',
        
    })
  return (
    <div>
      <div className="card">
        <div class="input-field">
          <input id="title" type="text" class="validate" />
          <label for="title">Title</label>
        </div>
        <div class="input-field">
          <input id="title" type="text" class="validate" />
          <label for="title">Tag</label>
        </div>
        <div>
          <p>
            <label>
              <input name="group1" type="radio" checked />
              <span>Red</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>Yellow</span>
            </label>
          </p>
          <p>
            <label>
              <input class="with-gap" name="group1" type="radio" />
              <span>Green</span>
            </label>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};
