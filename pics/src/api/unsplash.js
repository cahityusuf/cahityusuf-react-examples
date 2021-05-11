import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID youXc1jqwhE7RcgmBBJ9_ywDI8Amb08_rmr1MTD9W1M",
  }
});
