import { Role } from 'prisma';

function RoleName({ role }: { role: Role }) {
  if (role.hexColor === '#000001') {
    return <div className="bg-black text-white">{role.name}</div>;
  }
  return <div>{role.name}</div>;
}

export default function Roles({ roles }: { roles?: Role[] }) {
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
            <div>
              <RoleName role={role} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
