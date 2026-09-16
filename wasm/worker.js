// Classic worker: Go's runtime installs its globals here, away from the UI.
importScripts("./wasm_exec.js");
self.powerTimelineEvent = (json) =>
  self.postMessage({ event: JSON.parse(json) });
self.powerTimelineReady = () => self.postMessage({ ready: true });
self.onmessage = ({ data }) => {
  try {
    const response = JSON.parse(
      self.powerTimelineCall(JSON.stringify(data.request)),
    );
    self.postMessage({ id: data.id, ...response });
  } catch (error) {
    self.postMessage({ id: data.id, error: String(error) });
  }
};
(async () => {
  try {
    const go = new Go();
    const response = await fetch("./app.wasm");
    if (!response.ok)
      throw new Error(`Cannot load calibration engine (${response.status})`);
    // arrayBuffer also works on static hosts without the application/wasm MIME type.
    const module = await WebAssembly.instantiate(
      await response.arrayBuffer(),
      go.importObject,
    );
    await go.run(module.instance);
    self.postMessage({ fatal: "Calibration engine stopped. Reload the page." });
  } catch (error) {
    self.postMessage({ fatal: String(error) });
  }
})();
