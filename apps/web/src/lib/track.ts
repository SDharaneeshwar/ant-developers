export function trackEvent(eventName: string, metadata?: Record<string, string>) {
  if (typeof window === "undefined") return;

  console.log("[track]", eventName, metadata || {});

  window.dispatchEvent(
    new CustomEvent("ant-track", {
      detail: {
        eventName,
        metadata: metadata || {},
        timestamp: new Date().toISOString(),
      },
    })
  );
}