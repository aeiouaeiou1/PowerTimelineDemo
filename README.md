# Power Timeline browser demo

[Open the app](https://aeiouaeiou1.github.io/PowerTimelineDemo/)

This repository contains only the deployable browser build of Power Timeline: HTML, CSS, JavaScript, and compiled Go WebAssembly. It has no Go/TypeScript source, source-project history, or personal recordings.

Select **Try demo ride** to explore a synthetic calibration recording. You can also import your own Power Timeline CSV, adjust regression settings, save models, and export results. Recordings and analysis stay in your browser.

In supported browsers, connect a trainer and reference power meter through **Devices → Choose Bluetooth device**. Trainers with standard FTMS control can run editable ERG calibration workouts. Keep the tab visible and the computer awake during a workout. Wi-Fi discovery and broadcasting a virtual device to Zwift require the desktop app.

Recordings autosave in browser storage every five seconds and on Stop. Export a separate copy before clearing site data. Hardware behavior still needs testing on each browser/OS/device combination; automated checks use simulated Bluetooth devices. Closing or suspending the browser cannot guarantee that a trainer receives Stop.

Built from private source revision `8ff1595` with Go 1.26.0. Published assets only; not an open-source release.
