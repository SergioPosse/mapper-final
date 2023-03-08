export interface StoreV1 {
  id: number
  name: string
  code: string
}
export interface PolicyV1 {
  tenant: string
  country: string
  flag: string
  store: StoreV1
  role: string
  permissions: string[]
}
export interface DataV1 {
  token: string
  id: number
  cencoId: string
  name: string
  lastname: string
  email: string
  deletedAt: string | null
  policies: PolicyV1[]
}

export interface AuthV1Interface {
  status: string
  data: DataV1
}

// V2 RESPONSE
interface StoreV2 {
  id: number;
  name: string;
  code: string;
  tenants: {
    id: number;
    name: string;
  }[]
}

export interface RoleV2 {
  role: string;
  permissions: string[];
  tenant: {
    id: number;
    name: string;
  }
  token: string;
}

export interface AuthV2Interface {
  status: string;
  data: {
    id: number;
    cencoId: string;
    name: string;
    lastname: string;
    email: string;
    deletedAt: string | null;
    stores: StoreV2[];
    currentStore: {
      id: number;
      name: string;
      code: string;
      tenants: {id: number, name: string}[]
      roles: RoleV2[]
    }
  }
}