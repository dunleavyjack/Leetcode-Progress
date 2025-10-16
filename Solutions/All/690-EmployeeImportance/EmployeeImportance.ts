class Employee {
  id: number;
  importance: number;
  subordinates: number[];
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id;
    this.importance = importance === undefined ? 0 : importance;
    this.subordinates = subordinates === undefined ? [] : subordinates;
  }
}

function getImportance(employees: Employee[], id: number): number {
  let employeeMap = new Map<number, Employee>();

  for (let employee of employees) {
    employeeMap.set(employee.id, employee);
  }

  function dfs(id: number): number {
    if (!employeeMap.has(id)) return 0;

    const employee = employeeMap.get(id)!;
    let importanceValue = employee.importance;

    for (let subordinate of employee.subordinates) {
      importanceValue += dfs(subordinate);
    }

    return importanceValue;
  }

  return dfs(id);
}
