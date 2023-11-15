// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main() {
  // [START cloudshell_v1_generated_CloudShellService_AuthorizeEnvironment_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the resource that should receive the credentials, for example
   *  `users/me/environments/default` or
   *  `users/someone@example.com/environments/default`.
   */
  // const name = 'abc123'
  /**
   *  The OAuth access token that should be sent to the environment.
   */
  // const accessToken = 'abc123'
  /**
   *  The OAuth ID token that should be sent to the environment.
   */
  // const idToken = 'abc123'
  /**
   *  The time when the credentials expire. If not set, defaults to one hour from
   *  when the server received the request.
   */
  // const expireTime = {}

  // Imports the Shell library
  const {CloudShellServiceClient} = require('@google-cloud/shell').v1;

  // Instantiates a client
  const shellClient = new CloudShellServiceClient();

  async function callAuthorizeEnvironment() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await shellClient.authorizeEnvironment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callAuthorizeEnvironment();
  // [END cloudshell_v1_generated_CloudShellService_AuthorizeEnvironment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
