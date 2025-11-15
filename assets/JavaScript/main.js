const openModal= document.getElementById('open-modal');
const modal = document.getElementById('modal');
const saveBtn = document.getElementById('save-btn');
const newExperience = document.getElementById('new-experience');
const Experiences = document.getElementById('Experiences');
// Open Model
openModal.addEventListener('click',function(){
    modal.classList.remove('hidden');
})
//Close Model
saveBtn.nextElementSibling.addEventListener('click',function(){
    modal.classList.add('hidden');
})
//Add new Experience fields
newExperience.addEventListener('click',function(){
    const divTag = document.createElement('div');
    divTag.innerHTML=`<div class="border-t-2 border-indigo-900">
            <div>
              <label for="title-input">Title</label>
              <input id="title-input" type="text" class="w-full border-2 border-indigo-600 w-full py-1.5 rounded-lg">
              <div id="title-error"></div>
            </div>
            <div>
              <label for="date-input">Date</label>
              <input id="date-input" type="date" class="w-full border-2 border-indigo-600 w-full py-1.5 rounded-lg">
              <div id="date-error"></div>
            </div>
            <div>
              <label for="poste-input">poste</label>
              <input id="poste-input" type="text" class="w-full border-2 border-indigo-600 w-full py-1.5 rounded-lg">
              <div id="poste-error"></div>
            </div>
            <div>
              <label for="mission-input">Mission</label>
              <textarea id="mission-input" class="w-full h-16 border-2 border-indigo-600 w-full py-1.5 rounded-lg"></textarea>
              <div id="mission-error"></div>
            </div>`
    Experiences.appendChild(divTag);

});
const container = document.getElementById('container');
const nameInput = document.getElementById('name-input');
const roleOpt = document.getElementById('role-opt')
saveBtn.addEventListener('click',function(){
    container.innerHTML+=`<div id="profile" class="flex justify-evenly bg-[#0000AA] p-3 w-64 rounded-lg m-2 text-white">
          <div>
            <img src="./assets/images/default.png" class="w-12 h-12 rounded-[50%]">
          </div>
          <div>
            <h2 class="font-bold">${nameInput.value}</h2>
            <p class="text-[#B8C6FF]">${roleOpt.value}</p>
          </div>
        </div>`
    modal.classList.add('hidden');
    nameInput.value='';
    roleOpt.value='';
})