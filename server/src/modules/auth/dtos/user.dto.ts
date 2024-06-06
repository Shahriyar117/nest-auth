import { User } from '../schemas/user.schema';

export class UserDto {
  id: string;
  username: string;
  email: string;
}

export function toUserDto(user: User): UserDto {
  const { _id, username, email } = user;
  return {
    id: _id,
    username,
    email,
  };
}
