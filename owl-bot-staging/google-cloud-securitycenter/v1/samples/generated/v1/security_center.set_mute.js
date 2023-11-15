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

function main(name, mute) {
  // [START securitycenter_v1_generated_SecurityCenter_SetMute_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource
   *  name (https://cloud.google.com/apis/design/resource_names#relative_resource_name)
   *  of the finding. Example:
   *  "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}",
   *  "folders/{folder_id}/sources/{source_id}/findings/{finding_id}",
   *  "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
   */
  // const name = 'abc123'
  /**
   *  Required. The desired state of the Mute.
   */
  // const mute = {}

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callSetMute() {
    // Construct request
    const request = {
      name,
      mute,
    };

    // Run request
    const response = await securitycenterClient.setMute(request);
    console.log(response);
  }

  callSetMute();
  // [END securitycenter_v1_generated_SecurityCenter_SetMute_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
