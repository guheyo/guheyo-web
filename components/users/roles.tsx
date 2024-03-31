import { RoleResponse } from '@/generated/graphql';

function RoleName({ role }: { role: RoleResponse }) {
  if (role.hexColor === '#000001') {
    return (
      <div className="bg-black text-dark-200 rounded-sm px-0.5">
        {role.name}
      </div>
    );
  }
  return <div>{role.name}</div>;
}

export default function Roles({ roles }: { roles?: RoleResponse[] }) {
  if (!roles) return null;
  return (
    <div className="flex flex-wrap justify-start">
      {roles.map((role) => {
        if (role.name === '@everyone') return null;
        return (
          <div key={role.id} className="flex flex-row items-center mr-1.5">
            <div
              className="w-3 h-3 rounded-full mr-0.5"
              style={{
                backgroundColor: role.hexColor,
              }}
            />
            <RoleName role={role} />
          </div>
        );
      })}
    </div>
  );
}
