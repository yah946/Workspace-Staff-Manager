const urlInput = document.getElementById('url-input');
const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const saveBtn = document.getElementById("save-btn");
const xMark = document.getElementById("x-mark");
const newExperience = document.getElementById("new-experience");
const Experiences = document.getElementById("Experiences");
let changeModal = "Save Worker";
let tmp;
// Open Model
openModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
});
//Close Model
[saveBtn.nextElementSibling, xMark].forEach((i) =>
  i.addEventListener("click", function () {
    modal.classList.add("hidden");
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
  urlInput.disabled=true;
  urlInput.classList.add('cursor-not-allowed')
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
urlInput.addEventListener('input',function(){
  if(urlInput.value!=''){
    imageInput.disabled = true;
    imageInput.nextElementSibling.classList.add('cursor-not-allowed');
  }else{
    imageInput.disabled = false;
    imageInput.nextElementSibling.classList.remove('cursor-not-allowed');
  }
})

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
    table += `<div
            id="profile"
            class="flex justify-evenly items-center border border-gray-300 bg-[#f9f9fb] p-3 w-64 rounded-lg m-2 cursor-pointer mt-3 duration-300 hover:-translate-y-1 hover:shadow-[0px_6px_6px_1px_rgba(0,_0,_0,_0.1)]"
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
saveBtn.addEventListener("click", function () {
  // if (!validateForm()) {
  //   return;
  // }
  // Save new profiles to localStorage
  let newProfile = {
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
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
            dataBase.splice(i, 1);
            localStorage.profile = JSON.stringify(dataBase);
            showData();
        }
    });
}
