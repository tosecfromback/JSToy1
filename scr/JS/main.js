console.log("여기는 나오니?mainjs시작")
import { headFunc } from "./Compenent/header.js";


const $body = document.querySelector("#home");
$body.innerHTML = "<h2>이제는 h2 tag</h2>"

$body.append(headFunc("HeadIdAtt"));