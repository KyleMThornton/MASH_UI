let potentialSpouse = []
let potentialJob = []
let potentialCar = []
let computerSpouseListM = ['Donald Trump','Bartise from Love is Blind Season 3','nobody :(','Joey Chestnut']
let computerSpouseListF = ['Hillary Clinton','Jessica from Love is Blind Season 1','nobody :(','Wendy Williams']
let computerCarList = ['1998 Honda Civic','1993 Ford Taurus','bicycle','hearse']
let computerJobList = ['mortician','IT','waiter','stand-up comic (unsuccessful)']
let houseList = ['mansion','apartment','shack','house']
let wealthList = ['rich','poor']
let finalSpouse
let finalCar
let finalJob

const form = document.getElementById("form")
const formData = new FormData(form)
console.log(formData)

/*
let genderPref = prompt("Would you prefer to marry a Male or Female? (type 'M' or 'F'): ").toLowerCase;
potentialSpouse.push(prompt("Who would you like to marry? "))
potentialSpouse.push(prompt("Who else would you like to marry? "))
potentialJob.push(prompt("What would you like to do for a living? "))
potentialJob.push(prompt("What else would you like to do for a living? "))
potentialCar.push(prompt("What kind of car would you like to drive? "))
potentialCar.push(prompt("What other kind of car would you like to drive? "))
*/

/*
const computerSpouseSelection = (genderPref) => {
    if(genderPref =="m") {
        let guy1 = computerSpouseListM[Math.floor(Math.random() * 4)]
        computerSpouseListM.filter(a => a != guy1)
        let guy2 = computerSpouseListM[Math.floor(Math.random() * 3)]
        potentialSpouse.push(guy1,guy2)
        finalSpouse = computerSpouseListM[Math.floor(Math.random() * 4)]
    } else {
        let gal1 = computerSpouseListF[Math.floor(Math.random() * 4)]
        computerSpouseListM.filter(a => a != gal1)
        let gal2 = computerSpouseListF[Math.floor(Math.random() * 3)]
        potentialSpouse.push(gal1,gal2)
        finalSpouse = computerSpouseListF[Math.floor(Math.random() * 4)]
    }
}

const computerCarSelection = () => {
    let car1 = computerCarList[Math.floor(Math.random() * 4)]
    computerCarList.filter(a => a != car1)
    let car2 = computerCarList[Math.floor(Math.random() * 3)]
    potentialCar.push(car1,car2)
    finalCar = potentialCar[Math.floor(Math.random() * 4)]
}

const computerJobSelection = () => {
    let job1 = computerJobList[Math.floor(Math.random() * 4)]
    computerJobList.filter(a => a != job1)
    let job2 = computerJobList[Math.floor(Math.random() * 3)]
    potentialJob.push(job1,job2)
    finalJob = potentialJob[Math.floor(Math.random() * 4)]
}

computerSpouseSelection(genderPref)
computerCarSelection()
computerJobSelection()
let finalHouse = houseList[Math.floor(Math.random() * 4)]
let finalWealth = wealthList[Math.floor(Math.random() * 2)]

console.log("I have made my prediction of your future!")
console.log(`You will be ${finalWealth} and live in a(n) ${finalHouse}. You will marry ${finalSpouse}, you will drive a ${finalCar} and you will work as a ${finalJob}!`)
*/