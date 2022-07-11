# `@meetrix/webrtc-monitoring-common-lib`

This repository maintains shared utils and types across multiple projects

## Usage

1. Create a [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token) (required for two-factor authentication (2FA)), with the scope set to `api`. You can save this for future use too.
2. Run the below commands (sets config for the current user; use a `-g` after `set` to set for all users)

   ```sh
   npm config set '@meetrix:registry' https://gitlab.com/api/v4/packages/npm/
   npm config set -- '//gitlab.com/api/v4/packages/npm/:_authToken' "<your_token>"
   ```

   Alternatively, you can also create a `.npmrc` file in project root with the below command to set it for just the current project

   ```sh
   {
     echo "@meetrix:registry=https://gitlab.com/api/v4/packages/npm/"
     echo "//gitlab.com/api/v4/packages/npm/:_authToken=<your_token>"
   } >> .npmrc
   ```

   Be careful not to accidentally commit `.npmrc`; add it to your `.gitignore` file.

3. Import it into your source code

   ```js
   import { Meta } from '@meetrix/webrtc-monitoring-common-lib';
   ```

## Development

1. Clone the repository
2. Create a new branch for the task e.g.: `chore/WMS-999--fix-ci`
3. Do the changes
4. Make sure the code is up to the standards/conventions and commit+push the changes
5. ...

## Deployment

1. Decide on a version number https://semver.org/
2. Update package.json and package-lock.json "version" field
3. Add/merge this to master/main branch
4. Create a release with version number as the tag with `v` prefix e.g.: v0.1.14

You can also manually run the blocked deployment jobs for branches so that they can be installed with `npm i <package>@<branch>`.
