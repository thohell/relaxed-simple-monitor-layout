## relaxed-simple-monitor-layout

This is a tiny npm module that does one thing, and one thing only. It contains a simple parser for **xrandr** that returns the layout of any active monitors as an array. You need to have the binary **xrandr** in your path. Only the layout of the current screen is returned.

This little snippet was written using **node 8.5.0** on an **Ubuntu 17.04** (amd64) system. There are absolutely no guarantees that this will work in any other configuration.


Install from npm registry:
```
npm install relaxed-simple-monitor-layout
```

Install from GitHub:
```
git clone https://github.com/thohell/relaxed-simple-monitor-layout
cd relaxed-simple-monitor-layout
tsc
npm install
```


Sample usage:
```
console.log(JSON.stringify(require('relaxed-simple-monitor-layout').getMonitorLayout(), null, 4));
```

Sample output:
```
[
    {
        "name": "DVI-I-1",
        "primary": false,
        "layout": {
            "width": 1080,
            "height": 1920,
            "top": 0,
            "left": 0
        }
    },
    {
        "name": "HDMI-0",
        "primary": false,
        "layout": {
            "width": 1080,
            "height": 1920,
            "top": 0,
            "left": 4920
        }
    },
    {
        "name": "DP-1",
        "primary": true,
        "layout": {
            "width": 3840,
            "height": 2160,
            "top": 0,
            "left": 1080
        }
    }
]
```

