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

function main(parent, configId, notificationConfig) {
  // [START securitycenter_v1p1beta1_generated_SecurityCenter_CreateNotificationConfig_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the new notification config's parent. Its format is
   *  "organizations/[organization_id]".
   */
  // const parent = 'abc123'
  /**
   *  Required. Unique identifier provided by the client within the parent scope.
   *  It must be between 1 and 128 characters, and contains alphanumeric
   *  characters, underscores or hyphens only.
   */
  // const configId = 'abc123'
  /**
   *  Required. The notification config being created. The name and the service account
   *  will be ignored as they are both output only fields on this resource.
   */
  // const notificationConfig = {}

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1p1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callCreateNotificationConfig() {
    // Construct request
    const request = {
      parent,
      configId,
      notificationConfig,
    };

    // Run request
    const response = await securitycenterClient.createNotificationConfig(request);
    console.log(response);
  }

  callCreateNotificationConfig();
  // [END securitycenter_v1p1beta1_generated_SecurityCenter_CreateNotificationConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
