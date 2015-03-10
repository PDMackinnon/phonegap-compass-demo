# phonegap-compass-demo
modify hello world phonegap app to display a compass needle pointing North

this is the www folder from the phonegap generated "hello world" demo, modified to use compass api

to build: either:

replace www folder on generated app e.g.:
```
> phonegap create my-compass
> phonegap platform add iOS
```
copy the www folder to replace the default www folder
```
>phonegap prepare
```
open xCode
build and run on device

use phonegap build service:
visit: https://build.phonegap.com
copy & paster the URL to this repo into PGB service page
add provisioning keys for platform if required
download with QRCode reader

#current problem
on Android with PGB, I get the result: "COMPASSERROR: CLASS NOT FOUND"


