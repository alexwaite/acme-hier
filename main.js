const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 },
];

function showManagementStructure(arr) {
  let msg = '';

  let boss = undefined;
  arr.forEach(function(element) {
    if (!element.managerId) {
      boss = element;
      msg = `${boss.name}`;
    }
  });

  arr.forEach(function(element) {
    if (element.managerId === boss.id) {
      msg += '\n\t - ' + element.name;
    }
  });
  return msg;
}
