# `@meetrix/webrtc-monitoring-common-lib`

This repository maintains shared utils and types across multiple projects

## Usage

`npm install --save git+https://gitlab.com/meetrix/products/webrtc-monitoring/webrtc-monitoring-common-lib.git#master`

```js
import { Meta } from '@meetrix/webrtc-monitoring-common-lib';
```

## Development

To link local `@meetrix/webrtc-monitoring-common-lib` with any project follow these steps

1. In `tutopiya-lib` directory run `npm link`
2. In `tutopiya-question-engine-frontend` run `npm link @meetrix/webrtc-monitoring-common-lib`
