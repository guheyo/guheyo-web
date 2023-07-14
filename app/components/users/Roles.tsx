import {Role} from 'prisma'
import {memo} from 'react'

function RoleName({role}: {role: Role}) {
  if (role.hexColor === '#000001') {
    return <div className='bg-black text-white'>{role.name}</div>
  } else {
    return <div>{role.name}</div>
  }
}

const Roles = ({roles}: {roles?: Role[]}) => {
  if (!roles) return <></>
  return (
    <div className='flex flex-wrap justify-start'>
      {roles.map((role: Role, i: number) => {
        if (role.name === '@everyone') return <></>
        return (
          <div key={i} className='flex flex-row items-center mr-1.5'>
            <div
              className={`w-3 h-3 rounded-full mr-0.5`}
              style={{
                backgroundColor: role.hexColor,
              }}
            />
            <div>
              <RoleName role={role} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default memo(Roles)
