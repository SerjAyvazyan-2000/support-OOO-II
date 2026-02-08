

export type EmployeeStatus = "active" | "break" | "dinner" | "inactive";

export type Employee = {
  id: number;
  name: string;
  avatar: string;
  timeText: string;
  status: EmployeeStatus;
  statusLabel: string;
};


