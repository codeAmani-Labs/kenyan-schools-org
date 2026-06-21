const fs = require("fs");

let schools = JSON.parse(fs.readFileSync("schools.json"));

schools = schools.map((s, idx) => {
  const num = (s.id || (idx + 1));
  return {
    ...s,
    indexNo: `KSO-${String(num).padStart(4, "0")}`
  };
});

fs.writeFileSync("schools.json", JSON.stringify(schools, null, 2));
console.log("Assigned indexNo to", schools.length, "schools");
console.log("First:", schools[0].name, "->", schools[0].indexNo);
console.log("Last:", schools[schools.length-1].name, "->", schools[schools.length-1].indexNo);
