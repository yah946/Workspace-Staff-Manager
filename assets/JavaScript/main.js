const urlInput = document.getElementById("url-input");
const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const saveBtn = document.getElementById("save-btn");
const xMark = document.getElementById("x-mark");
const xMark2 = document.getElementById("x-mark2");
const newExperience = document.getElementById("new-experience");
const Experiences = document.getElementById("Experiences");
const btnMeet = document.getElementById("room-1");
const btnServers = document.getElementById("room-2");
const btnSecurty = document.getElementById("room-3");
const btnReception = document.getElementById("room-4");
const btnStaff = document.getElementById("room-5");
const btnVault = document.getElementById("room-6");
const staffModal = document.getElementById("staff-modal");
const displayCards = document.getElementById("displayCards");
let changeModal = "Save Worker";
let tmp;
// Open Model
openModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
});
//Close Model
[saveBtn.nextElementSibling, xMark, xMark2].forEach((i) =>
  i.addEventListener("click", function () {
    modal.classList.add("hidden");
    staffModal.classList.add("hidden");
    //Clear all inputs
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    img.src = "";
  })
);
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
  urlInput.disabled = true;
  urlInput.classList.add("cursor-not-allowed");
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
urlInput.addEventListener("input", function () {
  if (urlInput.value != "") {
    imageInput.disabled = true;
    imageInput.nextElementSibling.classList.add("cursor-not-allowed");
  } else {
    imageInput.disabled = false;
    imageInput.nextElementSibling.classList.remove("cursor-not-allowed");
  }
});

const container = document.getElementById("container");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const companyInput = document.getElementById("company-input");
const roleInput = document.getElementById("role-ex-input");
const dateFrom = document.getElementById("date-f-input");
const dateTo = document.getElementById("date-t-input");
const roleOpt = document.getElementById("role-opt");
const inputs = document.querySelectorAll("input");

let dataBase = [];
if (localStorage.profile != null) {
  dataBase = JSON.parse(localStorage.profile);
} else {
  dataBase = [];
}
function showData() {
  let table = "";
  for (let i = 0; i < dataBase.length; i++) {
    table += `<div id-index = "${dataBase[i].id}"
            id="profile"
            class="compt flex justify-evenly items-center border border-gray-300 bg-[#f9f9fb] p-3 w-64 rounded-lg m-2 cursor-pointer mt-3 duration-300 hover:-translate-y-1 hover:shadow-[0px_6px_6px_1px_rgba(0,_0,_0,_0.1)]"
          >
            <div>
              <img
                src="${dataBase[i].img}"
                class="border-[#007afc] border-2 w-12 h-12 rounded-[50%]"
              />
            </div>
            <div>
              <h2 class="font-bold">${dataBase[i].name}</h2>
              <p class="text-gray-400">${dataBase[i].role}</p>
            </div>
            <div class="flex gap-2">
                <span onclick="editProfile(${i})" class="active:border-2 active:border-black border-2 border-yellow-400 bg-yellow-400 p-1 rounded-lg inline-block text-transparent bg-clip-text"><i class="fa-solid fa-pen"></i></span>
                <span onclick="deleteData(${i})" class="active:border-2 active:border-black border-2 border-red-400 bg-red-400 p-1 rounded-lg inline-block text-transparent bg-clip-text"><i class="fa-solid fa-trash"></i></span>
            </div>
          </div>`;
  }
  container.innerHTML = table;
}
const profileId = document.querySelectorAll('#profile')
saveBtn.addEventListener("click", function () {
  // if (!validateForm()) {
  //   return;
  // }
  // Save new profiles to localStorage
  let newProfile = {
    id: Math.random(),
    name: nameInput.value,
    role: roleOpt.value,
    img: img.src,
    email: emailInput.value,
    tel: phoneInput.value,
    experiences: {
      company: companyInput.value,
      role: roleInput.value,
      from: dateFrom.value,
      to: dateTo.value,
    },
  };
  if (changeModal === "Save Worker") {
    dataBase.push(newProfile);
  } else {
    dataBase[tmp] = newProfile;
    changeModal = "Save Worker";
    saveBtn.textContent = "Save Worker";
  }
  localStorage.setItem("profile", JSON.stringify(dataBase));
  //Add profiles to side bar
  showData();
  modal.classList.add("hidden");
  //Clear all inputs
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  img.src = "";
});
showData();
//validation
const patterns = {
  "name-input": {
    regex: /^[A-Za-z\s]{2,50}$/,
    message: "Name must be 2 - 50 caracters long",
  },
  "role-opt": {
    regex: /^[A-Za-z\s]{1,}$/,
    message: "You must choose a role",
  },
  "url-input": {
    regex: /^[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/,
    message: "Enter a valid url",
  },
  "company-input": {
    regex: /^[A-Za-z\s]{2,50}$/,
    message: "Company name must be 2 - 50 caracters long",
  },
  "role-ex-input": {
    regex: /^[A-Za-z\s]{2,50}$/,
    message: "Company name must be 2 - 50 caracters long",
  },
  "date-f-input": {
    regex: /^\d{4}-\d{2}-\d{2}$/,
    message: "add a date",
  },
  "date-t-input": {
    regex: /^\d{4}-\d{2}-\d{2}$/,
    message: "add a date",
  },
  "email-input": {
    regex: /^[A-Za-z0-9._%+-]{2,30}@[A-Za-z.-]{2,10}\.[A-Za-z.]{2,3}$/,
    message: "Enter a valid email",
  },
  "phone-input": {
    regex: /^\+?[0-9]{7,15}$/,
    message: "Enter a valid phone number",
  },
};

function toggleError(field, show, message = "") {
  let divError = field.nextElementSibling;
  divError.innerText = message;
  if (show) {
    divError.classList.remove("hidden");
  } else {
    divError.classList.add("hidden");
  }
}
function validateField(field, value) {
  let id = field.id;
  let rule = patterns[id];
  let valid = rule.regex.test(value);
  toggleError(field, !valid, rule.message);
  return valid;
}
function validateForm() {
  let valid = true;
  Object.entries(patterns).forEach(([id]) => {
    let field = document.getElementById(id);
    valid &&= validateField(field, field.value);
  });
  return valid;
}

//Edit
const edit = document.querySelectorAll(".edit");
function editProfile(i) {
  modal.classList.remove("hidden");
  nameInput.value = dataBase[i].name;
  roleOpt.value = dataBase[i].role;
  img.src = dataBase[i].img;
  emailInput.value = dataBase[i].email;
  phoneInput.value = dataBase[i].tel;
  companyInput.value = dataBase[i].experiences.company;
  roleInput.value = dataBase[i].experiences.role;
  dateFrom.value = dataBase[i].experiences.from;
  dateTo.value = dataBase[i].experiences.to;
  saveBtn.textContent = "Edit Profile";
  changeModal = "Edit Profile";
  tmp = i;
  imageInput.nextElementSibling.style.opacity = "0%";
}
//Delete
function deleteData(i) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      dataBase.splice(i, 1);
      localStorage.profile = JSON.stringify(dataBase);
      showData();
    }
  });
}

// const roles = [
//   "security",
//   "manager",
//   "Receptionist",
//   "Cleaning",
//   "Other roles",
//   "IT Guy",
//   "Servers",
// ];
// function showDataInModal(roles) {
//   let filtredDatabase = dataBase.filter((item) =>
//     roles.some((cond) => item.role.toLowerCase().includes(cond.toLowerCase()))
//   );
//   let container = "";
//   for (let i = 0; i < filtredDatabase.length; i++) {
//     container += `<div
//               id="profile"
//               class="flex justify-evenly items-center border border-gray-300 bg-[#f9f9fb] p-3 w-64 rounded-lg m-2 cursor-pointer mt-3 duration-300 hover:-translate-y-1 hover:shadow-[0px_6px_6px_1px_rgba(0,_0,_0,_0.1)]"
//             >
//               <div>
//                 <img
//                   src="${filtredDatabase[i].img}"
//                   class="border-[#007afc] border-2 w-12 h-12 rounded-[50%]"
//                 />
//               </div>
//               <div>
//                 <h2 class="font-bold">${filtredDatabase[i].name}</h2>
//                 <p class="text-gray-400">${filtredDatabase[i].role}</p>
//               </div>
//               <div class="flex gap-2">
//                   <span onclick="addProfile(${i})" class="active:border-2 active:border-black border-2 border-[#007afc] bg-[#007afc] p-1 rounded-lg inline-block text-transparent bg-clip-text"><i class="fa-solid fa-plus"></i></span>
//                   <span onclick="deleteData(${i})" class="active:border-2 active:border-black border-2 border-red-400 bg-red-400 p-1 rounded-lg inline-block text-transparent bg-clip-text"><i class="fa-solid fa-trash"></i></span>
//               </div>
//             </div>`;
//     displayCards.innerHTML = container;
//   }
// }
// let roomsM = {
//   meet: roles,
//   receptoin: [roles[1], roles[2], roles[3]],
//   security: [roles[0], roles[1]],
//   servers: [roles[1], roles[6]],
//   vault: roles,
//   staff: roles,
// };
// function opnenStaffModal(condition) {
//   staffModal.classList.remove("hidden");
//   showDataInModal(roomsM[condition]);
// }
// btnMeet.addEventListener("click", () => opnenStaffModal("meet"));
// btnReception.addEventListener("click", function () {
//   opnenStaffModal("receptoin");
// });
// btnSecurty.addEventListener("click", function () {
//   opnenStaffModal("security");
// });
// btnServers.addEventListener("click", function () {
//   opnenStaffModal("servers");
// });
// btnVault.addEventListener("click", function () {
//   opnenStaffModal("vault");
// });
// btnStaff.addEventListener("click", function () {
//   opnenStaffModal("staff");
// });
// function addProfile(i){
//   dataBase.splice(i,1);
//   btnMeet.nextElementSibling.innerHTML+=`<div
//               id="profile"
//               style="z-index: 99;"
//               class="relative flex justify-evenly items-center border border-gray-300 bg-[#f9f9fb] p-3 w-44 rounded-lg m-2 cursor-pointer mt-3 duration-300 hover:-translate-y-1 hover:shadow-[0px_6px_6px_1px_rgba(0,_0,_0,_0.1)]"
//             >
//               <span class="absolute top-0 right-0 inline-flex size-4 rounded-full bg-red-500 flex justify-center hover:size-5"><i class="fa-solid fa-xmark"></i></span>
//               <div>
//                 <h2 class="font-bold">${filtredDatabase[i].name}</h2>
//                 <p class="text-gray-400">${filtredDatabase[i].role}</p>
//               </div>
//           </div>`
//   staffModal.classList.add("hidden");
// }
  const compt = document.querySelectorAll(".compt");
[btnMeet,btnReception,btnSecurty,btnServers,btnStaff,btnVault].forEach((i) => i.addEventListener('click',function(){
  staffModal.classList.remove('hidden');
}));
let filteredDatabase = [];
if(localStorage.filtred!=null){
  filteredDatabase = JSON.parse(localStorage.filtred);
}else{
  filteredDatabase = dataBase.filter(i => i.role.toLowerCase() == 'Receptionist'.toLowerCase());
}
function showDataInModal(){
for(let i=0;i<filteredDatabase.length;i++){
displayCards.innerHTML += `<div
                id-index = "${compt[i].getAttribute("id-index")}"
              id="profile"
              class="flex justify-evenly items-center border border-gray-300 bg-[#f9f9fb] p-3 w-64 rounded-lg m-2 cursor-pointer mt-3 duration-300 hover:-translate-y-1 hover:shadow-[0px_6px_6px_1px_rgba(0,_0,_0,_0.1)]"
            >
              <div>
                <img
                  src="${filteredDatabase[i].img}"
                  class="border-[#007afc] border-2 w-12 h-12 rounded-[50%]"
                />
              </div>
              <div>
                <h2 class="font-bold">${filteredDatabase[i].name}</h2>
                <p class="text-gray-400">${filteredDatabase[i].role}</p>
              </div>
              <div class="flex gap-2">
                  <span onclick="addProfile(${i})" class="active:border-2 active:border-black border-2 border-[#007afc] bg-[#007afc] p-1 rounded-lg inline-block text-transparent bg-clip-text"><i class="fa-solid fa-plus"></i></span>
                  <span onclick="deleteData(${i})" class="active:border-2 active:border-black border-2 border-red-400 bg-red-400 p-1 rounded-lg inline-block text-transparent bg-clip-text"><i class="fa-solid fa-trash"></i></span>
              </div>
            </div>`
}
}
showDataInModal();
function addProfile(id){
  staffModal.classList.add('hidden');
  showDataInModal();
  btnMeet.previousElementSibling.innerHTML += `<div
              id-index=""
              id="profile"
              class="relative flex justify-evenly items-center border border-gray-300 bg-[#f9f9fb] p-3 w-44 rounded-lg m-2 cursor-pointer mt-3 duration-300 hover:-translate-y-1 hover:shadow-[0px_6px_6px_1px_rgba(0,_0,_0,_0.1)]"
            >
              <span id="x-mark-cards" class="absolute top-0 right-0 inline-flex size-4 rounded-full bg-red-500 flex justify-center"><i class="fa-solid fa-xmark"></i></span>
              <div>
                <h2 class="font-bold">${filteredDatabase[id].name}</h2>
                <p class="text-gray-400">${filteredDatabase[id].role}</p>
              </div>
          </div>`
  localStorage.setItem("filtred", JSON.stringify(filteredDatabase));
  // dataBase.splice(filteredDatabase[id].id, 1);
compt.forEach((com,index) =>{
  const stockindex = com.getAttribute("id-index")
  if(filteredDatabase[id].id == stockindex ){
    dataBase.splice(index,1);
  }
})
  // console.log(dataBase.indexOf(filteredDatabase[id].id))
  localStorage.profile = JSON.stringify(dataBase);
  showData();
}