# Power Timeline browser demo

[Open the browser app](https://aeiouaeiou1.github.io/PowerTimelineDemo/) · [Download the desktop preview](https://github.com/aeiouaeiou1/PowerTimelineDemo/releases/tag/v0.1.0-preview.2)

This repository hosts compiled Power Timeline builds: the HTML, CSS, JavaScript and Go WebAssembly browser demo, plus packaged desktop apps in Releases. It has no Go/TypeScript source, source-project history, or personal recordings.

Select **Try demo ride** to explore a synthetic calibration recording. You can also import a Power Timeline CSV or choose **Import FIT pair** to compare trainer and reference FIT files from the same ride, adjust regression settings, save models, and export results. Recordings and analysis stay in your browser.

Calibration now fits one model and shows its before/after fit error, average-power agreement, and errors by power band. Results are labeled **Measured on the calibration recording**; they describe agreement on that recording, not independent validation on another ride.

New recordings preserve cadence and available left/right power derived from reported pedal balance. Use the chart checkboxes to display these metrics. Older CSVs remain supported, with missing metrics left unavailable. The synthetic demo includes cadence and reference leg power.

FIT import accepts files with an omitted optional header checksum while still validating the full file checksum, including every member of chained FIT files. Corrupt or truncated files remain rejected.

FIT imports align both files on their recorded UTC timestamps, preserving different start times, gaps, and zeros. The paired ride opens in Calibration and is saved locally as a derived CSV in Recent recordings. The original FIT files stay unchanged. Use the time-offset controls and **Estimate delay** to check alignment. Cadence and supported left/right balance are included when available. Uncompressed FIT files up to 16 MB each are supported. Import asks only for the two files. After fitting, use **Trainer for this model (optional)** beside **Save model** to associate the calibration with a live trainer. Leave it blank to save for comparison only; saving does not activate correction.

The web introduction can be dismissed and restored with **Web info**. **Get the desktop app** stays permanently in the Overview header. **Recent recordings** collapses from its heading while keeping import/open controls available. These preferences are remembered locally across navigation and reloads. Each recent-recording row has a trash button that removes it from the list while keeping its data and any open chart. Use Undo or Show removed recordings to restore entries, including after a reload.

**Calibration → Comparison settings → Manual** lets you create a correction without a recording using a percentage adjustment and a watt offset. **Regression / Manual** and the manual adjustment fields share the Comparison settings card. When a recording is open, both modes show the recording chart and comparison scatterplot. The manual correction line and calibrated trace update immediately as you edit; alignment, trimming, input averaging, and filtering update the comparison points without fitting a model. Manual drafts survive switching modes. You can also adjust a copy of an existing saved model or regression result. Manual models are labeled separately, with no fitted-range or regression-score claims. Zero watts remains zero, negative results clamp to zero, and saving does not select the model or enable correction.

On phones, navigation opens from the menu and charts use the full content width. Input and fitting settings and additional metrics can collapse, while manual coefficients stay visible. Time alignment stays below the recording. Controls have larger touch targets, chart readouts support taps, and the workout display uses a two-column metric layout with a responsive graph.

**Power curve** is now a tab in the Overview and Calibration charts. Compare the best average trainer, reference, and corrected power at each duration, and tap or hover to see the effort times. Overview uses the full session; Calibration uses its trimmed interval and current model. Curves share time-matched coverage, count coasting zeros, and exclude efforts crossing detected gaps. Each feed can achieve its best effort at a different moment. Zoom with the scroll wheel or pinch, or expand the duration table. The calculation uses the shared Go engine through TinyGo/WebAssembly.

Nominal 1 Hz trainer readings now match their timestamps directly. Faster trainer feeds use time-weighted averages over the preceding second, labeled at the end of that window (9–10 seconds appears at timestamp 10). An initial reading can display at time zero without adding a fictitious second of coverage. Left/right power shares the total’s matching and smoothing, so the traces stay aligned. Calibration uses one power-band breakdown table, and **Estimate delay** is available directly in the time-alignment controls.

In supported browsers, connect a trainer and reference power meter through **Devices → Choose Bluetooth device**. Trainers with standard FTMS control can run editable ERG calibration workouts. Keep the tab visible and the computer awake during a workout. Wi-Fi discovery and broadcasting a virtual device to Zwift require the desktop app.

Recordings autosave in browser storage every five seconds and on Stop. Export a separate copy before clearing site data. Hardware behavior still needs testing on each browser/OS/device combination; automated checks use simulated Bluetooth devices. Closing or suspending the browser cannot guarantee that a trainer receives Stop.

Built from private source revision `3adba22` with TinyGo 0.42.0 (Go 1.26.0) and Binaryen 132. The app loads its TinyGo worker from `wasm-tinygo/`. Legacy standard-Go Wasm assets have been removed. Published assets only; not an open-source release.

Desktop preview downloads cover macOS 12+, Windows 10/11, and Ubuntu 24.04+ on Intel/AMD x86-64 and ARM64. Use **Get the desktop app** in the browser demo, or choose a file from Releases. The release includes SHA-256 checksums and installation notes. Mac builds are ad-hoc signed but not notarized; Windows builds are not publisher-signed. Hardware support needs testing on each platform.

The macOS DMGs include a styled, Retina drag-to-install window. Drag Power Timeline to Applications and open it there after the copy finishes. The preview still requires first-launch approval in macOS Privacy & Security because it is not notarized.

Preview 2 also fixes Windows Bluetooth service discovery and cleans up device names and dropdown labels. Chrome chooses one Bluetooth device per chooser opening; repeat the chooser to add a second device and use both together.

Third-party license notices are included in [THIRD-PARTY-NOTICES.txt](THIRD-PARTY-NOTICES.txt).
