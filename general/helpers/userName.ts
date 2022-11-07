export function getUserName(email: string): string {
    return email?.split('@')[0]
}
