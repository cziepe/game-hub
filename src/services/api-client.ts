import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5b73314ed8b94eac9b06a3cb25378813",
  },
});
