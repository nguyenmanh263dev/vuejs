import request from "@/utils/request";

const getAuth = (data: any) => {
  return request({
    url: "http://192.168.2.68:8082/api/authenticate",
    method: "post",
    data,
  });
};

export default { getAuth };
