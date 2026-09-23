interface AuditLog {
    readonly id: string;
    readonly action: string;
    readonly timestamp: number;
}

type ReadonlyLedger = ReadonlyArray<AuditLog>;

class AuditTracker {
    private ledger: ReadonlyLedger = [];

    public append(action: string): ReadonlyLedger {
        const newEntry: AuditLog = Object.freeze({
            id: crypto.randomUUID(),
            action,
            timestamp: Date.now(),
        });
        this.ledger = [...this.ledger, newEntry];
        return this.ledger;
    }

    public getHistory(): ReadonlyLedger {
        return this.ledger;
    }
}


const tracker = new AuditTracker();
tracker.append("User logged in");
tracker.append("User updated profile");

console.log(tracker.getHistory());