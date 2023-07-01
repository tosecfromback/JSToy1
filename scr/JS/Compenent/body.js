import { Header } from "./header";
export default function bodyFrame() {
    const $body = document.createElement("#body");
    console.log("hello world");

    const $head = new Header;
    $head.innerHTML("<h1>여기는 Header 입니다.</h1>");
    console.log("hello world");

    $body.innerHTML = $head;
}