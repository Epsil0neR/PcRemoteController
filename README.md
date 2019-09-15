# PcRemoteController
PC remote controller for phone via LAN connection.

**Server tasks:**
- [ ] Create service
  - [ ] Configure URI for WebSocket
  - [ ] Configure restrictions for WebSocket connections

- [ ] Configure WebSocket
  - [ ] Connection must be password protected.
  
- [ ] Library for manipulating PC
  - [ ] Keyboard / Mouse
    - [x] Media keys
    - [x] Volume keys
    - [ ] Other keys (any or from whitelist only?)
  - [ ] Commands (must be registered locally and invoked only by command name)
  - [ ] Files 
    - [x] Configure allowed roots for view (with file extensions that client can see)
    - [x] Provide directory content (directories and allowed files)
    - [x] Execute file (any or from whitelist only? whitelist example: *.mp3, *.avi)
  
- [ ] Library for reading data from PC (with updates)
  - [ ] Master volume changes
  - [ ] Volume output device changes
  - [ ] Mute / unmute mic
  - [ ] CPU stats (temp / laod / speed)

**Client side (Android native):**
- [ ] ***TBD***


**Client side (Web app):**
- [ ] ***TBD***
