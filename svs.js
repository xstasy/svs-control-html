// SVS Configuration
const UUID = "1fee6acf-a826-4e37-9635-4d8a01642c5d";
const CHAR22 = "6409d79d-cd28-479c-a639-92f9e1948b43";
const FRAME_PREAMBLE = 0xAA;

const SVS_FRAME_TYPES = {
    "PRESETLOADSAVE": [0x07, 0x04],
    "MEMWRITE": [0xF0, 0x1F],
    "MEMREAD": [0xF1, 0x1F],
    "READ_RESP": [0xF2, 0x00],
    "RESET": [0xF3, 0x1F],
    "SUB_INFO1": [0xF4, 0x1F],
    "SUB_INFO1_RESP": [0xF5, 0x00],
    "SUB_INFO2": [0xFC, 0x1F],
    "SUB_INFO2_RESP": [0xFD, 0x00],
    "SUB_INFO3": [0xFE, 0x1F],
    "SUB_INFO3_RESP": [0xFF, 0x00]
};

const SVS_PARAMS = {
    "FULL_SETTINGS": { id: 4, offset: 0x0, limits: [null], limits_type: "group", n_bytes: 52, reset_id: -1 },
    "DISPLAY": { id: 4, offset: 0x0, limits: [0, 1, 2], limits_type: 1, n_bytes: 2, reset_id: 0 },
    "DISPLAY_TIMEOUT": { id: 4, offset: 0x2, limits: [0, 10, 20, 30, 40, 50, 60], limits_type: 1, n_bytes: 2, reset_id: 1 },
    "STANDBY": { id: 4, offset: 0x4, limits: [0, 1, 2], limits_type: 1, n_bytes: 2, reset_id: 2 },
    "BRIGHTNESS": { id: 4, offset: 0x6, limits: [0, 1, 2, 3, 4, 5, 6, 7], limits_type: 1, n_bytes: 2, reset_id: 14 },
    "LOW_PASS_FILTER_ALL_SETTINGS": { id: 4, offset: 0x8, limits: [null], limits_type: "group", n_bytes: 6, reset_id: 3 },
    "LOW_PASS_FILTER_ENABLE": { id: 4, offset: 0x8, limits: [0, 1], limits_type: 1, n_bytes: 2, reset_id: 3 },
    "LOW_PASS_FILTER_FREQ": { id: 4, offset: 0xa, limits: [30, 200], limits_type: 0, n_bytes: 2, reset_id: 3 },
    "LOW_PASS_FILTER_SLOPE": { id: 4, offset: 0xc, limits: [6, 12, 18, 24], limits_type: 1, n_bytes: 2, reset_id: 3 },
    "PEQ1_ALL_SETTINGS": { id: 4, offset: 0xe, limits: [null], limits_type: "group", n_bytes: 8, reset_id: 5 },
    "PEQ1_ENABLE": { id: 4, offset: 0xe, limits: [0, 1], limits_type: 1, n_bytes: 2, reset_id: 5 },
    "PEQ1_FREQ": { id: 4, offset: 0x10, limits: [20, 200], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "PEQ1_BOOST": { id: 4, offset: 0x12, limits: [-12.0, 6.0], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "PEQ1_QFACTOR": { id: 4, offset: 0x14, limits: [0.2, 10.0], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "PEQ2_ALL_SETTINGS": { id: 4, offset: 0x16, limits: [null], limits_type: "group", n_bytes: 8, reset_id: 5 },
    "PEQ2_ENABLE": { id: 4, offset: 0x16, limits: [0, 1], limits_type: 1, n_bytes: 2, reset_id: 5 },
    "PEQ2_FREQ": { id: 4, offset: 0x18, limits: [20, 200], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "PEQ2_BOOST": { id: 4, offset: 0x1a, limits: [-12.0, 6.0], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "PEQ2_QFACTOR": { id: 4, offset: 0x1c, limits: [0.2, 10.0], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "PEQ3_ALL_SETTINGS": { id: 4, offset: 0x1e, limits: [null], limits_type: "group", n_bytes: 8, reset_id: 5 },
    "PEQ3_ENABLE": { id: 4, offset: 0x1e, limits: [0, 1], limits_type: 1, n_bytes: 2, reset_id: 5 },
    "PEQ3_FREQ": { id: 4, offset: 0x20, limits: [20, 200], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "PEQ3_BOOST": { id: 4, offset: 0x22, limits: [-12.0, 6.0], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "PEQ3_QFACTOR": { id: 4, offset: 0x24, limits: [0.2, 10.0], limits_type: 0, n_bytes: 2, reset_id: 5 },
    "ROOM_GAIN_ALL_SETTINGS": { id: 4, offset: 0x26, limits: [null], limits_type: "group", n_bytes: 6, reset_id: 8 },
    "ROOM_GAIN_ENABLE": { id: 4, offset: 0x26, limits: [0, 1], limits_type: 1, n_bytes: 2, reset_id: 8 },
    "ROOM_GAIN_FREQ": { id: 4, offset: 0x28, limits: [25, 31, 40], limits_type: 1, n_bytes: 2, reset_id: 8 },
    "ROOM_GAIN_SLOPE": { id: 4, offset: 0x2a, limits: [6, 12], limits_type: 1, n_bytes: 2, reset_id: 8 },
    "VOLUME": { id: 4, offset: 0x2c, limits: [-60, 0], limits_type: 0, n_bytes: 2, reset_id: 12 },
    "PHASE": { id: 4, offset: 0x2e, limits: [0, 180], limits_type: 0, n_bytes: 2, reset_id: 9 },
    "POLARITY": { id: 4, offset: 0x30, limits: [0, 1], limits_type: 1, n_bytes: 2, reset_id: 10 },
    "PORTTUNING": { id: 4, offset: 0x32, limits: [20, 30], limits_type: 1, n_bytes: 2, reset_id: 11 },
    "PRESET1NAME": { id: 8, offset: 0x0, limits: [""], limits_type: 2, n_bytes: 8, reset_id: 13 },
    "PRESET2NAME": { id: 9, offset: 0x0, limits: [""], limits_type: 2, n_bytes: 8, reset_id: 13 },
    "PRESET3NAME": { id: 0xA, offset: 0x0, limits: [""], limits_type: 2, n_bytes: 8, reset_id: 13 },
    "PRESET1LOAD": { id: 0x18, offset: 0x1, limits: [null], limits_type: -1, n_bytes: 0, reset_id: -1 },
    "PRESET2LOAD": { id: 0x19, offset: 0x1, limits: [null], limits_type: -1, n_bytes: 0, reset_id: -1 },
    "PRESET3LOAD": { id: 0x1A, offset: 0x1, limits: [null], limits_type: -1, n_bytes: 0, reset_id: -1 },
    "PRESET4LOAD": { id: 0x1B, offset: 0x1, limits: [null], limits_type: -1, n_bytes: 0, reset_id: -1 },
    "PRESET1SAVE": { id: 0x1C, offset: 0x1, limits: [null], limits_type: -1, n_bytes: 0, reset_id: -1 },
    "PRESET2SAVE": { id: 0x1D, offset: 0x1, limits: [null], limits_type: -1, n_bytes: 0, reset_id: -1 },
    "PRESET3SAVE": { id: 0x1E, offset: 0x1, limits: [null], limits_type: -1, n_bytes: 0, reset_id: -1 }
};

// Global variables
let bluetoothDevice = null;
let characteristic = null;
let partialFrame = new Uint8Array();
let presetValues = ["MOVIE", "MUSIC", "CUSTOM", "DEFAULT"];

// Cached DOM elements
const ui = {
    root: {
        app: document.getElementById('app'),
        header: document.getElementsByClassName('header')[0],
        console: document.getElementById('console'),
        connectBtn: document.getElementById('connectBtn')
    },
    volume: { slider: document.getElementById('volumeSlider'), value: document.getElementById('volumeValue') },
    phase: { slider: document.getElementById('phaseSlider'), value: document.getElementById('phaseValue') },
    lpf: {
        checkbox: document.getElementById('lpfCheckbox'),
        freqSlider: document.getElementById('lpfFreqSlider'),
        freqValue: document.getElementById('lpfFreqValue'),
        slope: document.getElementById('lpfSlope'),
        label: document.getElementById('lpfLabel')
    },
    roomGain: {
        checkbox: document.getElementById('roomGainCheckbox'),
        freqSlider: document.getElementById('roomGainFreqSlider'),
        freqValue: document.getElementById('roomGainFreqValue'),
        slope: document.getElementById('roomGainSlope'),
        label: document.getElementById('roomGainLabel')
    },
    peq1: {
        checkbox: document.getElementById('peq1Checkbox'),
        freqSlider: document.getElementById('peq1FreqSlider'),
        freqValue: document.getElementById('peq1FreqValue'),
        boostSlider: document.getElementById('peq1BoostSlider'),
        boostValue: document.getElementById('peq1BoostValue'),
        qSlider: document.getElementById('peq1QSlider'),
        qValue: document.getElementById('peq1QValue'),
        label: document.getElementById('peq1Label')
    },
    peq2: {
        checkbox: document.getElementById('peq2Checkbox'),
        freqSlider: document.getElementById('peq2FreqSlider'),
        freqValue: document.getElementById('peq2FreqValue'),
        boostSlider: document.getElementById('peq2BoostSlider'),
        boostValue: document.getElementById('peq2BoostValue'),
        qSlider: document.getElementById('peq2QSlider'),
        qValue: document.getElementById('peq2QValue'),
        label: document.getElementById('peq2Label')
    },
    peq3: {
        checkbox: document.getElementById('peq3Checkbox'),
        freqSlider: document.getElementById('peq3FreqSlider'),
        freqValue: document.getElementById('peq3FreqValue'),
        boostSlider: document.getElementById('peq3BoostSlider'),
        boostValue: document.getElementById('peq3BoostValue'),
        qSlider: document.getElementById('peq3QSlider'),
        qValue: document.getElementById('peq3QValue'),
        label: document.getElementById('peq3Label')
    },
    standby: { select: document.getElementById('standbySelect') },
    polarity: { checkbox: document.getElementById('polarityCheckbox'), label: document.getElementById('polarityLabel') },
    portTuning: { select: document.getElementById('portTuningSelect') },
    preset: { select: document.getElementById('presetSelect') },
    tabs: document.querySelectorAll('.tab'),
    tabContents: document.querySelectorAll('.tab-content')
};


// CRC calculation (CRC-CCITT)
function crcHqx(data, crc = 0x0000) {
    for (let byte of data) {
        crc ^= byte << 8;
        for (let i = 0; i < 8; i++) {
            crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
        }
    }
    return crc & 0xFFFF;
}

// Utility functions
function toHexString(byteArray) {
    return Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}

function intToBytes(value, numBytes, littleEndian = true) {
    const bytes = new Uint8Array(numBytes);
    for (let i = 0; i < numBytes; i++) {
        bytes[littleEndian ? i : numBytes - 1 - i] = (value >> (i * 8)) & 0xFF;
    }
    return bytes;
}

function bytesToInt(bytes, littleEndian = true) {
    let value = 0;
    for (let i = 0; i < bytes.length; i++) {
        value |= bytes[littleEndian ? i : bytes.length - 1 - i] << (i * 8);
    }
    return value;
}

function concatArrays(...arrays) {
    const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of arrays) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}

// SVS Encode function
function svsEncode(ftype, param, data = null) {
    let frame = new Uint8Array();
    const paramConfig = SVS_PARAMS[param];

    if (ftype === "PRESETLOADSAVE" && paramConfig.id >= 0x18) {
        frame = concatArrays(
            intToBytes(paramConfig.id, 4),
            intToBytes(paramConfig.offset, 2),
            intToBytes(paramConfig.n_bytes, 2)
        );
    } else if (ftype === "MEMWRITE" && paramConfig.id <= 0xA && paramConfig.limits_type !== "group") {
        let encodedData;
        if (typeof data === 'string' && paramConfig.limits_type === 2) {
            const strData = data.substring(0, paramConfig.n_bytes).padEnd(paramConfig.n_bytes, '\0');
            encodedData = new TextEncoder().encode(strData);
        } else if (typeof data === 'number') {
            const limits = paramConfig.limits;
            const isValid = paramConfig.limits_type === 1 ?
                limits.includes(data) :
                (data >= Math.min(...limits) && data <= Math.max(...limits));

            if (isValid) {
                const mask = data >= 0 ? 0 : 0xFFFF;
                const encoded = ((Math.floor(10 * Math.abs(data)) ^ mask) + (mask % 2)) & 0xFFFF;
                encodedData = intToBytes(encoded, 2);
            } else {
                logConsole(`ERROR: Value for ${param} out of limits`);
                return null;
            }
        } else {
            logConsole(`ERROR: Value for ${param} incorrect`);
            return null;
        }
        frame = concatArrays(
            intToBytes(paramConfig.id, 4),
            intToBytes(paramConfig.offset, 2),
            intToBytes(paramConfig.n_bytes, 2),
            encodedData
        );
    } else if (ftype === "MEMREAD" && paramConfig.id <= 0xA) {
        frame = concatArrays(
            intToBytes(paramConfig.id, 4),
            intToBytes(paramConfig.offset, 2),
            intToBytes(paramConfig.n_bytes, 2)
        );
    } else if (ftype === "RESET" && paramConfig.id <= 0xA) {
        frame = intToBytes(paramConfig.reset_id, 1);
    } else if (["SUB_INFO1", "SUB_INFO2", "SUB_INFO3"].includes(ftype)) {
        frame = new Uint8Array([0x00]);
    } else {
        logConsole("ERROR: Unknown frame type to encode");
        return null;
    }

    const frameType = new Uint8Array(SVS_FRAME_TYPES[ftype]);
    const fullFrame = concatArrays(
        new Uint8Array([FRAME_PREAMBLE]),
        frameType,
        intToBytes(frame.length + 7, 2),
        frame
    );

    const crc = crcHqx(fullFrame, 0);
    const finalFrame = concatArrays(fullFrame, intToBytes(crc, 2));

    return finalFrame;
}

// SVS Decode function
function svsDecode(frame) {
    const output = {
        FRAME_RECOGNIZED: false,
        ATTRIBUTES: [],
        VALIDATED_VALUES: {}
    };

    if (frame.length < 7 || frame[0] !== FRAME_PREAMBLE) {
        return output;
    }

    const frameType = [frame[1], frame[2]];
    const frameLength = bytesToInt(frame.slice(3, 5));
    const receivedCrc = bytesToInt(frame.slice(frame.length - 2));
    const calculatedCrc = crcHqx(frame.slice(0, frame.length - 2), 0);

    if (receivedCrc !== calculatedCrc) {
        logConsole("ERROR: CRC mismatch");
        return output;
    }

    // Find frame type name
    let ftypeName = "UNKNOWN";
    for (const [name, bytes] of Object.entries(SVS_FRAME_TYPES)) {
        if (bytes[0] === frameType[0] && bytes[1] === frameType[1]) {
            ftypeName = name;
            break;
        }
    }

    output.FRAME_TYPE = ftypeName;
    output.FRAME_RECOGNIZED = true;

    if (ftypeName === "READ_RESP") {
        // READ_RESP has SECT_1 (4 bytes) before ID
        // Structure: PREAMBLE(1) + TYPE(2) + LENGTH(2) + SECT_1(4) + ID(4) + OFFSET(2) + SIZE(2) + DATA(X) + CRC(2)
        let dataStart = 5; // Start after preamble + type + length

        // Skip SECT_1 (4 bytes)
        dataStart += 4;

        const id = bytesToInt(frame.slice(dataStart, dataStart + 4));
        dataStart += 4;

        const offset = bytesToInt(frame.slice(dataStart, dataStart + 2));
        dataStart += 2;

        const dataSize = bytesToInt(frame.slice(dataStart, dataStart + 2));
        dataStart += 2;

        const rawData = frame.slice(dataStart, dataStart + dataSize);

        // Find matching parameters
        for (const [attrName, config] of Object.entries(SVS_PARAMS)) {
            if (config.id === id && config.offset >= offset &&
                (config.offset + config.n_bytes) <= (offset + dataSize)) {
                output.ATTRIBUTES.push(attrName);

                const localOffset = Math.floor((config.offset - offset) / 2);
                if (config.limits_type === 2) {
                    // String type
                    const strData = rawData.slice(localOffset * 2, localOffset * 2 + config.n_bytes);
                    output.VALIDATED_VALUES[attrName] = new TextDecoder().decode(strData).replace(/\0/g, '');
                } else if (config.limits_type !== "group") {
                    // Numeric type
                    const valueBytes = rawData.slice(localOffset * 2, localOffset * 2 + 2);
                    if (valueBytes.length === 2) {
                        const rawValue = bytesToInt(valueBytes);
                        const mask = rawValue < 0xF000 ? 0 : 0xFFFF;
                        let value = (Math.pow(-1, mask % 2)) * ((rawValue - (mask % 2)) ^ mask) / 10;

                        const isValid = config.limits_type === 1 ?
                            config.limits.includes(value) :
                            (value >= Math.min(...config.limits) && value <= Math.max(...config.limits));

                        if (isValid) {
                            output.VALIDATED_VALUES[attrName] = value.toString().includes('.0') &&
                                Number.isInteger(parseFloat(value)) ? parseInt(value) : value;
                        }
                    }
                }
            }
        }
    }

    return output;
}

// Logging
function logConsole(message) {
    const line = document.createElement('div');
    line.className = 'console-line';
    line.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    ui.root.console.appendChild(line);
    ui.root.console.scrollTop = ui.root.console.scrollHeight;
}

// Bluetooth functions using cached DOM
async function connectToDevice() {
    try {
        logConsole('Requesting Bluetooth device...');
        bluetoothDevice = await navigator.bluetooth.requestDevice({ filters: [{ services: [UUID] }] });
        logConsole(`Connecting to ${bluetoothDevice.name}...`);
        const server = await bluetoothDevice.gatt.connect();
        logConsole('Getting service...');
        const service = await server.getPrimaryService(UUID);
        logConsole('Getting characteristic...');
        characteristic = await service.getCharacteristic(CHAR22);
        logConsole('Starting notifications...');
        await characteristic.startNotifications();
        characteristic.addEventListener('characteristicvaluechanged', handleNotifications);

        ui.root.connectBtn.textContent = 'Disconnect';
        ui.root.connectBtn.onclick = disconnectFromDevice;
        ui.root.header.className = 'header hidden';
        ui.root.app.className = '';

        setTimeout(() => requestConfig(), 500);
    } catch (error) {
        logConsole(`ERROR: ${error.message}`);
        alert('Failed to connect to device. Make sure Bluetooth is enabled and the device is nearby.');
    }
}

function disconnectFromDevice() {
    if (bluetoothDevice && bluetoothDevice.gatt.connected) {
        bluetoothDevice.gatt.disconnect();
        logConsole('Disconnected');
        ui.root.connectBtn.textContent = 'Connect to Subwoofer';
        ui.root.connectBtn.onclick = connectToDevice;
        ui.root.connectBtn.className = 'btn';
        ui.root.app.className = 'hidden';
        ui.root.header.className = 'header';
    }
}

// Notification handler
function handleNotifications(event) {
    const value = new Uint8Array(event.target.value.buffer);
    partialFrame = (value[0] === FRAME_PREAMBLE) ? value : concatArrays(partialFrame, value);
    if (partialFrame.length >= 5) {
        const expectedLength = bytesToInt(partialFrame.slice(3, 5));
        if (partialFrame.length >= expectedLength) {
            const decoded = svsDecode(partialFrame);
            if (decoded.FRAME_RECOGNIZED) {
                logConsole(`<- Received ${decoded.FRAME_TYPE} [${toHexString(partialFrame)}]`);
                refreshWidgets(decoded.VALIDATED_VALUES);
            } else {
                logConsole(`ERROR: Frame not recognized [${toHexString(partialFrame)}]`);
            }
        }
    }
}

// Sending frames
async function sendFrame(frame) {
    if (!characteristic) return logConsole('ERROR: Not connected to device');
    try {
        await characteristic.writeValue(frame);
        logConsole(`-> Sent [${toHexString(frame)}]`);
    } catch (error) {
        logConsole(`ERROR: Failed to send: ${error.message}`);
    }
}
async function sendCommand(ftype, param, data = null) {
    const frame = svsEncode(ftype, param, data);
    if (frame) {
        await sendFrame(frame);
        await new Promise(resolve => setTimeout(resolve, 200));
    }
}
async function requestConfig() {
    await sendCommand("MEMREAD", "FULL_SETTINGS");
    await sendCommand("MEMREAD", "PRESET1NAME");
    await sendCommand("MEMREAD", "PRESET2NAME");
    await sendCommand("MEMREAD", "PRESET3NAME");
}

// Refresh widgets using cached UI elements
function refreshWidgets(values) {
    for (const [key, value] of Object.entries(values)) {
        switch (key) {
            case "VOLUME":
                ui.volume.slider.value = value;
                ui.volume.value.textContent = value;
                break;
            case "PHASE":
                ui.phase.slider.value = value;
                ui.phase.value.textContent = value;
                break;
            case "LOW_PASS_FILTER_ENABLE":
                ui.lpf.checkbox.checked = value === 1;
                updateLpfState();
                break;
            case "LOW_PASS_FILTER_FREQ":
                ui.lpf.freqSlider.value = value;
                ui.lpf.freqValue.textContent = value;
                break;
            case "LOW_PASS_FILTER_SLOPE":
                ui.lpf.slope.value = value;
                break;
            case "ROOM_GAIN_ENABLE":
                ui.roomGain.checkbox.checked = value === 1;
                updateRoomGainState();
                break;
            case "ROOM_GAIN_FREQ":
                ui.roomGain.freqSlider.value = value;
                ui.roomGain.freqValue.textContent = value;
                break;
            case "ROOM_GAIN_SLOPE":
                ui.roomGain.slope.value = value;
                break;
            case "PEQ1_ENABLE":
                ui.peq1.checkbox.checked = value === 1;
                updatePeq1State();
                break;
            case "PEQ1_FREQ":
                ui.peq1.freqSlider.value = value;
                ui.peq1.freqValue.textContent = value;
                break;
            case "PEQ1_BOOST":
                ui.peq1.boostSlider.value = value;
                ui.peq1.boostValue.textContent = value.toFixed(1);
                break;
            case "PEQ1_QFACTOR":
                ui.peq1.qSlider.value = value;
                ui.peq1.qValue.textContent = value.toFixed(1);
                break;
            case "PEQ2_ENABLE":
                ui.peq2.checkbox.checked = value === 1;
                updatePeq2State();
                break;
            case "PEQ2_FREQ":
                ui.peq2.freqSlider.value = value;
                ui.peq2.freqValue.textContent = value;
                break;
            case "PEQ2_BOOST":
                ui.peq2.boostSlider.value = value;
                ui.peq2.boostValue.textContent = value.toFixed(1);
                break;
            case "PEQ2_QFACTOR":
                ui.peq2.qSlider.value = value;
                ui.peq2.qValue.textContent = value.toFixed(1);
                break;
            case "PEQ3_ENABLE":
                ui.peq3.checkbox.checked = value === 1;
                updatePeq3State();
                break;
            case "PEQ3_FREQ":
                ui.peq3.freqSlider.value = value;
                ui.peq3.freqValue.textContent = value;
                break;
            case "PEQ3_BOOST":
                ui.peq3.boostSlider.value = value;
                ui.peq3.boostValue.textContent = value.toFixed(1);
                break;
            case "PEQ3_QFACTOR":
                ui.peq3.qSlider.value = value;
                ui.peq3.qValue.textContent = value.toFixed(1);
                break;
            case "STANDBY":
                ui.standby.select.value = value;
                break;
            case "POLARITY":
                ui.polarity.checkbox.checked = value === 1;
                updatePolarityLabel();
                break;
            case "PORTTUNING":
                ui.portTuning.select.value = value;
                break;
            case "PRESET1NAME":
            case "PRESET2NAME":
            case "PRESET3NAME":
                const presetIndex = parseInt(key.match(/\d+/)[0]) - 1;
                presetValues[presetIndex] = value;
                updatePresetDropdown();
                break;
        }
    }
}

// UI update functions using cached elements
function updateLpfState() {
    const enabled = ui.lpf.checkbox.checked;
    ui.lpf.freqSlider.disabled = !enabled;
    ui.lpf.slope.disabled = !enabled;
    ui.lpf.label.textContent = enabled ? 'Low Pass Filter ON (LFE Inactive)' : 'Low Pass Filter OFF (LFE Active)';
}

function updateRoomGainState() {
    const enabled = ui.roomGain.checkbox.checked;
    ui.roomGain.freqSlider.disabled = !enabled;
    ui.roomGain.slope.disabled = !enabled;
    ui.roomGain.label.textContent = enabled ? 'Room Gain Compensation ON' : 'Room Gain Compensation OFF';
}

function updatePeq1State() {
    const enabled = ui.peq1.checkbox.checked;
    ui.peq1.freqSlider.disabled = !enabled;
    ui.peq1.boostSlider.disabled = !enabled;
    ui.peq1.qSlider.disabled = !enabled;
    ui.peq1.label.textContent = enabled ? 'PEQ1 Enabled' : 'PEQ1 Disabled';
}

function updatePeq2State() {
    const enabled = ui.peq2.checkbox.checked;
    ui.peq2.freqSlider.disabled = !enabled;
    ui.peq2.boostSlider.disabled = !enabled;
    ui.peq2.qSlider.disabled = !enabled;
    ui.peq2.label.textContent = enabled ? 'PEQ2 Enabled' : 'PEQ2 Disabled';
}

function updatePeq3State() {
    const enabled = ui.peq3.checkbox.checked;
    ui.peq3.freqSlider.disabled = !enabled;
    ui.peq3.boostSlider.disabled = !enabled;
    ui.peq3.qSlider.disabled = !enabled;
    ui.peq3.label.textContent = enabled ? 'PEQ3 Enabled' : 'PEQ3 Disabled';
}

function updatePolarityLabel() {
    ui.polarity.label.textContent = ui.polarity.checkbox.checked ? 'Polarity (-)' : 'Polarity (+)';
}

function updatePresetDropdown() {
    for (let i = 0; i < 3; i++) {
        ui.preset.select.options[i].text = presetValues[i];
    }
}

// Tab switching
function switchTab(index) {
    ui.tabs.forEach((tab, i) => { tab.classList.toggle('active', i === index); ui.tabContents[i].classList.toggle('active', i === index); });
}

// Presets
function loadPreset() { sendCommand("PRESETLOADSAVE", `PRESET${parseInt(ui.preset.select.value) + 1}LOAD`); }
function savePreset() { if (parseInt(ui.preset.select.value) !== 3) sendCommand("PRESETLOADSAVE", `PRESET${parseInt(ui.preset.select.value) + 1}SAVE`); else alert('Cannot save to DEFAULT preset'); }
function renamePreset() {
    const idx = parseInt(ui.preset.select.value); if (idx === 3) { alert('Cannot rename DEFAULT preset'); return; }
    const newName = prompt('Enter new preset name (max 8 characters):', presetValues[idx]);
    if (newName) { const filtered = newName.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 8); if (filtered && !presetValues.includes(filtered)) { presetValues[idx] = filtered; updatePresetDropdown(); sendCommand("MEMWRITE", `PRESET${idx + 1}NAME`, filtered); } }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    ui.root.connectBtn.onclick = connectToDevice;

    // Volume & Phase
    [['volume', 'VOLUME'], ['phase', 'PHASE']].forEach(([key, param]) => {
        const group = ui[key];
        group.slider.addEventListener('input', e => group.value.textContent = e.target.value);
        group.slider.addEventListener('change', e => sendCommand("MEMWRITE", param, parseFloat(e.target.value)));
    });

    // LPF
    ui.lpf.checkbox.addEventListener('change', e => { updateLpfState(); sendCommand("MEMWRITE", "LOW_PASS_FILTER_ENABLE", e.target.checked ? 1 : 0); });
    ui.lpf.freqSlider.addEventListener('input', e => ui.lpf.freqValue.textContent = e.target.value);
    ui.lpf.freqSlider.addEventListener('change', e => { if (ui.lpf.checkbox.checked) sendCommand("MEMWRITE", "LOW_PASS_FILTER_FREQ", parseInt(e.target.value)); });
    ui.lpf.slope.addEventListener('change', e => sendCommand("MEMWRITE", "LOW_PASS_FILTER_SLOPE", parseInt(e.target.value)));

    // Room Gain
    ui.roomGain.checkbox.addEventListener('change', e => { updateRoomGainState(); sendCommand("MEMWRITE", "ROOM_GAIN_ENABLE", e.target.checked ? 1 : 0); });
    ui.roomGain.freqSlider.addEventListener('input', e => ui.roomGain.freqValue.textContent = e.target.value);
    ui.roomGain.freqSlider.addEventListener('change', e => { const value = parseInt(e.target.value); const allowed = [25, 31, 40]; const snapped = allowed.reduce((p, c) => Math.abs(c - value) < Math.abs(p - value) ? c : p); e.target.value = snapped; ui.roomGain.freqValue.textContent = snapped; if (ui.roomGain.checkbox.checked) sendCommand("MEMWRITE", "ROOM_GAIN_FREQ", snapped); });
    ui.roomGain.slope.addEventListener('change', e => sendCommand("MEMWRITE", "ROOM_GAIN_SLOPE", parseInt(e.target.value)));

    // PEQ1,2,3
    ['peq1', 'peq2', 'peq3'].forEach(peq => {
        const group = ui[peq];
        const paramBase = peq.toUpperCase();
        group.checkbox.addEventListener('change', e => { const f = { peq1: updatePeq1State, peq2: updatePeq2State, peq3: updatePeq3State }[peq]; f(); sendCommand("MEMWRITE", paramBase + "_ENABLE", e.target.checked ? 1 : 0); });
        [['freqSlider', 'FREQ'], ['boostSlider', 'BOOST'], ['qSlider', 'QFACTOR']].forEach(([slider, param]) => {
            group[slider].addEventListener('input', e => { const val = slider === 'boostSlider' || slider === 'qSlider' ? parseFloat(e.target.value).toFixed(1) : e.target.value; group[slider.replace('Slider', 'Value')].textContent = val; });
            group[slider].addEventListener('change', e => { if (group.checkbox.checked) sendCommand("MEMWRITE", paramBase + "_" + param, slider === 'boostSlider' || slider === 'qSlider' ? parseFloat(e.target.value) : parseInt(e.target.value)); });
        });
    });

    // Standby, Polarity, PortTuning
    ui.standby.select.addEventListener('change', e => sendCommand("MEMWRITE", "STANDBY", parseInt(e.target.value)));
    ui.polarity.checkbox.addEventListener('change', e => { updatePolarityLabel(); sendCommand("MEMWRITE", "POLARITY", e.target.checked ? 1 : 0); });
    ui.portTuning.select.addEventListener('change', e => sendCommand("MEMWRITE", "PORTTUNING", parseInt(e.target.value)));

    // Initialize UI states
    updateLpfState(); updateRoomGainState(); updatePeq1State(); updatePeq2State(); updatePeq3State(); updatePolarityLabel();
});