# @tutopiya/lib

This repository maintains shared utils and types across multiple projects

## Usage

`npm install --save git+https://gitlab.com/tutopiya-dev/tutopiya-lib#master`

```js
import { Meta } from '@tutopiya/lib';
```

## Development

To link local `@tutopiya/lib` with any project follow these steps

1. In `tutopiya-lib` directory run `npm link`
2. In `tutopiya-question-engine-frontend` run `npm link @tutopiya/lib`
