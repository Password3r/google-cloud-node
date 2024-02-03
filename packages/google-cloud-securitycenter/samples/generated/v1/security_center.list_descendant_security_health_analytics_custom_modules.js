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

function main(parent) {
  // [START securitycenter_v1_generated_SecurityCenter_ListDescendantSecurityHealthAnalyticsCustomModules_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of parent to list descendant custom modules. Its format is
   *  "organizations/{organization}/securityHealthAnalyticsSettings",
   *  "folders/{folder}/securityHealthAnalyticsSettings", or
   *  "projects/{project}/securityHealthAnalyticsSettings"
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of results to return in a single response. Default is
   *  10, minimum is 1, maximum is 1000.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last call indicating a continuation
   */
  // const pageToken = 'abc123'

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callListDescendantSecurityHealthAnalyticsCustomModules() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = securitycenterClient.listDescendantSecurityHealthAnalyticsCustomModulesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDescendantSecurityHealthAnalyticsCustomModules();
  // [END securitycenter_v1_generated_SecurityCenter_ListDescendantSecurityHealthAnalyticsCustomModules_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
