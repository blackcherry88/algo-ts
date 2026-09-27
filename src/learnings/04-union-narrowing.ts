function normalizeId(id: string | number): string {
    if (typeof id === 'string') {
        return id.toUpperCase();
    } else {
        return `#${id}`;
    }
}

console.log(normalizeId('abc')); // Output: 'ABC'
console.log(normalizeId(123)); // Output: '#123'

type Role = 'admin' | 'editor' | 'viewer';

function canEdit(role: Role): boolean {
    return role === 'admin' || role === 'editor';
}

console.log(canEdit('admin')); // Output: true
console.log(canEdit('viewer')); // Output: false
