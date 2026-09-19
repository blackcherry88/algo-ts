interface MetricEvent {
    timestamp: number;
    name: string;
    value: number;
}

function isMetricEvent(item: unknown): item is MetricEvent {
    if (typeof item !== "object" || item === null) {
        return false;
    }

    const metric = item as MetricEvent;
    return (
        typeof metric.timestamp === "number" &&
        typeof metric.name === "string" &&
        typeof metric.value === "number"
    );  
}

function proessTelemetryStream(rawPayloads: unknown[]): MetricEvent[] {
    return rawPayloads.filter(isMetricEvent);
}

const rawData: unknown[] = [
    { timestamp: Date.now(), name: "cpu_usage", value: 0.75 },
    { timestamp: Date.now(), name: "memory_usage", value: 0.60 },
    { timestamp: "invalid_timestamp", name: "disk_io", value: 0.80 },
    { timestamp: Date.now(), name: "network_latency", value: 120 },
];

const validMetrics = proessTelemetryStream(rawData);
console.log("Valid Metric Events:", validMetrics);
