interface UserProfile {
  id: string;
  account?: {
    settings?: {
      notifications?: {
        emailEnabled?: boolean;
      };
    };
    emails?: string[];
  };
}

function getPrimaryEmail(user: UserProfile): string {
  return user.account?.emails?.[0] ?? 'noreply@example.com';
}

function isEmailNotificationEnabled(user: UserProfile): boolean {
  return user.account?.settings?.notifications?.emailEnabled ?? false;
}

// Usage Example
const user: UserProfile = { id: 'usr_101' };
console.log(getPrimaryEmail(user)); // "noreply@example.com"
console.log(isEmailNotificationEnabled(user)); // false
