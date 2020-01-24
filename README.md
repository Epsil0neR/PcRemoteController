# PcRemoteController
PC remote controller for phone via LAN connection.

**Server tasks:**
- [ ] Create service
  - [x] Configure URI for WebSocket
  - [ ] Configure restrictions for WebSocket connections

- [ ] Configure WebSocket
  - [ ] Connection must be password protected.
  
- [ ] Library for manipulating PC
  - [ ] Keyboard / Mouse
    - [x] Media keys
    - [x] Volume keys
    - [x] Other keys (any or from whitelist only?)
    - [ ] Joystick
    - [ ] Touchpad
  - [ ] Commands (must be registered locally and invoked only by command name)
  - [ ] Files 
    - [x] Configure allowed roots for view (with file extensions that client can see)
    - [x] Provide directory content (directories and allowed files)
    - [x] Execute file (any or from whitelist only? whitelist example: *.mp3, *.avi)
  - [ ] Sound
    - [x] Volume change (by setting 0-100 value)
    - [ ] Change current output device (speakers / headset / headphone)
    - [ ] Change current input device (mic / headset)
  
- [ ] Library for reading data from PC (with updates)
  - [ ] Master volume changes
  - [ ] Sound output device list and changes
  - [ ] Sound input device list and changes
  - [ ] Mute / unmute mic
  - [ ] CPU stats (temp / laod / speed)

**Client side (Android native):**
- [ ] ***TBD***


**Client side (Web app):**
- [ ] ***TBD***
