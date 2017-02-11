const setNavbar = (personality) => {
  document.getElementById("currentSearch").innerHTML = personality
  document.getElementById("currentPercentages").innerHTML = eval(percentages[personality]["A"] + percentages[personality]["T"]).toFixed(1)
}