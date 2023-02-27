export interface IDepartment {
  id: number;
  company_id: number;
  name: string;
  type: 100 | 200;
  deleted_at: string;
  rbacRoles: IRbacRole[];
  rbacAssignmentCount: string;
}

export interface IRbacRole {
  id: number;
  name: string;
  type: 100 | 200;
  degree: 100 | 200 | 300;
  shift_type: number;
  rbacAssignmentCount: string;
}
