enum UserStatus {created = 10, updated, disabled = 20, deleted}
const user = {status: UserStatus.created};

function isUserDisabled(user: any): boolean {
    return user.status === UserStatus.disabled;
}

function disableUser(user: any): void {
    user.status = UserStatus.disabled;
}

console.log(isUserDisabled(user));
disableUser(user);
console.log(isUserDisabled(user));
