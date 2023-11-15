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

function main(parent, servingConfig, servingConfigId) {
  // [START retail_v2_generated_ServingConfigService_CreateServingConfig_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Full resource name of parent. Format:
   *  `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The ServingConfig to create.
   */
  // const servingConfig = {}
  /**
   *  Required. The ID to use for the ServingConfig, which will become the final
   *  component of the ServingConfig's resource name.
   *  This value should be 4-63 characters, and valid characters
   *  are /[a-z][0-9]-_/.
   */
  // const servingConfigId = 'abc123'

  // Imports the Retail library
  const {ServingConfigServiceClient} = require('@google-cloud/retail').v2;

  // Instantiates a client
  const retailClient = new ServingConfigServiceClient();

  async function callCreateServingConfig() {
    // Construct request
    const request = {
      parent,
      servingConfig,
      servingConfigId,
    };

    // Run request
    const response = await retailClient.createServingConfig(request);
    console.log(response);
  }

  callCreateServingConfig();
  // [END retail_v2_generated_ServingConfigService_CreateServingConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
