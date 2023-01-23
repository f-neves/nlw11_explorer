const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

daysBefore = 0

function add() {
  
  let habitsDays = new Date().setHours(-daysBefore)
  habitsDays = new Date(habitsDays)
  let day = habitsDays.toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(day)

  if (dayExists) {
    alert("Day already exists!")
    daysBefore += 24
    return
  } else {
    nlwSetup.addDay(day)
    daysBefore += 24
    alert("Day added!")
    return
  }
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-03", "01-05"],
//   water: ['02-01', '02-02', '02-03'],
//   food: ['03-01', '03-02', '03-02']
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
