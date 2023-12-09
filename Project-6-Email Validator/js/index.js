let result = {
  tag: "",
  free: true,
  role: false,
  user: "mouth",
  email: "mouth@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked");
  resultcont.innerHTML = `<img width="200px" src="Spinner-1s-200px.svg" alt="">`
  let key = "ema_live_v1IYIuYEzhG5UbwYyls4Pxr07vmaEH9t1P51QmnI";
  let email = document.getElementById("eml").value;

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();

  let str = "";
  for (let key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key} : ${result[key]}</div>`;
    }
  }
  console.log(str);
  resultcont.innerHTML = str;
});
