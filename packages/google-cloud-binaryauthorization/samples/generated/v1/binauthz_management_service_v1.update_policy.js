// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(policy) {
  // [START binaryauthorization_v1_generated_BinauthzManagementServiceV1_UpdatePolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A new or updated policy google.cloud.binaryauthorization.v1.Policy  value. The service will
   *  overwrite the policy name google.cloud.binaryauthorization.v1.Policy.name  field with the resource name in
   *  the request URL, in the format `projects/* /policy`.
   */
  // const policy = {}

  // Imports the Binaryauthorization library
  const {BinauthzManagementServiceV1Client} =
    require('@google-cloud/binary-authorization').v1;

  // Instantiates a client
  const binaryauthorizationClient = new BinauthzManagementServiceV1Client();

  async function callUpdatePolicy() {
    // Construct request
    const request = {
      policy,
    };

    // Run request
    const response = await binaryauthorizationClient.updatePolicy(request);
    console.log(response);
  }

  callUpdatePolicy();
  // [END binaryauthorization_v1_generated_BinauthzManagementServiceV1_UpdatePolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
