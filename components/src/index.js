import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        are you sure you want to do this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="1" content="content 1" avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail author="Alex" timeAgo="2" content="content 2" avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
       <CommentDetail author="Jane" timeAgo="3" content="content 3" avatar={faker.image.avatar()} />       
      </ApprovalCard>


    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
