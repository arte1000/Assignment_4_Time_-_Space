var tl = gsap.timeline({defaults: {ease: "power1.out"}});

var textElement = document.createElement("div");

function resetBackgroundColor() {
    document.body.style.backgroundColor = "";
    document.body.style.background = "";
}

function resetBackgroundGradient() {
    document.body.style.background = "";
}

function changeOfficeBackgroundColor() {
    document.body.style.backgroundColor = "#646243";
}
changeOfficeBackgroundColor();
officeBranchText();

tl.fromTo("#smallBranch", 
    {x: 0, y: -30, opacity: 0}, 
    {duration: 1, x: 0, y: 0, opacity: 1});


function officeBranchText() {
    textElement.textContent = "I hate this job... I wish I could\n of done something else with \nmy life. I wonder what else\n is out there...";
    textElement.id = "office-branch-text";
    gsap.fromTo(textElement, 
        {opacity: 0, y: -50}, 
        {duration: 3, opacity: 1, y: 0, delay: 1, ease: "power1.out"});
    document.body.appendChild(textElement);
}

// Going to the Branches
document.getElementById("smallBranch").addEventListener("click", function(){
    console.log("branch clicked");
   
    tl.to("#smallBranch, #office, #athlete, #family, #warrior, #proGamer, #old, #grave", {duration: 1, opacity: 0});
    tl.fromTo("#mainBranch, #branch1, #branch2, #branch3, #branch4, #branch5, #branch6", 
        {x: 0, duration: 1, opacity: 0}, 
        {x: 0, duration: 1, opacity: 1, onStart: changeBackgroundColor, mainBranchText});
        resetBackgroundGradient();
});

function changeBackgroundColor() {
    document.body.style.backgroundColor = "#301934";
}

// Going to the Main Office Branch
document.getElementById("mainBranch").addEventListener("click", function(){
    console.log("branch clicked");
   
    tl.to("#mainBranch, #branch1, #branch2, #branch3, #branch4, #branch5, #branch6", {duration: 1, opacity: 0});
    tl.fromTo("#smallBranch, #office",
    {x: 0, duration: 1, opacity: 0}, 
    {x: 0, duration: 1, opacity: 1, onStart: changeOfficeBackgroundColor,officeBranchText2})
});


function officeBranchText2() {
    textElement.textContent = "Well back to my boring day \njob... ugh. Guess it could be \nworse. I mean, I could be dead...";
    textElement.id = "office-branch-text";
}
        

function mainBranchText() {
    console.log("main branch text");
    textElement.textContent = " ";
    textElement.id = "main-branch-text";
}


// Going to Athlete Branch
document.getElementById("branch1").addEventListener("click", function(){
    console.log("branch clicked");
   
    tl.to("#mainBranch, #branch1, #branch2, #branch3, #branch4, #branch5, #branch6", {duration: 1, opacity: 0});
    tl.fromTo("#smallBranch, #athlete",
        {x: 0, duration: 1, opacity: 0}, 
        {x: 0, duration: 1, opacity: 1, onStart:changeAthleteBackgroundColor,branchText1});
    resetBackgroundColor(); 
    resetBackgroundGradient();
});

function changeAthleteBackgroundColor() {
    document.body.style.background = "linear-gradient(0deg, rgba(157,74,92,1) 21%, rgba(25,6,53,1) 54%)";
}

function branchText1() {
    textElement.textContent = "Looks like I'm an athlete in \nthis timeline... would of been \nnice";
    textElement.id = "branch-text1";
    gsap.to(textElement, {duration: 1, display: "block"});
}

//Going to Family Branch
document.getElementById("branch2").addEventListener("click", function(){
    console.log("branch clicked");
   
    tl.to("#mainBranch, #branch1, #branch2, #branch3, #branch4, #branch5, #branch6", {duration: 1, opacity: 0});
    tl.fromTo("#smallBranch, #family",
        {x: 0, duration: 1, opacity: 0}, 
        {x: 0, duration: 1, opacity: 1, onStart: changeFamilyBackgroundColor,branchText2});
    resetBackgroundColor(); 
    resetBackgroundGradient();
});

function changeFamilyBackgroundColor() {
    document.body.style.backgroundColor = "#F2A65A";
}

function branchText2() {
    textElement.id = "branch-text2";
    textElement.textContent = "Oh I look happy here.. I have a family and everything?! Not fair...";
    gsap.to(textElement, {duration: 1, display: "block"});
}

//Going to Warrior Branch 
document.getElementById("branch3").addEventListener("click", function(){
    console.log("branch clicked");
   
    tl.to("#mainBranch, #branch1, #branch2, #branch3, #branch4, #branch5, #branch6", {duration: 1, opacity: 0});
    tl.fromTo("#smallBranch, #warrior, #branch-text3",
        {x: 0, duration: 1, opacity: 0}, 
        {x: 0, duration: 1, opacity: 1, onStart: changeWarriorBackgroundColor, branchText3});
    resetBackgroundColor(); 
    resetBackgroundGradient();
});

function changeWarriorBackgroundColor() {
    document.body.style.backgroundColor = "#320441";
}

function branchText3() {
    textElement.id = "branch-text3";
    textElement.textContent = "I'm a warrior in this timeline? \nI look so cool!";
    gsap.to(textElement, {duration: 1, display: "block"});
}

//Going to proGamer Branch
document.getElementById("branch4").addEventListener("click", function(){
    console.log("branch clicked");
   
    tl.to("#mainBranch, #branch1, #branch2, #branch3, #branch4, #branch5, #branch6", {duration: 1, opacity: 0});
    tl.fromTo("#smallBranch, #proGamer, #branch-text4",
        {x: 0, duration: 1, opacity: 0}, 
        {x: 0, duration: 1, opacity: 1, onStart: changeProGamerBackgroundColor, branchText4});
    resetBackgroundColor(); 
    resetBackgroundGradient();
});

function changeProGamerBackgroundColor() {
    document.body.style.backgroundColor = "#FF8FBD";
}

function branchText4() {
    textElement.id = "branch-text4";
    textElement.textContent = "Wait? I'm a pro gamer in this timeline? \nAtleast I have fun at this desk job.";
    gsap.to(textElement, {duration: 1, display: "block"});
}

//Going to Old branch
document.getElementById("branch5").addEventListener("click", function(){
    console.log("branch clicked");
   
    tl.to("#mainBranch, #branch1, #branch2, #branch3, #branch4, #branch5, #branch6", {duration: 1, opacity: 0});
    tl.fromTo("#smallBranch, #old, #branch-text5",
        {x: 0, duration: 1, opacity: 0}, 
        {x: 0, duration: 1, opacity: 1, onStart: changeOldBackgroundColor, branchText5});
    resetBackgroundColor(); 
    resetBackgroundGradient();
});

function changeOldBackgroundColor() {
    document.body.style.background = "linear-gradient(0deg, rgba(255,200,87,1) 30%, rgba(25,6,53,1) 64%)";
}

function branchText5() {
    textElement.id = "branch-text5";
    textElement.textContent = "Oh god... Is that me?! I look so old! Man I hope age doesn't hit me like that. At least I look happy";
    gsap.to(textElement, {duration: 1, display: "block"});
}

//Going to the grave branch
document.getElementById("branch6").addEventListener("click", function(){
    console.log("branch clicked");
   
    tl.to("#mainBranch, #branch1, #branch2, #branch3, #branch4, #branch5, #branch6", {duration: 1, opacity: 0});
    tl.fromTo("#smallBranch, #grave, #branch-text6",
        {x: 0, duration: 1, opacity: 0}, 
        {x: 0, duration: 1, opacity: 1, onStart: changeGraveBackgroundColor,branchText6});
    resetBackgroundColor(); 
    resetBackgroundGradient();
});

function changeGraveBackgroundColor() {
    document.body.style.backgroundColor = "#000000";
}

function branchText6() {
    textElement.id = "branch-text6";
    textElement.textContent = "Oh no... I'm dead... I hope I didn't die alone. I hope I had a family or something. I hope I was atleast happy.";
    gsap.to(textElement, {duration: 1, display: "block"});
}
