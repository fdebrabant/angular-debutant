enum UserStatus {
  created = 10,
  updated,
  disabled = 20,
  deleted
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
