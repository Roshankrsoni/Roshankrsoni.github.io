type Listener = () => void;

const listeners = new Set<Listener>();

export function onDeferredSectionsReady(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function loadDeferredSections() {
  if (listeners.size === 0) return;
  const pending = [...listeners];
  listeners.clear();
  pending.forEach((listener) => listener());
}
