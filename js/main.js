let figures = document.querySelector(".figures");
let myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
        let responseObj = JSON.parse(this.response);
        for (let i = 0 ; i < responseObj.length; i++){
            let ele = document.createElement("div");
            ele.className = "charit";
            if (responseObj[i].amount >= 50) {
                ele.classList.add("bg-blue");
            }
            else{
                ele.classList.add("bg-red");
            }
            ele.setAttribute("data-day", responseObj[i].day);
            ele.setAttribute("data-amount", "$"+responseObj[i].amount);
            ele.style.height = `${responseObj[i].amount*2.7}px`
            figures.append(ele);
        }
    }
};
myRequest.open("GET", "../json/data.JSON");
myRequest.send()