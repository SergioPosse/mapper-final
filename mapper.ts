import {
  AuthV2Interface,
  RoleV2,
  PolicyV1,
  DataV1,
  AuthV1Interface,
} from './AuthV2Interface';

export const mappV2toV1 = (initValue: AuthV2Interface): AuthV1Interface => {
  const policies: PolicyV1[] = [];
  const roles: RoleV2[] = initValue.data.currentStore.roles || [];
  const token = roles[0].token;

  initValue.data.stores.forEach((store) => { 
    store.tenants.forEach((tenant) => { 
      roles?.forEach((role) => { 
        const policy: PolicyV1 = {
          tenant: tenant.name,
          country: 'Chile',
          flag: 'PARIS',
          store: {
            id: store.id,
            name: store.name,
            code: store.code,
          },
          role: '',
          permissions: [],
        };
          if (tenant.name === role.tenant.name) {
            policy.role = role.role;
            policy.permissions = role.permissions;
          }
        if(policy.role !== '' || policy.permissions.length > 0){
          policies.push(policy);
        }
      });
    }); // end store.tenants
  }); // end store


  const data: DataV1 = {
    token,
    id: initValue.data.id,
    cencoId: initValue.data.cencoId,
    name: initValue.data.name,
    lastname: initValue.data.lastname,
    email: initValue.data.email,
    deletedAt: initValue.data.deletedAt,
    policies: policies,
  };

  const result: AuthV1Interface = {
    status: initValue.status,
    data: data,
  };
  return result;
};
