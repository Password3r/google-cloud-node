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

function main(dataPolicy) {
  // [START bigquerydatapolicy_v1_generated_DataPolicyService_UpdateDataPolicy_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Update the data policy's metadata.
   *  The target data policy is determined by the `name` field.
   *  Other fields are updated to the specified values based on the field masks.
   */
  // const dataPolicy = {}
  /**
   *  The update mask applies to the resource. For the `FieldMask` definition,
   *  see
   *  https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   *  If not set, defaults to all of the fields that are allowed to update.
   *  Updates to the `name` and `dataPolicyId` fields are not allowed.
   */
  // const updateMask = {}

  // Imports the Datapolicies library
  const {DataPolicyServiceClient} = require('@google-cloud/datapolicies').v1;

  // Instantiates a client
  const datapoliciesClient = new DataPolicyServiceClient();

  async function callUpdateDataPolicy() {
    // Construct request
    const request = {
      dataPolicy,
    };

    // Run request
    const response = await datapoliciesClient.updateDataPolicy(request);
    console.log(response);
  }

  callUpdateDataPolicy();
  // [END bigquerydatapolicy_v1_generated_DataPolicyService_UpdateDataPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
