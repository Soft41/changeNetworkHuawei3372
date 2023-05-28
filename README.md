# Changing the network for the modem

```JavaScript

import modemService from "modem-service.js";

const result = await modemService.change4G("192.168.8.1") // return true or false
```

`If the network change is successful, the method returns true`

`If you need to change the IP address, you just need to change the network to 3G or 4G.
Note that the process is asynchronous.`

`If you have any questions, telegram for communication: t.me/Soft19`