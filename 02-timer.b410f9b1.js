document.addEventListener("DOMContentLoaded",(function(){let t,e;function n(t){const n=t-new Date;if(n<=0)return void clearInterval(e);const{days:a,hours:o,minutes:r,seconds:d}=function(t){const e=6e4,n=36e5,a=24*n;return{days:Math.floor(t/a),hours:Math.floor(t%a/n),minutes:Math.floor(t%a%n/e),seconds:Math.floor(t%a%n%e/1e3)}}(n);document.querySelector("[data-days]").textContent=String(a).padStart(2,"0"),document.querySelector("[data-hours]").textContent=String(o).padStart(2,"0"),document.querySelector("[data-minutes]").textContent=String(r).padStart(2,"0"),document.querySelector("[data-seconds]").textContent=String(d).padStart(2,"0")}document.getElementById("start-button").addEventListener("click",(()=>{const a=new Date(t.selectedDates[0]);e=setInterval((()=>n(a)),1e3)})),t=flatpickr("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?alert("Please choose a date in the future"):document.getElementById("start-button").removeAttribute("disabled")},onChange(t){if(t.length>0){const a=t[0];clearInterval(e),n(a)}}})}));
//# sourceMappingURL=02-timer.b410f9b1.js.map
