export function headFunc(headId){
    console.log("여기는 나오니?headerdtart")
    const $head = document.createElement("header");
    $head.setAttribute("id", headId);
    $head.innerHTML = "<h3>여기는 Header</h3>";

    return $head;
}