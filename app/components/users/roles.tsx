import { Role } from 'prisma';
import { memo } from 'react';

interface RoleProps {
  role: Role;
}
interface RolesProps {
  roles?: Role[];
}

const RoleName = memo(({ role }: RoleProps) => {
  if (role.hexColor === '#000001') {
    return <div className="bg-black text-white">{role.name}</div>;
  }
  return <div>{role.name}</div>;
});

const Roles = ({ roles }: RolesProps) => {
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
};

export default memo(Roles);
