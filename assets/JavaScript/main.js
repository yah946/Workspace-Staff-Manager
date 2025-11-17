const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const saveBtn = document.getElementById("save-btn");
const newExperience = document.getElementById("new-experience");
const Experiences = document.getElementById("Experiences");
// Open Model
openModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
});
//Close Model
saveBtn.nextElementSibling.addEventListener("click", function () {
  modal.classList.add("hidden");
});
//Add new Experience fields
newExperience.addEventListener("click", function () {
  const divTag = document.createElement("div");
  divTag.innerHTML = `<div class="mt-2 bg-[#f9f9fb] border border-gray-300 w-full py-1.5 rounded-lg p-2">
            <div>
              <label for="company-input">Company:</label>
              <input
                id="company-input"
                type="text"
                class="border border-gray-600 w-full py-1.5 rounded-lg"
              />
              <div id="company-input-error"></div>
            </div>
            <div>
              <label for="role-ex-input">Role:</label>
              <input
                id="role-ex-input"
                type="text"
                class="border border-gray-600 w-full py-1.5 rounded-lg"
              />
              <div id="role-ex-input-error"></div>
            </div>
            <div>
              <label for="date-f-input">From:</label>
              <input
                id="date-f-input"
                type="date"
                class="border border-gray-600 w-full py-1.5 rounded-lg"
              />
              <div id="date-f-input-error"></div>
            </div>
            <div>
              <label for="date-t-input">To:</label>
              <input
                id="date-t-input"
                type="date"
                class="border border-gray-600 w-full py-1.5 rounded-lg"
              />
              <div id="date-t-input-error"></div>
            </div>
            </div>`;
  Experiences.appendChild(divTag);
});
// uploadimage
const imageInput = document.getElementById("image-input");
imageInput.addEventListener("change", function (e) {
  const fichierSelectionne = e.target.files[0];
  if (!fichierSelectionne) return;
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    var hexa64form = reader.result;
    imageInput.previousElementSibling.src = hexa64form;
    imageInput.nextElementSibling.style.opacity = "0%";
  });
  reader.readAsDataURL(fichierSelectionne);
});
const img = document.getElementById("img");
//End of uploadImage
const inputs = document.querySelectorAll("input");
let inputsTag = [];
for (let i = 0; i > inputs.length; i++) {
  inputsTag.push(inputs[i].classList);
}
// console.log(inputsTag[0].includes("hidden"));

// function FindErrors(input) {
//   inputsTag.forEach((i) => i.classList != hidden);
// }
function showErrors() {}

const container = document.getElementById("container");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const companyInput = document.getElementById("company-input");
const roleInput = document.getElementById("role-ex-input");
const dateFrom = document.getElementById("date-f-input");
const dateTo = document.getElementById("date-t-input");
const roleOpt = document.getElementById("role-opt");

let dataBase = [];
if(localStorage.profile!=null){
  dataBase = JSON.parse(localStorage.profile);
}else{
  dataBase = [];
}
saveBtn.addEventListener("click", function () {
  // Save new profiles to localStorage
  let newProfile = {
    name:nameInput.value,
    role:roleOpt.value,
    img:img.src,
    email:emailInput.value,
    tel:phoneInput.value,
    experiences:{
      company:companyInput.value,
      role:roleInput.value,
      from:dateFrom.value,
      to:dateTo.value,
    }
  }
  dataBase.push(newProfile);
  localStorage.setItem('profile',JSON.stringify(dataBase));
  //Add profiles to side bar
  container.innerHTML += `<div
          id="profile"
          class="flex justify-evenly items-center border border-gray-300 bg-[#f9f9fb] p-3 w-64 rounded-lg m-2"
        >
          <div>
            <img
              src="${img.src}"
              class="border-[#007afc] border-2 w-12 h-12 rounded-[50%]"
            />
          </div>
          <div>
            <h2 class="font-bold">${nameInput.value}</h2>
            <p class="text-gray-400">${roleOpt.value}</p>
          </div>
          <div>
            <button type="button" class="text-[#fac105]">Edit</button>
          </div>
        </div>`;
  modal.classList.add("hidden");
  //Clear all inputs
  nameInput.value = "";
  roleOpt.value = "";
});
//validation
// const patterns = {
//   "name-input": {
//     regex: /^[A-Za-z\s]{2,50}$/,
//     message: "Name must be 2 - 50 caracters long",
//   },
//   "email-input": {
//     regex: /^[A-Za-z0-9._%+-]{2,30}@[A-Za-z.-]{2,10}\.[A-Za-z.]{2,3}$/,
//     message: "Enter a valid email",
//   },
//   "phone-input": {
//     regex: /^\+?[0-9]{7,15}$/,
//     message: "Enter a valid phone number",
//   },
//   "url-input": {
//     regex: /^(http\/\/|https\/\/)?(www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/,
//     message: "Enter a valid url",
//   },
//   "company-input": {
//     regex: /^[A-Za-z\s]{2,50}$/,
//     message: "Company name must be 2 - 50 caracters long",
//   },
//   "role-ex-input": {
//     regex: /^[A-Za-z\s]{2,50}$/,
//     message: "Company name must be 2 - 50 caracters long",
//   },
//   "date-f-input": {
//     regex: /^\d{4}-\d{2}-\d{2}$/,
//     message: "add a date",
//   },
//   "date-t-input": {
//     regex: /^\d{4}-\d{2}-\d{2}$/,
//     message: "add a date",
//   },
// };
