export const serverUrl = "https://api.milkywayitsolution.com";

export const msg = fetch(`${serverUrl}/api/msg/${1}`).then((res) => res.json());

export const sendSms = (number, msg) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var raw = "";

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `http://66.45.237.70/api.php?username=01790709014&password=EYN92SM7&number=88${number}&message=${msg}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
