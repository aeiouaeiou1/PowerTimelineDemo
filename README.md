# Power Timeline browser demo

[Open the browser app](https://aeiouaeiou1.github.io/PowerTimelineDemo/) · [Download the desktop preview](https://github.com/aeiouaeiou1/PowerTimelineDemo/releases/tag/v0.1.0-preview.2)

This repository hosts compiled Power Timeline builds: the HTML, CSS, JavaScript and Go WebAssembly browser demo, plus packaged desktop apps in Releases. It has no Go/TypeScript source, source-project history, or personal recordings.

Select **Try demo ride** to explore a synthetic calibration recording. You can also import your own Power Timeline CSV, adjust regression settings, save models, and export results. Recordings and analysis stay in your browser.

Calibration now fits one model and shows its before/after fit error, average-power agreement, and errors by power band. Results are labeled **Measured on the calibration recording**; they describe agreement on that recording, not independent validation on another ride.

New recordings preserve cadence and available left/right power derived from reported pedal balance. Use the chart checkboxes to display these metrics. Older CSVs remain supported, with missing metrics left unavailable. The synthetic demo includes cadence and reference leg power.

In supported browsers, connect a trainer and reference power meter through **Devices → Choose Bluetooth device**. Trainers with standard FTMS control can run editable ERG calibration workouts. Keep the tab visible and the computer awake during a workout. Wi-Fi discovery and broadcasting a virtual device to Zwift require the desktop app.

Recordings autosave in browser storage every five seconds and on Stop. Export a separate copy before clearing site data. Hardware behavior still needs testing on each browser/OS/device combination; automated checks use simulated Bluetooth devices. Closing or suspending the browser cannot guarantee that a trainer receives Stop.

Built from private source revision `bc2a8bf` with TinyGo 0.42.0 (Go 1.26.0) and Binaryen 132. The app loads its TinyGo worker from `wasm-tinygo/`. Legacy standard-Go Wasm assets have been removed. Published assets only; not an open-source release.

Desktop preview downloads cover macOS 12+, Windows 10/11, and Ubuntu 24.04+ on Intel/AMD x86-64 and ARM64. Use **Get the desktop app** in the browser demo, or choose a file from Releases. The release includes SHA-256 checksums and installation notes. Mac builds are ad-hoc signed but not notarized; Windows builds are not publisher-signed. Hardware support needs testing on each platform.

The macOS DMGs include a styled, Retina drag-to-install window. Drag Power Timeline to Applications and open it there after the copy finishes. The preview still requires first-launch approval in macOS Privacy & Security because it is not notarized.

Preview 2 also fixes Windows Bluetooth service discovery and cleans up device names and dropdown labels. Chrome chooses one Bluetooth device per chooser opening; repeat the chooser to add a second device and use both together.
