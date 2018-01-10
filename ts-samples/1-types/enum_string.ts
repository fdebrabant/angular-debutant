enum UserStatus {
  created = 'CREATED',
  updated = 'UPDATED',
  disabled = 'DISABLED',
  deleted = 'DELETED'
}
const user = { status: null};

user.status = UserStatus.created;
console.log(user.status);
user.status = UserStatus.updated;
console.log(user.status);
user.status = UserStatus.disabled;
console.log(user.status);
user.status = UserStatus.deleted;
console.log(user.status);
