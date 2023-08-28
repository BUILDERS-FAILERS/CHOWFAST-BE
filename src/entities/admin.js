export default function createAdmin(name, email, password, role) {
    return {
        getName: () => name,
        getEmail: () => email,
        getPassword: () => password,
        getRole: () => role
    };
}
