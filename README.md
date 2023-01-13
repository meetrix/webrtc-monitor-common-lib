# `@meetrix/webrtc-monitoring-common-lib`

This repository maintains shared utils and types across multiple projects

## Usage

1. insert webrtc-monitoring-common-lib to dependencies array
   ```sh
   "@meetrix/webrtc-monitoring-common-lib": "git+https://github.com/meetrix/webrtc-monitoring-common-lib.git",
   ```
2. Import it into your source code

   ```js
   import { Report } from '@meetrix/webrtc-monitoring-common-lib';
   ```

## Development

1. Clone the repository
2. Create a new branch for the task e.g.: `chore/WMS-999--fix-ci`
3. Do the changes
4. Make sure the code is up to the standards/conventions and commit+push the changes

## Deployment

1. Decide on a version number https://semver.org/
2. Update package.json and package-lock.json "version" field
3. Add/merge this to master/main branch
