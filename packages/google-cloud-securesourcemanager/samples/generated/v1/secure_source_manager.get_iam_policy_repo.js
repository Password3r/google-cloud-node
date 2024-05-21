// Copyright 2024 Google LLC
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

function main(resource) {
  // [START securesourcemanager_v1_generated_SecureSourceManager_GetIamPolicyRepo_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  REQUIRED: The resource for which the policy is being requested.
   *  See the operation documentation for the appropriate value for this field.
   */
  // const resource = 'abc123'
  /**
   *  OPTIONAL: A `GetPolicyOptions` object for specifying options to
   *  `GetIamPolicy`.
   */
  // const options = {}

  // Imports the Securesourcemanager library
  const {SecureSourceManagerClient} = require('@google-cloud/securesourcemanager').v1;

  // Instantiates a client
  const securesourcemanagerClient = new SecureSourceManagerClient();

  async function callGetIamPolicyRepo() {
    // Construct request
    const request = {
      resource,
    };

    // Run request
    const response = await securesourcemanagerClient.getIamPolicyRepo(request);
    console.log(response);
  }

  callGetIamPolicyRepo();
  // [END securesourcemanager_v1_generated_SecureSourceManager_GetIamPolicyRepo_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
