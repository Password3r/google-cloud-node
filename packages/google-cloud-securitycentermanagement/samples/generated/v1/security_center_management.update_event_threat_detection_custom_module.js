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

function main(updateMask, eventThreatDetectionCustomModule) {
  // [START securitycentermanagement_v1_generated_SecurityCenterManagement_UpdateEventThreatDetectionCustomModule_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Field mask is used to specify the fields to be overwritten in the
   *  EventThreatDetectionCustomModule resource by the update.
   *  The fields specified in the update_mask are relative to the resource, not
   *  the full request. A field will be overwritten if it is in the mask. If the
   *  user does not provide a mask then all fields will be overwritten.
   */
  // const updateMask = {}
  /**
   *  Required. The module being updated
   */
  // const eventThreatDetectionCustomModule = {}
  /**
   *  Optional. When set to true, only validations (including IAM checks) will
   *  done for the request (module will not be updated). An OK response indicates
   *  the request is valid while an error response indicates the request is
   *  invalid. Note that a subsequent request to actually update the module could
   *  still fail because 1. the state could have changed (e.g. IAM permission
   *  lost) or
   *  2. A failure occurred while trying to update the module.
   */
  // const validateOnly = true

  // Imports the Securitycentermanagement library
  const {SecurityCenterManagementClient} = require('@google-cloud/securitycentermanagement').v1;

  // Instantiates a client
  const securitycentermanagementClient = new SecurityCenterManagementClient();

  async function callUpdateEventThreatDetectionCustomModule() {
    // Construct request
    const request = {
      updateMask,
      eventThreatDetectionCustomModule,
    };

    // Run request
    const response = await securitycentermanagementClient.updateEventThreatDetectionCustomModule(request);
    console.log(response);
  }

  callUpdateEventThreatDetectionCustomModule();
  // [END securitycentermanagement_v1_generated_SecurityCenterManagement_UpdateEventThreatDetectionCustomModule_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
