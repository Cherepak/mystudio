let insurance = $("#insurance");
let insuranceList = $(".insurance__list");

insurance.click(() => {
  insuranceList.slideToggle("slow");
  insurance.preventDefault();
})


let service =$("#service");
let serviceList = $(".service__list");

service.click(() => {
  serviceList.slideToggle("slow");
  serviceList.preventDefault();
})
