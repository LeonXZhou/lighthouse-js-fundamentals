const organizeInstructors = function(instructors) {
  let ios = [];
  let web = [];
  let blockchain = [];
  let output = {};

  for (i of instructors)
  {
    if (i.course == 'iOS')
    {
      ios.push(i.name);
    }
    else if (i.course == 'Web')
    {
      web.push(i.name);
    }
    else if (i.course == 'Blockchain')
    {
      blockchain.push(i.name);
    }
  }
  if (ios.length > 0)
  {
    output['iOS'] = ios;
  }
  if (web.length > 0)
  {
    output['Web'] = web;
  }
  if (blockchain.length > 0)
  {
    output['Blockchain'] = blockchain;
  }
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
