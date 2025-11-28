// SVS Configuration
const SVS_MAC_ADDRESS = "08:EB:ED:69:31:38";
const CHAR22 = "6409d79d-cd28-479c-a639-92f9e1948b43";
const UUID = "1fee6acf-a826-4e37-9635-4d8a01642c5d";
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
let txBuffer = [];
let partialFrame = new Uint8Array();
let presetValues = ["MOVIE", "MUSIC", "CUSTOM", "DEFAULT"];

// CRC calculation (CRC-CCITT)
function crcHqx(data, crc = 0) {
    for (let i = 0; i < data.length; i++) {
        crc = ((crc << 8) & 0xFF00) ^ crcTable[((crc >> 8) ^ data[i]) & 0xFF];
    }
    return crc & 0xFFFF;
}

// CRC-CCITT lookup table
const crcTable = new Uint16Array([
    0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7,
    0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef,
    0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
    0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de,
    0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485,
    0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
    0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4,
    0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc,
    0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
    0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b,
    0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12,
    0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
    0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41,
    0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49,
    0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
    0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78,
    0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f,
    0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
    0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e,
    0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256,
    0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
    0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,
    0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c,
    0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
    0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab,
    0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3,
    0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
    0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92,
    0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9,
    0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
    0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8,
    0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0
]);

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

// Console logging
function logConsole(message) {
    const consoleDiv = document.getElementById('console');
    const line = document.createElement('div');
    line.className = 'console-line';
    line.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    consoleDiv.appendChild(line);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Bluetooth functions
async function connectToDevice() {
    try {
        logConsole('Requesting Bluetooth device...');
        bluetoothDevice = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: [UUID]
        });

        logConsole(`Connecting to ${bluetoothDevice.name}...`);
        const server = await bluetoothDevice.gatt.connect();

        logConsole('Getting service...');
        const service = await server.getPrimaryService(UUID);

        logConsole('Getting characteristic...');
        characteristic = await service.getCharacteristic(CHAR22);

        logConsole('Starting notifications...');
        await characteristic.startNotifications();
        characteristic.addEventListener('characteristicvaluechanged', handleNotifications);
        document.getElementById('connectBtn').textContent = 'Disconnect';
        document.getElementById('connectBtn').onclick = disconnectFromDevice;

        document.getElementsByClassName('header')[0].className = 'header hidden'
        
        setTimeout(() => {
            requestConfig();
        }, 500)
        
        document.getElementById('app').className = '';

    } catch (error) {
        logConsole(`ERROR: ${error.message}`);
        alert('Failed to connect to device. Make sure Bluetooth is enabled and the device is nearby.');
    }
}

function disconnectFromDevice() {
    if (bluetoothDevice && bluetoothDevice.gatt.connected) {
        bluetoothDevice.gatt.disconnect();
        logConsole('Disconnected');
        document.getElementById('connectBtn').textContent = 'Connect to Subwoofer';
        document.getElementById('connectBtn').onclick = connectToDevice;
        document.getElementById('connectBtn').className = 'btn'
        document.getElementById('app').className = 'hidden';
        document.getElementsByClassName('header')[0].className = 'header'
    }
}

function handleNotifications(event) {
    const value = new Uint8Array(event.target.value.buffer);

    if (value[0] === FRAME_PREAMBLE) {
        partialFrame = value;
    } else {
        partialFrame = concatArrays(partialFrame, value);
    }

    // Check if we have enough data to read the length field
    if (partialFrame.length >= 5) {
        const expectedLength = bytesToInt(partialFrame.slice(3, 5));

        // Only try to decode when we have the complete frame
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

async function sendFrame(frame) {
    if (!characteristic) {
        logConsole('ERROR: Not connected to device');
        return;
    }

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

// Widget refresh function
function refreshWidgets(values) {
    for (const [key, value] of Object.entries(values)) {
        switch (key) {
            case "VOLUME":
                document.getElementById('volumeSlider').value = value;
                document.getElementById('volumeValue').textContent = value;
                break;
            case "PHASE":
                document.getElementById('phaseSlider').value = value;
                document.getElementById('phaseValue').textContent = value;
                break;
            case "LOW_PASS_FILTER_ENABLE":
                document.getElementById('lpfCheckbox').checked = value === 1;
                updateLpfState();
                break;
            case "LOW_PASS_FILTER_FREQ":
                document.getElementById('lpfFreqSlider').value = value;
                document.getElementById('lpfFreqValue').textContent = value;
                break;
            case "LOW_PASS_FILTER_SLOPE":
                document.getElementById('lpfSlope').value = value;
                break;
            case "ROOM_GAIN_ENABLE":
                document.getElementById('roomGainCheckbox').checked = value === 1;
                updateRoomGainState();
                break;
            case "ROOM_GAIN_FREQ":
                document.getElementById('roomGainFreqSlider').value = value;
                document.getElementById('roomGainFreqValue').textContent = value;
                break;
            case "ROOM_GAIN_SLOPE":
                document.getElementById('roomGainSlope').value = value;
                break;
            case "PEQ1_ENABLE":
                document.getElementById('peq1Checkbox').checked = value === 1;
                updatePeq1State();
                break;
            case "PEQ1_FREQ":
                document.getElementById('peq1FreqSlider').value = value;
                document.getElementById('peq1FreqValue').textContent = value;
                break;
            case "PEQ1_BOOST":
                document.getElementById('peq1BoostSlider').value = value;
                document.getElementById('peq1BoostValue').textContent = value.toFixed(1);
                break;
            case "PEQ1_QFACTOR":
                document.getElementById('peq1QSlider').value = value;
                document.getElementById('peq1QValue').textContent = value.toFixed(1);
                break;
            case "PEQ2_ENABLE":
                document.getElementById('peq2Checkbox').checked = value === 1;
                updatePeq2State();
                break;
            case "PEQ2_FREQ":
                document.getElementById('peq2FreqSlider').value = value;
                document.getElementById('peq2FreqValue').textContent = value;
                break;
            case "PEQ2_BOOST":
                document.getElementById('peq2BoostSlider').value = value;
                document.getElementById('peq2BoostValue').textContent = value.toFixed(1);
                break;
            case "PEQ2_QFACTOR":
                document.getElementById('peq2QSlider').value = value;
                document.getElementById('peq2QValue').textContent = value.toFixed(1);
                break;
            case "PEQ3_ENABLE":
                document.getElementById('peq3Checkbox').checked = value === 1;
                updatePeq3State();
                break;
            case "PEQ3_FREQ":
                document.getElementById('peq3FreqSlider').value = value;
                document.getElementById('peq3FreqValue').textContent = value;
                break;
            case "PEQ3_BOOST":
                document.getElementById('peq3BoostSlider').value = value;
                document.getElementById('peq3BoostValue').textContent = value.toFixed(1);
                break;
            case "PEQ3_QFACTOR":
                document.getElementById('peq3QSlider').value = value;
                document.getElementById('peq3QValue').textContent = value.toFixed(1);
                break;
            case "STANDBY":
                document.getElementById('standbySelect').value = value;
                break;
            case "POLARITY":
                document.getElementById('polarityCheckbox').checked = value === 1;
                updatePolarityLabel();
                break;
            case "PORTTUNING":
                document.getElementById('portTuningSelect').value = value;
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

// UI Update functions
function updateLpfState() {
    const enabled = document.getElementById('lpfCheckbox').checked;
    document.getElementById('lpfFreqSlider').disabled = !enabled;
    document.getElementById('lpfSlope').disabled = !enabled;
    document.getElementById('lpfLabel').textContent = enabled ?
        'Low Pass Filter ON (LFE Inactive)' : 'Low Pass Filter OFF (LFE Active)';
}

function updateRoomGainState() {
    const enabled = document.getElementById('roomGainCheckbox').checked;
    document.getElementById('roomGainFreqSlider').disabled = !enabled;
    document.getElementById('roomGainSlope').disabled = !enabled;
    document.getElementById('roomGainLabel').textContent = enabled ?
        'Room Gain Compensation ON' : 'Room Gain Compensation OFF';
}

function updatePeq1State() {
    const enabled = document.getElementById('peq1Checkbox').checked;
    document.getElementById('peq1FreqSlider').disabled = !enabled;
    document.getElementById('peq1BoostSlider').disabled = !enabled;
    document.getElementById('peq1QSlider').disabled = !enabled;
    document.getElementById('peq1Label').textContent = enabled ? 'PEQ1 Enabled' : 'PEQ1 Disabled';
}

function updatePeq2State() {
    const enabled = document.getElementById('peq2Checkbox').checked;
    document.getElementById('peq2FreqSlider').disabled = !enabled;
    document.getElementById('peq2BoostSlider').disabled = !enabled;
    document.getElementById('peq2QSlider').disabled = !enabled;
    document.getElementById('peq2Label').textContent = enabled ? 'PEQ2 Enabled' : 'PEQ2 Disabled';
}

function updatePeq3State() {
    const enabled = document.getElementById('peq3Checkbox').checked;
    document.getElementById('peq3FreqSlider').disabled = !enabled;
    document.getElementById('peq3BoostSlider').disabled = !enabled;
    document.getElementById('peq3QSlider').disabled = !enabled;
    document.getElementById('peq3Label').textContent = enabled ? 'PEQ3 Enabled' : 'PEQ3 Disabled';
}

function updatePolarityLabel() {
    const checked = document.getElementById('polarityCheckbox').checked;
    document.getElementById('polarityLabel').textContent = checked ? 'Polarity (-)' : 'Polarity (+)';
}

function updatePresetDropdown() {
    const select = document.getElementById('presetSelect');
    for (let i = 0; i < 3; i++) {
        select.options[i].text = presetValues[i];
    }
}

// Tab switching
function switchTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active');
            contents[i].classList.add('active');
        } else {
            tab.classList.remove('active');
            contents[i].classList.remove('active');
        }
    });
}

// Preset functions
function loadPreset() {
    const presetIndex = parseInt(document.getElementById('presetSelect').value);
    sendCommand("PRESETLOADSAVE", `PRESET${presetIndex + 1}LOAD`);
}

function savePreset() {
    const presetIndex = parseInt(document.getElementById('presetSelect').value);
    if (presetIndex !== 3) {
        sendCommand("PRESETLOADSAVE", `PRESET${presetIndex + 1}SAVE`);
    } else {
        alert('Cannot save to DEFAULT preset');
    }
}

function renamePreset() {
    const presetIndex = parseInt(document.getElementById('presetSelect').value);
    if (presetIndex === 3) {
        alert('Cannot rename DEFAULT preset');
        return;
    }

    const newName = prompt('Enter new preset name (max 8 characters):', presetValues[presetIndex]);
    if (newName) {
        const filtered = newName.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 8);
        if (filtered && !presetValues.includes(filtered)) {
            presetValues[presetIndex] = filtered;
            updatePresetDropdown();
            sendCommand("MEMWRITE", `PRESET${presetIndex + 1}NAME`, filtered);
        }
    }
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', () => {
    // Connect button
    document.getElementById('connectBtn').onclick = connectToDevice;

    // Volume slider
    document.getElementById('volumeSlider').addEventListener('change', (e) => {
        document.getElementById('volumeValue').textContent = e.target.value;
        sendCommand("MEMWRITE", "VOLUME", parseInt(e.target.value));
    });
    document.getElementById('volumeSlider').addEventListener('input', (e) => {
        document.getElementById('volumeValue').textContent = e.target.value;
    });

    // Phase slider
    document.getElementById('phaseSlider').addEventListener('change', (e) => {
        document.getElementById('phaseValue').textContent = e.target.value;
        sendCommand("MEMWRITE", "PHASE", parseInt(e.target.value));
    });
    document.getElementById('phaseSlider').addEventListener('input', (e) => {
        document.getElementById('phaseValue').textContent = e.target.value;
    });

    // LPF controls
    document.getElementById('lpfCheckbox').addEventListener('change', (e) => {
        updateLpfState();
        sendCommand("MEMWRITE", "LOW_PASS_FILTER_ENABLE", e.target.checked ? 1 : 0);
    });
    document.getElementById('lpfFreqSlider').addEventListener('change', (e) => {
        document.getElementById('lpfFreqValue').textContent = e.target.value;
        if (document.getElementById('lpfCheckbox').checked) {
            sendCommand("MEMWRITE", "LOW_PASS_FILTER_FREQ", parseInt(e.target.value));
        }
    });
    document.getElementById('lpfFreqSlider').addEventListener('input', (e) => {
        document.getElementById('lpfFreqValue').textContent = e.target.value;
    });
    document.getElementById('lpfSlope').addEventListener('change', (e) => {
        sendCommand("MEMWRITE", "LOW_PASS_FILTER_SLOPE", parseInt(e.target.value));
    });

    // Room Gain controls
    document.getElementById('roomGainCheckbox').addEventListener('change', (e) => {
        updateRoomGainState();
        sendCommand("MEMWRITE", "ROOM_GAIN_ENABLE", e.target.checked ? 1 : 0);
    });
    document.getElementById('roomGainFreqSlider').addEventListener('change', (e) => {
        const value = parseInt(e.target.value);
        // Snap to discrete values
        const allowed = [25, 31, 40];
        const snapped = allowed.reduce((prev, curr) =>
            Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
        );
        e.target.value = snapped;
        document.getElementById('roomGainFreqValue').textContent = snapped;
        if (document.getElementById('roomGainCheckbox').checked) {
            sendCommand("MEMWRITE", "ROOM_GAIN_FREQ", snapped);
        }
    });
    document.getElementById('roomGainFreqSlider').addEventListener('input', (e) => {
        document.getElementById('roomGainFreqValue').textContent = e.target.value;
    });
    document.getElementById('roomGainSlope').addEventListener('change', (e) => {
        sendCommand("MEMWRITE", "ROOM_GAIN_SLOPE", parseInt(e.target.value));
    });

    // PEQ1 controls
    document.getElementById('peq1Checkbox').addEventListener('change', (e) => {
        updatePeq1State();
        sendCommand("MEMWRITE", "PEQ1_ENABLE", e.target.checked ? 1 : 0);
    });
    document.getElementById('peq1FreqSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq1Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ1_FREQ", parseInt(e.target.value));
        }
    });
    document.getElementById('peq1FreqSlider').addEventListener('input', (e) => {
        document.getElementById('peq1FreqValue').textContent = e.target.value;
    });
    document.getElementById('peq1BoostSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq1Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ1_BOOST", parseFloat(e.target.value));
        }
    });
    document.getElementById('peq1BoostSlider').addEventListener('input', (e) => {
        document.getElementById('peq1BoostValue').textContent = parseFloat(e.target.value).toFixed(1);
    });
    document.getElementById('peq1QSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq1Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ1_QFACTOR", parseFloat(e.target.value));
        }
    });
    document.getElementById('peq1QSlider').addEventListener('input', (e) => {
        document.getElementById('peq1QValue').textContent = parseFloat(e.target.value).toFixed(1);
    });

    // PEQ2 controls (similar to PEQ1)
    document.getElementById('peq2Checkbox').addEventListener('change', (e) => {
        updatePeq2State();
        sendCommand("MEMWRITE", "PEQ2_ENABLE", e.target.checked ? 1 : 0);
    });
    document.getElementById('peq2FreqSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq2Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ2_FREQ", parseInt(e.target.value));
        }
    });
    document.getElementById('peq2FreqSlider').addEventListener('input', (e) => {
        document.getElementById('peq2FreqValue').textContent = e.target.value;
    });
    document.getElementById('peq2BoostSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq2Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ2_BOOST", parseFloat(e.target.value));
        }
    });
    document.getElementById('peq2BoostSlider').addEventListener('input', (e) => {
        document.getElementById('peq2BoostValue').textContent = parseFloat(e.target.value).toFixed(1);
    });
    document.getElementById('peq2QSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq2Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ2_QFACTOR", parseFloat(e.target.value));
        }
    });
    document.getElementById('peq2QSlider').addEventListener('input', (e) => {
        document.getElementById('peq2QValue').textContent = parseFloat(e.target.value).toFixed(1);
    });

    // PEQ3 controls (similar to PEQ1)
    document.getElementById('peq3Checkbox').addEventListener('change', (e) => {
        updatePeq3State();
        sendCommand("MEMWRITE", "PEQ3_ENABLE", e.target.checked ? 1 : 0);
    });
    document.getElementById('peq3FreqSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq3Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ3_FREQ", parseInt(e.target.value));
        }
    });
    document.getElementById('peq3FreqSlider').addEventListener('input', (e) => {
        document.getElementById('peq3FreqValue').textContent = e.target.value;
    });
    document.getElementById('peq3BoostSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq3Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ3_BOOST", parseFloat(e.target.value));
        }
    });
    document.getElementById('peq3BoostSlider').addEventListener('input', (e) => {
        document.getElementById('peq3BoostValue').textContent = parseFloat(e.target.value).toFixed(1);
    });
    document.getElementById('peq3QSlider').addEventListener('change', (e) => {
        if (document.getElementById('peq3Checkbox').checked) {
            sendCommand("MEMWRITE", "PEQ3_QFACTOR", parseFloat(e.target.value));
        }
    });
    document.getElementById('peq3QSlider').addEventListener('input', (e) => {
        document.getElementById('peq3QValue').textContent = parseFloat(e.target.value).toFixed(1);
    });

    // Standby select
    document.getElementById('standbySelect').addEventListener('change', (e) => {
        sendCommand("MEMWRITE", "STANDBY", parseInt(e.target.value));
    });

    // Polarity checkbox
    document.getElementById('polarityCheckbox').addEventListener('change', (e) => {
        updatePolarityLabel();
        sendCommand("MEMWRITE", "POLARITY", e.target.checked ? 1 : 0);
    });

    // Port tuning select
    document.getElementById('portTuningSelect').addEventListener('change', (e) => {
        sendCommand("MEMWRITE", "PORTTUNING", parseInt(e.target.value));
    });

    // Initialize UI states
    updateLpfState();
    updateRoomGainState();
    updatePeq1State();
    updatePeq2State();
    updatePeq3State();
    updatePolarityLabel();
});