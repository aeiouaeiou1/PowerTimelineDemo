# Power Timeline browser demo

[Open the browser app](https://aeiouaeiou1.github.io/PowerTimelineDemo/) · [Download the desktop preview](https://github.com/aeiouaeiou1/PowerTimelineDemo/releases/tag/v0.1.0-preview.1)

This repository hosts compiled Power Timeline builds: the HTML, CSS, JavaScript and Go WebAssembly browser demo, plus packaged desktop apps in Releases. It has no Go/TypeScript source, source-project history, or personal recordings.

Select **Try demo ride** to explore a synthetic calibration recording. You can also import your own Power Timeline CSV, adjust regression settings, save models, and export results. Recordings and analysis stay in your browser.

In supported browsers, connect a trainer and reference power meter through **Devices → Choose Bluetooth device**. Trainers with standard FTMS control can run editable ERG calibration workouts. Keep the tab visible and the computer awake during a workout. Wi-Fi discovery and broadcasting a virtual device to Zwift require the desktop app.

Recordings autosave in browser storage every five seconds and on Stop. Export a separate copy before clearing site data. Hardware behavior still needs testing on each browser/OS/device combination; automated checks use simulated Bluetooth devices. Closing or suspending the browser cannot guarantee that a trainer receives Stop.

Built from private source revision `abd4bd1` with TinyGo 0.42.0 (Go 1.26.0) and Binaryen 132. The app loads the smaller TinyGo worker from `wasm-tinygo/`; the previous `wasm/` assets remain available for cached older pages. Published assets only; not an open-source release.

Desktop preview downloads cover macOS 12+, Windows 10/11, and Ubuntu 24.04+ on Intel/AMD x86-64 and ARM64. Use **Get the desktop app** in the browser demo, or choose a file from Releases. The release includes SHA-256 checksums and installation notes. Mac builds are ad-hoc signed but not notarized; Windows builds are not publisher-signed. Hardware support needs testing on each platform.
