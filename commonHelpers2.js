import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const a=document.querySelector(".feedback-form"),r=localStorage.getItem("feedback-form-state"),l=JSON.parse(r);r&&(a.elements.email.value=l.email,a.elements.message.value=l.message);a.addEventListener("input",e=>{const t=JSON.stringify({email:e.currentTarget.elements.email.value.trim(),message:e.currentTarget.elements.message.value.trim()});localStorage.setItem("feedback-form-state",t)});a.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value,s=e.currentTarget.elements.message.value,m={email:t.trim(),message:s.trim()};t!==""&&s!==""?(console.log(m),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")):alert("It looks like you missed filling in some inputs. Please, fill in all the inputs!")});
//# sourceMappingURL=commonHelpers2.js.map