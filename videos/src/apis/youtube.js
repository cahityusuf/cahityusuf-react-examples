import axios from "axios";

const KEY = "AIzaSyBS8QoK37Jiso-kkbtS6mdzNKw0I7IOND8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
      part: 'snippet',
      maxResult:5,
      type: 'video',
      key: KEY
  }
});

